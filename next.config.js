/** @type {import('next').NextConfig} */
// GitHub Pages serves project sites under /<repo>/; Bolt/Netlify previews serve at root.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/sivamtravels' : '';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  // Trailing slashes so static files resolve correctly on GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
