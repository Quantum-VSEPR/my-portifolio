/** @type {import('next').NextConfig} */
const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
