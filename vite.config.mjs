import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://emireken.github.io/portfolio/
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    // gh-pages publishes this folder
    outDir: "build"
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"]
  }
});
