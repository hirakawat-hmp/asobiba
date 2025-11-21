import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pagesでリポジトリ名がサブパスになる場合
  // basePath: "/asobiba",
  // assetPrefix: "/asobiba",
};

export default nextConfig;
