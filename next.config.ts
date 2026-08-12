import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix Turbopack root resolution when package-lock.json lives outside the git repo
  turbopack: {
    root: path.resolve(__dirname),
  },

  async redirects() {
    return [
      // Non-www → www (permanent 301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "northportcardetailing.com" }],
        destination: "https://www.northportcardetailing.com/:path*",
        permanent: true,
      },
      // HTTP www → HTTPS www (belt-and-suspenders; Cloudflare also enforces this)
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.northportcardetailing.com" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.northportcardetailing.com/:path*",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
} as NextConfig;

export default nextConfig;
