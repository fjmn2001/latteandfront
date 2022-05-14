import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
    environment: "jsdom", // or 'jsdom', 'node'
  },
  plugins: [react()],
})
