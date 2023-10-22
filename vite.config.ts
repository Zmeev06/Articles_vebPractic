import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve:{
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared'
    }
  }
})

// eslint-disable-next-line import/no-default-export
export default config
