const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadWeddingPhotos() {
  console.log('🚀 Iniciando migración a Cloudinary...');
  console.log(`📡 Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);
  
  const categories = [
    { folder: 'civil', cloudinaryFolder: 'wedding/ceremonia', displayName: 'Ceremonia Civil' },
    { folder: 'fiesta/V&A MATRIMONIO', cloudinaryFolder: 'wedding/fiesta', displayName: 'Fiesta' },
  ];

  let totalUploaded = 0;
  let totalErrors = 0;

  for (const category of categories) {
    const localPath = path.join('./public/galeria', category.folder);
    
    if (fs.existsSync(localPath)) {
      const files = fs.readdirSync(localPath).filter(file => 
        file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.jpeg')
      );
      
      console.log(`\n📁 ${category.displayName}: ${files.length} archivos`);
      console.log('━'.repeat(50));
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(localPath, file);
        // Limpiar el nombre del archivo para Cloudinary (remover caracteres especiales)
        const cleanName = path.parse(file).name
          .replace(/[&]/g, 'and')  // Reemplazar & con 'and'
          .replace(/[^a-zA-Z0-9\-_]/g, '_')  // Reemplazar otros caracteres especiales con _
          .replace(/_+/g, '_')  // Reemplazar múltiples _ con uno solo
          .replace(/^_|_$/g, '');  // Remover _ al inicio y final
        const publicId = cleanName;
        
        try {
          const result = await cloudinary.uploader.upload(filePath, {
            folder: category.cloudinaryFolder,
            public_id: publicId,
            quality: 'auto',
            fetch_format: 'auto',
            transformation: [
              { width: 1200, height: 800, crop: 'limit' },
              { quality: 'auto' }
            ],
            overwrite: true, // Sobrescribir si ya existe
          });
          
          totalUploaded++;
          const progress = Math.round(((i + 1) / files.length) * 100);
          console.log(`✅ [${progress}%] ${result.public_id} (${result.bytes} bytes)`);
          
          // Pequeña pausa para no saturar la API
          await new Promise(resolve => setTimeout(resolve, 100));
          
        } catch (error) {
          totalErrors++;
          console.error(`❌ Error subiendo ${file}:`, error.message);
        }
      }
    } else {
      console.log(`⚠️  Carpeta no encontrada: ${localPath}`);
    }
  }
  
  console.log('\n🎉 ¡Migración completada!');
  console.log(`✅ Subidas exitosas: ${totalUploaded}`);
  console.log(`❌ Errores: ${totalErrors}`);
  console.log(`📊 Total procesadas: ${totalUploaded + totalErrors}`);
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  uploadWeddingPhotos().catch(console.error);
}

module.exports = { uploadWeddingPhotos };


