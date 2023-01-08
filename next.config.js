/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'uploads.mangadex.org',
      'api.mangadex.org',
      'github.com',
      'uploads.mangadex.dev',
      'api.mangadex.dev',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
