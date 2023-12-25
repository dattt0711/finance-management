import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@constants': `${path.resolve(__dirname, './src/constants')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@actions': `${path.resolve(__dirname, './src/actions')}`,
      '@apis': `${path.resolve(__dirname, './src/apis')}`,
      '@assets': `${path.resolve(__dirname, './src/assets')}`,
      '@commons': `${path.resolve(__dirname, './src/commons')}`,
      '@containers': `${path.resolve(__dirname, './src/containers')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers')}`,
      '@hook': `${path.resolve(__dirname, './src/hook')}`,
      '@reducers': `${path.resolve(__dirname, './src/reducers')}`,
      '@redux': `${path.resolve(__dirname, './src/redux')}`,
      '@sagas': `${path.resolve(__dirname, './src/sagas')}`,
    }
  }
})
