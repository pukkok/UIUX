import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: '/wooparoopa/', // 👈 여기 중요한 포인트!
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: "./public/manifest.json",
    }),
  ],
})