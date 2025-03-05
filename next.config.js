/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Cấu hình compiler để loại bỏ server-only code
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    appDir: false
  },
}

module.exports = nextConfig
