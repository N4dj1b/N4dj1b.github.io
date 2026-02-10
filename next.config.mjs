/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/N4dj1b.github.io",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
