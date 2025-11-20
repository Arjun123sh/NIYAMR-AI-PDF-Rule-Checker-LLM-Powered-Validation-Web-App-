import type { NextConfig } from "next";

const nextConfig: NextConfig & Record<string, unknown> = {
  /* config options here */
      experimental: {
        serverComponentsExternalPackages: ['pdf2json'],
    },
     tsconfig: {
    ignoreBuildErrors: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
eslint: {
  ignoreDuringBuilds: true,
},
    
    swcMinify: true,
    compress: true,
    reactStrictMode: true,
};

export default nextConfig;
