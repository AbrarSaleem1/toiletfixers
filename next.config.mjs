/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev?.()).catch(() => {});

export default nextConfig;

