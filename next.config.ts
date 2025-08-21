import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.velog.io",
      },
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
      },
      {
        protocol: "https",
        hostname: "**.velog.io",
      },
    ],
  },
};

export default nextConfig;
