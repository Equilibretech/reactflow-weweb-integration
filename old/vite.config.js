import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/ReactFlowSynoptic.jsx', // mets le chemin exact vers TON composant
      name: 'ReactFlowSynoptic',
      fileName: () => `main.js`,
      formats: ['es'] // ESM obligatoire
    },
    rollupOptions: {
      external: [], // tout est bundlé
    }
  }
})