/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
    formats: ["image/webp", 'image/avif']
  }

}

module.exports = nextConfig
