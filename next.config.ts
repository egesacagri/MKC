import path from "node:path";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "MKC";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
