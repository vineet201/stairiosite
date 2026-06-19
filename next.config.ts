import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/vc",
        destination: "/vc/vc.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/hotelify",
        destination: "https://gohotelify.com",
        permanent: true,
      },
      {
        source: "/hotelify/:path*",
        destination: "https://gohotelify.com/hotelify/:path*",
        permanent: true,
      },
      {
        source: "/hotel-saas",
        destination: "https://gohotelify.com",
        permanent: true,
      },
      {
        source: "/hotel-saas/:path*",
        destination: "https://gohotelify.com/hotelify/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
