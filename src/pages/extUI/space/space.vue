<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<view class="header">
				<text class="uni-h6">使用间距辅助类对元素快速应用</text> <text class="uni-primary uni-px-3 uni-h6">margin</text><text
					class="uni-h6"> 或 </text><text class="uni-primary uni-px-3 uni-h6">padding</text> <text
					class="uni-h6">样式， 范围是从 0 到 16。</text>
			</view>
			<view class="header uni-mt-5"><text class="uni-h6">规则为</text> <text
					class="uni-primary uni-pl-3 uni-h6">uni-${property}${direction}-${size}</text>
			</view>
			<view class="uni-mt-5"><text class="uni-h6">各值的含义请参考文档</text></view>
		</uni-card>
		<uni-section title="效果展示" type="line">
			<view class="margin">
				<view class="margin-item uni-border-4-bg" :class="[paddingClass,marginClass]">
					<view class="box uni-primary-bg">
						<text class="uni-white uni-body">通过下面的选项控制边距</text>
					</view>
				</view>
			</view>
			<view class="actions uni-mt-10">
				<text class="action-label">外边距</text>
				<uni-data-checkbox v-model="formData.margin" multiple :localdata="directionData"
					@change="change($event,1)"></uni-data-checkbox>
			</view>
			<view class="actions uni-mt-3 uni-mb-10">
				<text class="action-label">外边距大小</text>
				<uni-data-checkbox v-model="formData.marginSize" :localdata="sizeData" @change="change($event,1)">
				</uni-data-checkbox>
			</view>
			<view class="actions">
				<text class="action-label">内边距</text>
				<uni-data-checkbox v-model="formData.padding" multiple :localdata="directionData"
					@change="change($event,2)"></uni-data-checkbox>
			</view>
			<view class="actions uni-mt-3 uni-mb-10">
				<text class="action-label">内边距大小</text>
				<uni-data-checkbox v-model="formData.paddingSize" :localdata="sizeData" @change="change($event,3)">
				</uni-data-checkbox>
			</view>
		</uni-section>
	</view>
</template>
<script setup>
import { ref } from 'vue'

const paddingClass = ref('uni-pa-5')
const marginClass = ref('uni-ma-5')
const formData = ref({
  margin: ['t', 'r', 'l', 'b'],
  marginSize: '5',
  padding: ['t', 'r', 'l', 'b'],
  paddingSize: '5',
})

const directionData = ref([
  { value: 't', text: '上' },
  { value: 'r', text: '右' },
  { value: 'b', text: '下' },
  { value: 'l', text: '左' },
])

const sizeData = ref([
  { value: '0', text: '0' },
  { value: '2', text: '4px' },
  { value: '5', text: '10px' },
  { value: '10', text: '20px' },
])

const change = (e, type) => {
  const { margin, marginSize, padding, paddingSize } = formData.value
  marginClass.value = ''
  paddingClass.value = ''
  
  margin.forEach(v => {
    marginClass.value += `uni-m${v}-${marginSize} `
  })
  
  padding.forEach(v => {
    paddingClass.value += `uni-p${v}-${paddingSize} `
  })
}
</script>
<style lang="scss" scoped>
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
		width: 70px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 12px;
	}
</style>
