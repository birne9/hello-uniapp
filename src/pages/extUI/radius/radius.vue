<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<view class="header"><text class="uni-h6">使用边框半径辅助样式对元素快速应用</text> <text
					class="uni-primary uni-px-3 uni-h6">border-radius</text> <text class="uni-h6">样式。</text></view>
			<view class="uni-mt-5 header" ><text class="uni-h6">规则为</text> <text
					class="uni-primary uni-pl-3 uni-h6">uni-radius-${direction}-${size}</text></view>
			<view class="uni-mt-5 header"><text class="uni-h6">如果需要四边，则不需要指定</text> <text class="uni-primary uni-pl-3 uni-h6">direction</text></view>
			<view class="uni-mt-5"><text class="uni-h6">各值的含义请参考文档</text></view>
		</uni-card>
		<uni-section title="效果展示" type="line">
			<view class="margin">
				<view class="box uni-primary-bg uni-ma-5" :class="[radiusClass]">
					<text class="uni-white">通过下面的选项控制圆角</text>
				</view>
			</view>
			<view class="actions uni-mt-10">
				<text class="action-label">位置</text>
				<uni-data-checkbox v-model="formData.direction" multiple :localdata="directionData"
					@change="change($event,1)"></uni-data-checkbox>
			</view>
			<view class="actions uni-mt-3 uni-mb-10">
				<text class="action-label">大小</text>
				<uni-data-checkbox v-model="formData.size" :localdata="sizeData" @change="change($event,2)">
				</uni-data-checkbox>
			</view>
		</uni-section>
	</view>
</template>
<script setup>
import { ref, watch } from 'vue'

const radiusClass = ref('uni-radius-lg')
const formData = ref({
  direction: ['t', 'b'],
  size: 'lg'
})
const directionData = ref([
  { value: 't', text: '左上+右上' },
  { value: 'r', text: '右上+右下' },
  { value: 'b', text: '左下+右下' },
  { value: 'l', text: '右上+左下' },
  { value: 'tl', text: '左上' },
  { value: 'tr', text: '右上' },
  { value: 'bl', text: '左下' },
  { value: 'br', text: '右下' }
])
const sizeData = ref([
  { value: '0', text: '无' },
  { value: 'sm', text: '小' },
  { value: 'lg', text: '常规' },
  { value: 'xl', text: '大' },
  { value: 'circle', text: '圆' },
  { value: 'pill', text: '最大化' }
])

// Watch for changes in formData and update radiusClass
watch(formData, () => {
  const { direction, size } = formData.value
  radiusClass.value = ''
  direction.forEach(v => {
    radiusClass.value += `uni-radius-${v}-${size} `
  })
}, { deep: true })
</script>
<style scoped lang="scss">
	.header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.margin {
		display: flex;
		height: 200px;
		margin: 10px;
		overflow: hidden;
		border-radius: 5px;
		border: 1px #eee solid;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
	}

	.margin-item {
		display: flex;
		flex: 1;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.actions {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.action-label {
		/* #ifndef APP-NVUE */
		flex-shrink: 0;
		/* #endif */
		width: 50px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 12px;
	}
</style>
