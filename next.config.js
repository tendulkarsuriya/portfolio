/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovedones.ai',
      },
      {
        protocol: 'https',
        hostname: 'sybo.ai',
      },
    ],
  },
};

module.exports = nextConfig;
