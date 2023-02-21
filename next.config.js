/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['i.pinimg.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig
