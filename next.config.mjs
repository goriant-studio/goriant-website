import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

// Initialize next-intl with the path to your i18n configuration
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Initialize MDX plugin
const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// Ensure proper error handling
export default function config() {
  try {
    return withNextIntl(withMDX(nextConfig));
  } catch (error) {
    console.error('Error in Next.js config:', error);
    
    // Ensure we throw an instance of Error
    if (!(error instanceof Error)) {
      throw new Error(typeof error === 'string' ? error : JSON.stringify(error));
    }
    throw error;
  }
}