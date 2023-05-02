/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
