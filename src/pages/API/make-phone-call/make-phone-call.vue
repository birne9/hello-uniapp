<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text uni-center">请在下方输入电话号码</view>
			<input class="input uni-common-mt" type="number" name="input" @input="bindInput" />
			<view class="uni-btn-v uni-common-mt">
				<button @tap="makePhoneCall" type="primary" :disabled="disabled">拨打</button>
			</view>
		</view>
	</view>
</template>
<script setup>
import { ref } from 'vue'

// 响应式数据
const title = ref('makePhoneCall')
const disabled = ref(true)
const inputValue = ref('') // 新增未在 data 中声明的响应式变量

// 方法
const bindInput = (e) => {
  inputValue.value = e.detail.value
  disabled.value = inputValue.value.length <= 0
}

const makePhoneCall = () => {
  uni.makePhoneCall({
    phoneNumber: inputValue.value,
    success: () => {
      console.log("成功拨打电话")
    }
  })
}
</script>

<style lang="scss" scoped>
	.input {
		height: 119rpx;
		line-height: 119rpx;
		font-size: 78rpx;
		border-bottom: 1rpx solid #E2E2E2;
		text-align:center;
	}
</style>
