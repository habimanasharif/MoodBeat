/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.premadepixels.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;
