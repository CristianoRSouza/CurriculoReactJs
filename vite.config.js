import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/CurriculoReactJs/",
  plugins: [react()],
  mimeTypes: {
    'text/javascript': ['js', 'jsx']
  }
})
