/*
 * @Author: zhouxk
 * @Date: 2023-02-24 13:48:46
 * @LastEditors: zhouxk
 * @LastEditTime: 2023-02-24 15:48:02
 * @Description: file content
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
