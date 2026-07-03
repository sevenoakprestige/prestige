import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 90, 100],
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
