import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Desenvolvimento local/Codespaces usa a raiz. O GitHub Actions aplica
// o caminho do repositório quando gera a build para o GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/NexusPort/' : '/',
})
