export default (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === "production",
    }
  };

  return nextConfig;
};
