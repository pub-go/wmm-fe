import vue from '@vitejs/plugin-vue'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// [配置 Vite](https://cn.vitejs.dev/config/)
export default defineConfig({
  plugins: [
    // [vite 官方插件，提供 Vue 3 单文件组件支持](https://cn.vitejs.dev/plugins/)
    vue(),
    // [按需导入 ElementPlus](https://element-plus.gitee.io/zh-CN/guide/quickstart.html)
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // [什么是 UnoCSS](https://venerable-strudel-d42cce.netlify.app/guide/)
    // [来试试antfu大佬的原子化css构想成果——UnoCSS](https://juejin.cn/post/7028841960752283656)
    Unocss({
      presets: [
        presetUno(),          // 基本预设
        presetAttributify(),  // 属性化支持
        presetIcons(),        // 图标支持
      ],
    }),
  ],
  server: {
    proxy: {
      "/api": {// 发往 /api 的请求
        target: "http://localhost:8080",// 都会被 vite 转发到这里
        changeOrigin: true,
      },
    }
  },
})
