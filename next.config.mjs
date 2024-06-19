/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
    },
      {
        protocol: "https",
        hostname: "scontent.fdac11-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
