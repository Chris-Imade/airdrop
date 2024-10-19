/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export the app as static HTML
  trailingSlash: true, // Adds a trailing slash to all paths for consistency
  images: {
    unoptimized: true, // Disable image optimization for Cloudflare Pages
  },
};

export default nextConfig;
