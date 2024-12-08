import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Domain 1
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Domain 2
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      // Domain 3
      {
        protocol: "https",
        hostname: "another-domain.com",
        port: "",
        pathname: "/images/**",
      },
      // Add more domains as needed
    ],
  },
  /* config options here */
};

export default nextConfig;
