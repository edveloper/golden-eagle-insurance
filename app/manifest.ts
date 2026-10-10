import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Golden Eagle Insurance Agency",
    short_name: "Golden Eagle",
    description: "IRA-licensed insurance agency in Nairobi since 2006.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbf9",
    theme_color: "#0a1d37",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
