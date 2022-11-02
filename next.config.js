/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV === 'development';
const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    removeConsole: !dev,
    styledComponents: true,
  },
  reactStrictMode: dev,
};

module.exports = nextConfig;
