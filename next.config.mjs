/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
};

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev?.()).catch(() => {});

export default nextConfig;

