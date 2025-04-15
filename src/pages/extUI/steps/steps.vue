<template>
	<view>
		<uni-section title="基本用法" type="line" padding>
			<uni-steps :options="list1" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="checkbox" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="medal" :active="active" />
		</uni-section>
		<uni-section title="纵向排列" type="line" padding>
			<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</uni-section>
		<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">改变状态</button>
	</view>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state
const active = ref(1)
const list1 = ref([
  { title: '事件一' },
  { title: '事件二' },
  { title: '事件三' },
  { title: '事件四' }
])
const list2 = ref([
  { title: '买家下单', desc: '2018-11-11' },
  { title: '卖家发货', desc: '2018-11-12' },
  { title: '买家签收', desc: '2018-11-13' },
  { title: '交易完成', desc: '2018-11-14' }
])

// Method to change active item
const change = () => {
  if (active.value < list1.value.length - 1) {
    active.value += 1
  } else {
    active.value = 0
  }
}
</script>

<style lang="scss" scoped>
	.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
</style>
