<!--
 * @Author: zhouxk
 * @Date: 2023-02-24 14:18:34
 * @LastEditors: zhouxk
 * @LastEditTime: 2023-03-27 15:41:02
 * @Description: file content
-->
<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <el-button type="primary">primary</el-button>
  <div>{{person.name}}</div>
</template>

<script setup>
const person = ref({ name: 'zxk', age: 22 })
console.log(1)
console.log(2)
console.log(3)
console.log(4)
</script>

<style scoped></style>