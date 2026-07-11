/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/services/joint-replacement-surgery",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
