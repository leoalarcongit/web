const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testSingleUpload() {
  console.log('🧪 Probando subida de una imagen...');
  
  const testFile = './public/galeria/civil/V&A-001.webp';
  
  // Limpiar el nombre del archivo
  const originalName = path.parse(testFile).name;
  const cleanName = originalName
    .replace(/[&]/g, 'and')  // Reemplazar & con 'and'
    .replace(/[^a-zA-Z0-9\-_]/g, '_')  // Reemplazar otros caracteres especiales con _
    .replace(/_+/g, '_')  // Reemplazar múltiples _ con uno solo
    .replace(/^_|_$/g, '');  // Remover _ al inicio y final
  
  console.log(`📝 Nombre original: ${originalName}`);
  console.log(`🧹 Nombre limpio: ${cleanName}`);
  console.log(`📁 Carpeta destino: wedding/ceremonia`);
  
  try {
    const result = await cloudinary.uploader.upload(testFile, {
      folder: 'wedding/ceremonia',
      public_id: cleanName,
      quality: 'auto',
      fetch_format: 'auto',
      transformation: [
        { width: 1200, height: 800, crop: 'limit' },
        { quality: 'auto' }
      ],
      overwrite: true,
    });
    
    console.log('\n✅ ¡Subida exitosa!');
    console.log(`📊 Public ID: ${result.public_id}`);
    console.log(`🌐 URL: ${result.secure_url}`);
    console.log(`💾 Tamaño: ${result.bytes} bytes`);
    console.log(`📐 Dimensiones: ${result.width}x${result.height}`);
    
  } catch (error) {
    console.log('\n❌ Error en la subida:');
    console.log(error.message);
    console.log('Detalles:', error.error || error);
  }
}

testSingleUpload().catch(console.error);
