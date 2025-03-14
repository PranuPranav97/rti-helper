import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "development" ? undefined : "/rti-helper",
};

export default nextConfig;
