/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.chec.io",
        port: "",
        // pathname: "/merchants/19303/assets/**",
        pathname: "/merchants/53309/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
