import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 配置 i18n 基本路徑
  basePath: "",
};

export default nextConfig;
