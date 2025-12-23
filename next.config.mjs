/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Habilitar optimización para Cloudinary
    domains: ['res.cloudinary.com'], // Permitir imágenes de Cloudinary
  },
  transpilePackages: ['resend'],
}

export default nextConfig
