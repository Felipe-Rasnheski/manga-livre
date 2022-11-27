/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ['uploads.mangadex.org', 'github.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
