/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/investments",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "goldeneagleltd.org",
          },
        ],
        destination: "https://www.goldeneagleltd.org/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
