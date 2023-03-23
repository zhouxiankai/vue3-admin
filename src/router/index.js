/*
 * @Author: zhouxk
 * @Date: 2023-02-24 13:48:46
 * @LastEditors: zhouxk
 * @LastEditTime: 2023-02-24 15:01:43
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex
    },
  ]
})

export default router
