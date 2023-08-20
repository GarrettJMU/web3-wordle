const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)

// module.exports = nextConfig;
