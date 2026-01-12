const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testCloudinaryConnection() {
  console.log('🧪 Probando conexión con Cloudinary...');
  console.log('━'.repeat(50));
  
  // Verificar variables de entorno
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  
  console.log(`📡 Cloud Name: ${cloudName ? '✅ Configurado' : '❌ Faltante'}`);
  console.log(`🔑 API Key: ${apiKey ? '✅ Configurado' : '❌ Faltante'}`);
  console.log(`🔐 API Secret: ${apiSecret ? '✅ Configurado' : '❌ Faltante'}`);
  
  if (!cloudName || !apiKey || !apiSecret) {
    console.log('\n❌ Error: Faltan variables de entorno');
    console.log('Por favor configura tu archivo .env.local con:');
    console.log('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name');
    console.log('CLOUDINARY_API_KEY=tu-api-key');
    console.log('CLOUDINARY_API_SECRET=tu-api-secret');
    return;
  }
  
  try {
    // Probar conexión con una consulta simple
    console.log('\n🔍 Probando conexión...');
    const result = await cloudinary.api.ping();
    console.log('✅ Conexión exitosa con Cloudinary!');
    console.log(`📊 Status: ${result.status}`);
    
    // Obtener información de la cuenta
    console.log('\n📊 Obteniendo información de la cuenta...');
    const usage = await cloudinary.api.usage();
    console.log(`💾 Almacenamiento usado: ${(usage.storage.used_bytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📈 Créditos usados este mes: ${usage.credits.used_percent}%`);
    console.log(`🎯 Plan: ${usage.plan || 'Free'}`);
    
  } catch (error) {
    console.log('\n❌ Error de conexión:');
    console.log('Error completo:', error);
    console.log('Mensaje:', error.message || 'Sin mensaje de error');
    console.log('Código HTTP:', error.http_code || 'Sin código');
    console.log('Detalles:', error.error || 'Sin detalles');
    
    if (error.http_code === 401) {
      console.log('\n🔐 Problema de autenticación:');
      console.log('- Verifica que tu API Key sea correcta');
      console.log('- Verifica que tu API Secret sea correcta');
      console.log('- Asegúrate de que no haya espacios extra en las credenciales');
    } else if (error.http_code === 404) {
      console.log('\n📡 Problema con Cloud Name:');
      console.log('- Verifica que tu Cloud Name sea correcto');
      console.log('- No debe incluir "https://" ni otros prefijos');
    } else {
      console.log('\n🔧 Posibles soluciones:');
      console.log('1. Verifica que el archivo .env.local esté en la raíz del proyecto');
      console.log('2. Reinicia el terminal después de crear .env.local');
      console.log('3. Verifica que no haya espacios en las variables de entorno');
      console.log('4. Asegúrate de que las credenciales sean de tu cuenta activa');
    }
  }
}

testCloudinaryConnection().catch(console.error);
