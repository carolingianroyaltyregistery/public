import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
 plugins: [vue()],
 publicPath: '/public/'
 })

// export default defineConfig({
//  plugins: [vue()],
//  base: '/carolingianroyaltyregistery/', 
//  resolve: {
//    alias: {
//      '@': fileURLToPath(new URL('./src', import.meta.url))
//    },
//  }
// })

