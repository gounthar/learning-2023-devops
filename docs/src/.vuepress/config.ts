import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "vuepress-plugin-seo2";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  
  base: process.env.BASE_URL || "/learning-2024-devops/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-2024-devops/favicon.ico" }],
    [
      "link",
      { rel: "manifest", href: "/learning-2024-devops/manifest.webmanifest" },
    ],
    ["meta", { name: "theme-color", content: "#027DFD" }],
  ],

  theme: defaultTheme({
        logo: 'logo_worldline.png',

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
          "/game/",
          "/shell/",
          "/virt/", 
          "/container/", 
          "/ci/", 
          "/orchestration/", 
          "/prov/", 
          //"/cloud/", 
          //"/ms/", 

        ], 
  }),

  plugins: [
    seoPlugin({
      hostname: "https://gounthar.github.io/learning-2024-devops/",
    }),
  ],
});
