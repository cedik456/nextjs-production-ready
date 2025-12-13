import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,

  turbopack: {
    root: path.resolve(__dirname),
  },

  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
