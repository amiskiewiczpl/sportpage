//import { defineConfig } from 'vite'
// react from '@vitejs/plugin-react'
//
//export default defineConfig({
//  plugins: [react()],
//  base: './', // działa też lokalnie
//})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ścieżka, pod którą będzie serwowany build na GH Pages
  base: '/sportpage/',

  plugins: [
    react()
  ],
})