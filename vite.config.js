/*
 * @Author: zhouxk
 * @Date: 2023-02-24 13:48:46
 * @LastEditors: zhouxk
 * @LastEditTime: 2023-02-24 16:28:43
 * @Description: file content
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 需要去解析的文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // imports 指定自动引入的包位置（名）
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: {
        // 启用
        enabled: true,
        // 生成自动导入json文件位置
        filepath: './.eslintrc-auto-import.json',
        // 全局属性值
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()]
      // // imports 指定组件所在目录，默认为 src/components
      // dirs: ['src/components/', 'src/view/'],
      // // 需要去解析的文件
      // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // resolvers: [ElementPlusResolver({sideEffect: true})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
