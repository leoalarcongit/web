#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');
const chalk = require('chalk');

// Configuración de optimización
const CONFIG = {
  // Formatos de salida
  formats: ['webp', 'avif', 'jpeg'],
  
  // Tamaños responsive (ancho en píxeles)
  sizes: [400, 800, 1200, 1920],
  
  // Calidad por formato
  quality: {
    webp: 85,
    avif: 80,
    jpeg: 85,
    png: 90
  },
  
  // Directorio de entrada y salida
  inputDir: 'public',
  outputDir: 'public/optimized',
  
  // Patrones de archivos a procesar
  patterns: [
    '**/*.{jpg,jpeg,png,webp,tiff,bmp}',
    '!optimized/**/*', // Excluir carpeta de salida
    '!**/node_modules/**/*' // Excluir node_modules
  ]
};

class ImageOptimizer {
  constructor() {
    this.processedCount = 0;
    this.totalSize = 0;
    this.optimizedSize = 0;
  }

  async init() {
    console.log(chalk.blue.bold('🖼️  Optimizador de Imágenes para Web'));
    console.log(chalk.gray('Iniciando proceso de optimización...\n'));
    
    // Crear directorio de salida si no existe
    await this.ensureDir(CONFIG.outputDir);
    
    // Buscar todas las imágenes
    const images = await this.findImages();
    
    if (images.length === 0) {
      console.log(chalk.yellow('⚠️  No se encontraron imágenes para procesar.'));
      return;
    }
    
    console.log(chalk.green(`📁 Encontradas ${images.length} imágenes para procesar\n`));
    
    // Procesar cada imagen
    for (const imagePath of images) {
      await this.processImage(imagePath);
    }
    
    // Mostrar resumen
    this.showSummary();
  }

  async findImages() {
    const images = [];
    
    for (const pattern of CONFIG.patterns) {
      const files = await glob(pattern, { 
        cwd: CONFIG.inputDir,
        absolute: false 
      });
      images.push(...files.map(file => path.join(CONFIG.inputDir, file)));
    }
    
    // Eliminar duplicados y filtrar archivos que existen
    const uniqueImages = [...new Set(images)];
    const existingImages = [];
    
    for (const img of uniqueImages) {
      try {
        await fs.access(img);
        existingImages.push(img);
      } catch (error) {
        // Archivo no existe, ignorar
      }
    }
    
    return existingImages;
  }

  async processImage(imagePath) {
    try {
      const relativePath = path.relative(CONFIG.inputDir, imagePath);
      const fileName = path.parse(relativePath).name;
      const dirName = path.dirname(relativePath);
      
      console.log(chalk.cyan(`🔄 Procesando: ${relativePath}`));
      
      // Obtener información de la imagen original
      const originalStats = await fs.stat(imagePath);
      this.totalSize += originalStats.size;
      
      const image = sharp(imagePath);
      const metadata = await image.metadata();
      
      // Crear directorio de salida para esta imagen
      const outputDir = path.join(CONFIG.outputDir, dirName);
      await this.ensureDir(outputDir);
      
      let processedSizes = 0;
      
      // Generar diferentes tamaños y formatos
      for (const size of CONFIG.sizes) {
        // Solo generar tamaños menores o iguales al original
        if (size > metadata.width) continue;
        
        for (const format of CONFIG.formats) {
          const outputFileName = `${fileName}-${size}w.${format}`;
          const outputPath = path.join(outputDir, outputFileName);
          
          await this.optimizeImage(imagePath, outputPath, size, format);
          processedSizes++;
        }
      }
      
      // Generar también el tamaño original optimizado
      for (const format of CONFIG.formats) {
        const outputFileName = `${fileName}-original.${format}`;
        const outputPath = path.join(outputDir, outputFileName);
        
        await this.optimizeImage(imagePath, outputPath, metadata.width, format);
        processedSizes++;
      }
      
      this.processedCount++;
      console.log(chalk.green(`  ✅ Generadas ${processedSizes} variantes\n`));
      
    } catch (error) {
      console.error(chalk.red(`  ❌ Error procesando ${imagePath}:`), error.message);
    }
  }

  async optimizeImage(inputPath, outputPath, width, format) {
    try {
      let pipeline = sharp(inputPath)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });

      // Configurar formato y calidad
      switch (format) {
        case 'webp':
          pipeline = pipeline.webp({ 
            quality: CONFIG.quality.webp,
            effort: 6 // Mayor esfuerzo de compresión
          });
          break;
        case 'avif':
          pipeline = pipeline.avif({ 
            quality: CONFIG.quality.avif,
            effort: 9 // Máximo esfuerzo de compresión
          });
          break;
        case 'jpeg':
          pipeline = pipeline.jpeg({ 
            quality: CONFIG.quality.jpeg,
            progressive: true,
            mozjpeg: true // Usar mozjpeg para mejor compresión
          });
          break;
        case 'png':
          pipeline = pipeline.png({ 
            quality: CONFIG.quality.png,
            compressionLevel: 9,
            progressive: true
          });
          break;
      }

      await pipeline.toFile(outputPath);
      
      // Calcular tamaño del archivo optimizado
      const stats = await fs.stat(outputPath);
      this.optimizedSize += stats.size;
      
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(chalk.gray(`    📦 ${path.basename(outputPath)} - ${sizeKB}KB`));
      
    } catch (error) {
      console.error(chalk.red(`    ❌ Error optimizando ${outputPath}:`), error.message);
    }
  }

  async ensureDir(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
  }

  showSummary() {
    const originalSizeMB = (this.totalSize / 1024 / 1024).toFixed(2);
    const optimizedSizeMB = (this.optimizedSize / 1024 / 1024).toFixed(2);
    const savings = this.totalSize > 0 ? 
      (((this.totalSize - this.optimizedSize) / this.totalSize) * 100).toFixed(1) : 0;
    
    console.log(chalk.blue.bold('\n📊 RESUMEN DE OPTIMIZACIÓN'));
    console.log(chalk.gray('================================'));
    console.log(chalk.white(`📁 Imágenes procesadas: ${this.processedCount}`));
    console.log(chalk.white(`📏 Tamaño original: ${originalSizeMB} MB`));
    console.log(chalk.white(`🗜️  Tamaño optimizado: ${optimizedSizeMB} MB`));
    console.log(chalk.green(`💾 Ahorro: ${savings}%`));
    console.log(chalk.gray(`\n📂 Imágenes optimizadas guardadas en: ${CONFIG.outputDir}`));
    
    console.log(chalk.yellow.bold('\n💡 CÓMO USAR LAS IMÁGENES OPTIMIZADAS:'));
    console.log(chalk.gray('1. Usa el componente Image de Next.js'));
    console.log(chalk.gray('2. Implementa lazy loading'));
    console.log(chalk.gray('3. Usa diferentes tamaños según el viewport'));
    console.log(chalk.gray('4. Prioriza WebP/AVIF con fallback a JPEG\n'));
  }
}

// Función para limpiar directorio de salida
async function cleanOutput() {
  try {
    await fs.rm(CONFIG.outputDir, { recursive: true, force: true });
    console.log(chalk.yellow('🧹 Directorio de salida limpiado\n'));
  } catch (error) {
    // Directorio no existe, continuar
  }
}

// Ejecutar el optimizador
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--clean')) {
    await cleanOutput();
  }
  
  const optimizer = new ImageOptimizer();
  await optimizer.init();
}

// Manejar errores no capturados
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('❌ Error no manejado:'), error);
  process.exit(1);
});

// Ejecutar si es llamado directamente
if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('❌ Error fatal:'), error);
    process.exit(1);
  });
}

module.exports = { ImageOptimizer, CONFIG };

