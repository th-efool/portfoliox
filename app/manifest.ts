import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agrim Singh — Portfolio",
    short_name: "Agrim",
    description:
      "Systems Engineer at IIT Roorkee building distributed multi-agent systems, low-level XR engines, and quant infra.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/myfavicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
