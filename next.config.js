/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/sivamtravels' : '';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Only use export output on GitHub Pages; let Netlify handle standard builds
  output: isGitHubPages ? 'export' : undefined, 
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
