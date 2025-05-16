import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    // Define environment variables that should be exposed to the client
    define: {
      // Stringify the values so they are properly quoted in the output
      'import.meta.env.VITE_LEADERBOARD_API_URL': JSON.stringify(env.VITE_LEADERBOARD_API_URL || "https://node-quiz-backend-2024-docker.zacklack.de"),
    },
    // Add router options to suppress warnings
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-router': ['react-router-dom'],
          },
        },
      },
    }
  };
});
