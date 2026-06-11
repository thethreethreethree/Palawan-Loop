import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` is set only for the production build so the site works under the
// GitHub Pages project path (https://<user>.github.io/Palawan-Loop/). Local dev
// stays at "/". If you move to a custom domain or Vercel/Netlify, set base back
// to "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Palawan-Loop/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}))
