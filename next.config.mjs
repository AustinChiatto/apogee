/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thespacedevs-prod.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/media/**'
      }
    ]
  }
};

export default nextConfig;
