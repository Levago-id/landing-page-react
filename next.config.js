/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'astrido.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'astrido.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
