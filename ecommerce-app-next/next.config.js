/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.papareact.com', 'aiimagegeneratorap0ca8b5.blob.core.windows.net'],
  },
}

module.exports = nextConfig