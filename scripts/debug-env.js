require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

console.log('🔍 Diagnóstico de Variables de Entorno');
console.log('━'.repeat(50));

// Verificar si existe el archivo .env.local
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

console.log(`📁 Archivo .env.local: ${envExists ? '✅ Existe' : '❌ No encontrado'}`);
console.log(`📍 Ruta esperada: ${envPath}`);

if (envExists) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log('\n📄 Contenido del archivo .env.local:');
    console.log('━'.repeat(30));
    
    // Mostrar contenido censurado
    const lines = envContent.split('\n');
    lines.forEach((line, index) => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          const maskedValue = value.length > 4 ? 
            value.substring(0, 4) + '*'.repeat(value.length - 4) : 
            '*'.repeat(value.length);
          console.log(`${index + 1}: ${key}=${maskedValue}`);
        }
      } else {
        console.log(`${index + 1}: ${line}`);
      }
    });
  } catch (error) {
    console.log(`❌ Error leyendo archivo: ${error.message}`);
  }
}

console.log('\n🔧 Variables de entorno cargadas:');
console.log('━'.repeat(30));

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

console.log(`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${cloudName ? `✅ "${cloudName}"` : '❌ No definida'}`);
console.log(`CLOUDINARY_API_KEY: ${apiKey ? `✅ "${apiKey.substring(0, 4)}***"` : '❌ No definida'}`);
console.log(`CLOUDINARY_API_SECRET: ${apiSecret ? `✅ "${apiSecret.substring(0, 4)}***"` : '❌ No definida'}`);

console.log('\n📋 Checklist de configuración:');
console.log('━'.repeat(30));
console.log(`1. Archivo .env.local existe: ${envExists ? '✅' : '❌'}`);
console.log(`2. Cloud Name configurado: ${cloudName ? '✅' : '❌'}`);
console.log(`3. API Key configurado: ${apiKey ? '✅' : '❌'}`);
console.log(`4. API Secret configurado: ${apiSecret ? '✅' : '❌'}`);

if (!envExists) {
  console.log('\n💡 Para crear el archivo .env.local:');
  console.log('1. Crea un archivo llamado ".env.local" en la raíz del proyecto');
  console.log('2. Agrega las siguientes líneas:');
  console.log('');
  console.log('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name');
  console.log('CLOUDINARY_API_KEY=tu-api-key');
  console.log('CLOUDINARY_API_SECRET=tu-api-secret');
  console.log('');
  console.log('3. Reemplaza los valores con tus credenciales reales de Cloudinary');
}

console.log('\n🌐 Información del directorio actual:');
console.log(`📍 Directorio de trabajo: ${process.cwd()}`);
console.log(`📁 Archivos en la raíz:`);
const rootFiles = fs.readdirSync(process.cwd());
rootFiles.filter(file => file.startsWith('.env')).forEach(file => {
  console.log(`   - ${file}`);
});
