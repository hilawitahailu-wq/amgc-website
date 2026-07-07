// @lovable.dev/vite-tanstack-config already includes the required plugins
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    prerender: {
      enabled: false, // <-- Change this to false to stop the build from crashing
    },

    nitro: {
      preset: 'node-server'
    }
  },})
