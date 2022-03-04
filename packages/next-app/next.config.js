/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/welcome': { page: '/welcome' }
        };
    },
    images: {
        loader: 'custom'
    }
};

module.exports = nextConfig;
