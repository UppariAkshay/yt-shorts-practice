/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin-allow-popups', // 👈 this disables the blocking
            },
          ],
        },
      ];
    },
  };;

export default nextConfig;
