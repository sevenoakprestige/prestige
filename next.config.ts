import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Only bundle the specific icons used, not the entire icon libraries
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
  images: {
    // Serve AVIF first (best compression), then WebP — browser picks what it supports
    formats: ['image/avif', 'image/webp'],
    // Standard device breakpoints for responsive srcsets
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Sizes for images that don't fill the full viewport
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // All quality values used across the site
    qualities: [25, 50, 75, 85, 90, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/uk-company-formation',
        destination: '/services/uk-company-formation-for-non-residents',
        permanent: true,
      },
      {
        source: '/services/uk-company-formation-non-residents',
        destination: '/services/uk-company-formation-for-non-residents',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
