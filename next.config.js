/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: [
      'uploads.mangadex.org',
      'api.mangadex.org',
      'github.com',
      'uploads.mangadex.dev',
      'api.mangadex.dev',
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
