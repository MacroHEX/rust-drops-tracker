/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.cosmicjs.com",
      },
    ],
  },
};

module.exports = nextConfig;
