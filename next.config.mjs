import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default function config() {
  try {
    return withNextIntl(withMDX(nextConfig));
  } catch (error) {
    console.error('Error in Next.js config:', error);

    // Ensure error is properly wrapped as an instance of Error
    if (!(error instanceof Error)) {
      console.log('error ', error);
      throw new Error(String(error));
    }
    throw error;
  }
}