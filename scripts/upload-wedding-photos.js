const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadWeddingPhotos() {
  const categories = [
    { folder: 'civil', cloudinaryFolder: 'wedding/ceremonia' },
    { folder: 'fiesta/V&A MATRIMONIO', cloudinaryFolder: 'wedding/fiesta' },
  ];

  for (const category of categories) {
    const localPath = path.join('./public/galeria', category.folder);
    
    if (fs.existsSync(localPath)) {
      const files = fs.readdirSync(localPath);
      console.log(`📁 Procesando ${files.length} archivos en ${category.folder}`);
      
      for (const file of files) {
        if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          const filePath = path.join(localPath, file);
          const publicId = path.parse(file).name;
          
          try {
            const result = await cloudinary.uploader.upload(filePath, {
              folder: category.cloudinaryFolder,
              public_id: publicId,
              quality: 'auto:good',
              format: 'auto',
              transformation: [
                { width: 1200, height: 800, crop: 'limit' },
                { quality: 'auto:good' }
              ]
            });
            
            console.log(`✅ Subido: ${result.public_id}`);
          } catch (error) {
            console.error(`❌ Error subiendo ${file}:`, error.message);
          }
        }
      }
    }
  }
  
  console.log('🎉 ¡Migración completada!');
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  uploadWeddingPhotos().catch(console.error);
}

module.exports = { uploadWeddingPhotos };


