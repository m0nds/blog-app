/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["images.unsplash.com", "images.pexels.com", "media.licdn.com"]
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
}

module.exports = nextConfig
