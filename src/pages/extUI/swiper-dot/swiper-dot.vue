<template>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-section title="模式选择" type="line">
			<view class="example-body">
				<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">
					<text class="example-body-item-text">default</text></view>
				<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)"><text
						class="example-body-item-text">dot</text></view>
				<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">
					<text class="example-body-item-text">round</text></view>
				<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)"><text
						class="example-body-item-text">nav</text></view>
				<view :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">
					<text class="example-body-item-text">indexes</text></view>
			</view>
		</uni-section>

		<uni-section title="颜色样式选择" type="line">
			<view class="example-body">
				<template v-if="mode !== 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						class="example-body-item" @click="selectStyle(index)">
						<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
					</view>
				</template>
				<template v-if="mode === 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						:style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
						@click="selectStyle(index)">
						<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
					</view>
				</template>
			</view>
		</uni-section>

	</view>
</template>
<script setup>
import { ref } from 'vue'

const info = ref([
  {
    colorClass: 'uni-bg-red',
    url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 A'
  },
  {
    colorClass: 'uni-bg-green',
    url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 B'
  },
  {
    colorClass: 'uni-bg-blue',
    url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 C'
  }
])

const dotStyle = ref([
  {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    border: '1px rgba(0, 0, 0, .3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
    selectedBorder: '1px rgba(0, 0, 0, .9) solid'
  },
  {
    backgroundColor: 'rgba(255, 90, 95,0.3)',
    border: '1px rgba(255, 90, 95,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
    selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
  },
  {
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
  }
])

const modeIndex = ref(-1)
const styleIndex = ref(-1)
const current = ref(0)
const mode = ref('default')
const dotsStyles = ref({})
const swiperDotIndex = ref(0)

const change = (e) => {
  current.value = e.detail.current
}

const selectStyle = (index) => {
  dotsStyles.value = dotStyle.value[index]
  styleIndex.value = index
}

const selectMode = (modeValue, index) => {
  mode.value = modeValue
  modeIndex.value = index
  styleIndex.value = -1
  dotsStyles.value = dotStyle.value[0]
}

const clickItem = (e) => {
  swiperDotIndex.value = e
}

const onBanner = (index) => {
  console.log(22222, index)
}
</script>

<style lang="scss" scoped>
	.swiper-box {
		height: 200px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200px;
		color: #fff;
	}

	.swiper-item0 {
		background-color: #cee1fd;
	}

	.swiper-item1 {
		background-color: #b2cef7;
	}

	.swiper-item2 {
		background-color: #cee1fd;
	}

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			/* #ifndef APP-NVUE */
			margin: 0 auto;
			/* #endif */
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}

	.uni-bg-red {
		background-color: #ff5a5f;
	}

	.uni-bg-green {
		background-color: #09bb07;
	}

	.uni-bg-blue {
		background-color: #007aff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	.example-body-item {

		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15rpx;
		padding: 15rpx;
		height: 60rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		padding: 0 15rpx;
		/* #endif */
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28rpx;
		color: #333;
	}

	.example-body-dots {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50px;
		background-color: #333333;
		margin-left: 10rpx;
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}
</style>
