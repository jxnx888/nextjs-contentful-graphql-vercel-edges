/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');

    return config
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_API_KEY: process.env.CONTENTFUL_DELIVERY_API_KEY,
    CONTENTFUL_PREVIEW_API_TOKEN: process.env.CONTENTFUL_PREVIEW_API_TOKEN
  },
}

module.exports = nextConfig
