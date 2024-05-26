/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bc9kwebhdixmbybb.public.blob.vercel-storage.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
