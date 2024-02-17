import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/3D_portfolio-main",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
