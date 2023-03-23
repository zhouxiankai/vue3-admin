<!--
 * @Author: zhouxk
 * @Date: 2023-02-24 14:18:34
 * @LastEditors: zhouxk
 * @LastEditTime: 2023-03-24 13:16:05
 * @Description: file content
-->
<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <el-button type="primary">primary</el-button>
  <div>{{person.name}}</div>
</template>

<script setup>
const person = ref({ name: 'zxk', age: 22 })
</script>

<style scoped></style>