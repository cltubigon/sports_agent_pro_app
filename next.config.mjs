// import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'tfbxeldqguvomgsdagsm.supabase.co',
      },
    ],
  },
}

// const bundleConfig = withBundleAnalyzer(nextConfig)
// export default bundleConfig
export default nextConfig
