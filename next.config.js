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
  headers: async () => [
    {
      // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
      source: '/:all*(svg|jpg|png|webp)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, stale-while-revalidate',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
