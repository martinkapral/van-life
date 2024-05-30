import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/van-life/",
  build: {
    rollupOptions: {
      external: ["react-router-dom", "firebase/app"],
    },
  },
});
