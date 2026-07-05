import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export
  images: {
    unoptimized: true, // Required for GitHub Pages (no Next.js Image Optimization)
  },
  // If your repo is named 'Aydentify-Demo', uncomment the lines below:
   basePath: '/Aydentify-Demo',
   assetPrefix: '/Aydentify-Demo/',
};

export default nextConfig;
