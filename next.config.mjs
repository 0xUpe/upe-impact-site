/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: ['u.pe'], // Add 'u.pe' to the list of allowed image domains
  },
};

export default nextConfig;
