<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-goods-nav @click="onClick" />
		</uni-section>
		<uni-section title="自定义用法" type="line">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" />
		</uni-section>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state
const options = ref([
  { icon: 'chat', text: '客服' },
  { icon: 'shop', text: '店铺', info: 2, infoBackgroundColor: '#007aff', infoColor: '#f5f5f5' },
  { icon: 'cart', text: '购物车', info: 2 }
])

const buttonGroup = ref([
  { text: '加入购物车', backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)', color: '#fff' },
  { text: '立即购买', backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)', color: '#fff' }
])

const customButtonGroup = ref([
  { text: '加入购物车', backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)', color: '#fff' },
  { text: '立即购买', backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)', color: '#fff' }
])

const customButtonGroup1 = ref([
  { text: '立即购买', backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)', color: '#fff' }
])

// Methods
const onClick = (option) => {
  uni.showToast({
    title: `点击${option.text}`,
    icon: 'none'
  })
}

const buttonClick = () => {
  options.value[2].info++
}
</script>


<style lang="scss" scoped>
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
