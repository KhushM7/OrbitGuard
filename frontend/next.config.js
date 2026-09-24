const path = require('path');

const defaultDistDir = process.env.NODE_ENV === 'production' ? '.next' : '.next-local';
let configuredDistDir = process.env.NEXT_DIST_DIR || defaultDistDir;
if (path.isAbsolute(configuredDistDir)) {
  configuredDistDir = defaultDistDir;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  distDir: configuredDistDir,
  output: 'standalone',
};

module.exports = nextConfig;
