const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testSingleImage() {
  console.log('🔍 Probando diferentes variaciones del nombre...');
  
  const variations = [
    'wedding/ceremonia/VandA-001',
    'wedding/ceremonia/VandA-018', 
    'wedding/ceremonia/V_A-001',
    'wedding/ceremonia/V_A-018',
    'wedding/fiesta/VandA-016',
    'wedding/fiesta/V_A-016'
  ];
  
  for (const variation of variations) {
    try {
      const result = await cloudinary.api.resource(variation);
      console.log(`✅ ENCONTRADA: ${variation}`);
      console.log(`   URL: ${result.secure_url}`);
      return variation; // Retornar la primera que funcione
    } catch (error) {
      console.log(`❌ No encontrada: ${variation}`);
    }
  }
  
  console.log('\n🔍 Listando todas las imágenes en wedding/ceremonia...');
  try {
    const result = await cloudinary.search
      .expression('folder:wedding/ceremonia')
      .max_results(5)
      .execute();
    
    if (result.resources.length > 0) {
      console.log('Primeras 5 imágenes encontradas:');
      result.resources.forEach(resource => {
        console.log(`  - ${resource.public_id}`);
      });
    } else {
      console.log('No se encontraron imágenes en wedding/ceremonia');
    }
  } catch (error) {
    console.log('Error listando imágenes:', error.message);
  }
}

testSingleImage().catch(console.error);
