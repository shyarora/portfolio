/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic rendering - fetches data at runtime
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

export default nextConfig
