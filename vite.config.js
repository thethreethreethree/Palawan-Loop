import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// The correct base path depends on WHERE the build is being deployed:
//   - Vercel serves at the domain root            -> base '/'
//   - GitHub Pages serves under /Palawan-Loop/     -> base '/Palawan-Loop/'
//   - Local dev / local build                      -> base '/'
// Vercel sets VERCEL=1 and GitHub Actions sets GITHUB_ACTIONS=true during their
// builds, so we detect the target and pick the matching base for each. This lets
// both deployments work at once without one breaking the other.
export default defineConfig(({ command }) => {
  const onGitHubActions =
    process.env.GITHUB_ACTIONS === 'true' && process.env.VERCEL !== '1'
  const base = command === 'build' && onGitHubActions ? '/Palawan-Loop/' : '/'

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
  }
})
