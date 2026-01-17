const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function checkCloudinaryImages() {
  console.log('🔍 Verificando imágenes en Cloudinary...');
  console.log(`📡 Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);
  
  try {
    // Verificar imágenes de ceremonia
    console.log('\n📁 Verificando ceremonia...');
    const ceremoniaResult = await cloudinary.search
      .expression('folder:wedding/ceremonia')
      .sort_by([['created_at', 'desc']])
      .max_results(10)
      .execute();
    
    console.log(`✅ Encontradas ${ceremoniaResult.total_count} imágenes de ceremonia`);
    if (ceremoniaResult.resources.length > 0) {
      console.log('Primeras 5 imágenes:');
      ceremoniaResult.resources.slice(0, 5).forEach(resource => {
        console.log(`  - ${resource.public_id}`);
      });
    }
    
    // Verificar imágenes de fiesta
    console.log('\n📁 Verificando fiesta...');
    const fiestaResult = await cloudinary.search
      .expression('folder:wedding/fiesta')
      .sort_by([['created_at', 'desc']])
      .max_results(10)
      .execute();
    
    console.log(`✅ Encontradas ${fiestaResult.total_count} imágenes de fiesta`);
    if (fiestaResult.resources.length > 0) {
      console.log('Primeras 5 imágenes:');
      fiestaResult.resources.slice(0, 5).forEach(resource => {
        console.log(`  - ${resource.public_id}`);
      });
    }
    
    // Verificar una imagen específica
    console.log('\n🔍 Verificando imagen específica: wedding/ceremonia/VandA-001');
    try {
      const specificResult = await cloudinary.api.resource('wedding/ceremonia/VandA-001');
      console.log(`✅ Imagen encontrada: ${specificResult.public_id}`);
      console.log(`   URL: ${specificResult.secure_url}`);
    } catch (error) {
      console.log(`❌ Imagen no encontrada: wedding/ceremonia/VandA-001`);
      console.log(`   Error: ${error.message}`);
    }
    
  } catch (error) {
    console.error('❌ Error verificando Cloudinary:', error.message);
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  checkCloudinaryImages().catch(console.error);
}

module.exports = { checkCloudinaryImages };
