/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
  experimental: {
    // Required:
    appDir: true,
  }, 
};

module.exports = nextConfig;
