<template>
	<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
</template>

<script setup>
import { ref } from 'vue'
import airport from '@/common/airport.js'

// 响应式数据
const list = ref(airport.list)

// 方法
const bindClick = (e) => {
  console.log(`点击item，返回数据${JSON.stringify(e)}`)
}
</script>

<style lang="scss"></style>
