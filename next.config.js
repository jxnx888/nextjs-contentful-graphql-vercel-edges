/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_API_KEY: process.env.CONTENTFUL_DELIVERY_API_KEY,
    CONTENTFUL_PREVIEW_API_TOKEN: process.env.CONTENTFUL_PREVIEW_API_TOKEN
  },
}

module.exports = nextConfig
