/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // The subpath where the app is deployed
  basePath: '/goriant-website',
  
  // The prefix for all static assets
  assetPrefix: '/goriant-website/',
  
  // If you’re using the new app router and static exports, you may also need:
  images: {
    unoptimized: true,
  },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
}
 
module.exports = nextConfig