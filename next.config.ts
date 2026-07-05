import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/Aydentify-Demo',
  // Remove or comment out assetPrefix
  // assetPrefix: '/Aydentify-Demo/',
};

export default nextConfig;