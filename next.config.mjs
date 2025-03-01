// Import the MDX plugin
import createMDX from '@next/mdx';

// Import the next-intl plugin
import createNextIntlPlugin from 'next-intl/plugin';

// Initialize the next-intl plugin with the path to your i18n configuration
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Initialize the MDX plugin
const withMDX = createMDX({
  // You can add remark and rehype plugins here if needed
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Include MDX and MD files in the page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Add any other Next.js configurations here
};

// Combine the plugins with the Next.js configuration
export default withNextIntl(withMDX(nextConfig));