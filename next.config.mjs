import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

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
    assetPrefix: "https://goriant.com",
    trailingSlash: true,
    // Cấu hình compiler để loại bỏ server-only code
    compiler: {
      removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
      appDir: false,
    },
  };

  return nextConfig;
};
