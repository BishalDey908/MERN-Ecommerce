import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vitePluginRequire.default()],
  define:{
    "process.env.VITE_KEY": JSON.stringify("process.env.VITE_KEY")
  }
})
