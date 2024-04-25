import { defineConfig } from 'vite'
import { versionPlugin } from './plugins'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // build:{
  //   minify:true,
  //   lib:{
  //     entry:'./'
  //   }
  // },
  server: {
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    port: 2088, // 端口号
    host: "0.0.0.0",
  },
  plugins: [vue(),versionPlugin()],
})
