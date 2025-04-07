import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: '/uiux/', // 👈 여기 중요한 포인트!
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['favicon.ico'], // 이건 아이콘 등록용
      manifest: {
        name: "Wooparoopa",
        short_name: "Wooparoopa",
        start_url: "/uiux/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/uiux/favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          }
        ]
      }
    })
  ],
})