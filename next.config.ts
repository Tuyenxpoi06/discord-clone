import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"], // 👈 thêm utfs.io vào đây
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
export default nextConfig;
