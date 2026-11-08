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
    outDir: "build",
    rolldownOptions: {
      onLog(level, log, defaultHandler) {
        // lottie-web's expression engine uses eval by design; our animations
        // need expressions and are bundled first-party JSON, so this is expected.
        if (log.code === "EVAL" && log.id?.includes("lottie-web")) return;
        defaultHandler(level, log);
      },
      output: {
        // Split vendors and the large Lottie animation data into separate,
        // separately-cacheable chunks instead of one ~1 MB bundle.
        codeSplitting: {
          groups: [
            {name: "react", test: /node_modules[\/](react|react-dom|scheduler)[\/]/, priority: 30},
            {name: "lottie", test: /node_modules[\/](lottie-web|react-lottie)[\/]/, priority: 20},
            {name: "vendor", test: /node_modules[\/]/, priority: 10},
            {
              name: id => "anim-" + id.match(/lottie[\/]([^\/]+)\.json/)[1],
              test: /src[\/]assets[\/]lottie[\/][^\/]+\.json$/,
              priority: 5
            }
          ]
        }
      }
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"]
  }
});
