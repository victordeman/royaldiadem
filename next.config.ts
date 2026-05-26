import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ortec-online.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
