import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
    basePath: "",
    assetPrefix: isDev ? undefined : "https://goriant.com",
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
