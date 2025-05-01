/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
  },
  headers: async () => [
    {
      source: '/.well-known/farcaster.json',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
    },
  ],
}

module.exports = nextConfig
