/** @type {import('next').NextConfig} */
const nextConfig = {
  // No ESLint config or dependency in this project yet; TypeScript errors do fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/investments",
        destination: "/advisory",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
