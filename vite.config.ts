import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import compress from 'vite-plugin-compress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":resolve(__dirname,'src'),
    }
  },
    base:"./",
    server:{
      proxy:{
        '/api':{
          target:"http://localhost:9090/vip",
          changeOrigin:true,
          rewrite:path=>path.replace(/^\/api/,'')
        }
      }
    }
  
})
