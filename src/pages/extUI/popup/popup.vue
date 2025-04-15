<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</text>
		</uni-card>
		<uni-section title="基本示例" type="line">
			<view class="example-body box">
				<button class="button" type="primary" @click="toggle('top')"><text class="button-text">顶部</text></button>
				<button class="button" type="primary" @click="toggle('bottom')"><text class="button-text">底部</text></button>
				<button class="button" type="primary" @click="toggle('center')"><text class="button-text">居中</text></button>
				<button class="button" type="primary" @click="toggle('left')"><text class="button-text">左侧</text></button>
				<button class="button" type="primary" @click="toggle('right')"><text class="button-text">右侧</text></button>
			</view>
		</uni-section>

		<uni-section title="提示消息" type="line">
			<view class="example-body box">
				<button class="button popup-success" @click="messageToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="messageToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="messageToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="messageToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>


		<uni-section title="对话框示例" type="line" class="hideOnPc">
			<view class="example-body box">
				<button class="button popup-success" @click="dialogToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="dialogToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="dialogToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="dialogToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>

		<uni-section title="输入框示例" type="line" padding>
			<view class="dialog-box">
				<text class="dialog-text">输入内容：{{ value }}</text>
			</view>
			<button class="button" type="primary" @click="inputDialogToggle"><text
					class="button-text">输入对话框</text></button>

		</uni-section>
		<uni-section title="底部分享示例" type="line" padding>
			<button class="button" type="primary" @click="shareToggle"><text class="button-text">分享模版示例</text></button>
		</uni-section>
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="输入内容" value="对话框预置提示内容!"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 分享示例 -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const type = ref('center')
const msgType = ref('success')
const messageText = ref('这是一条成功提示')
const value = ref('')

const toggle = (typeValue) => {
  type.value = typeValue
  // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
  // Assuming $refs are set up correctly in the template
  popup.value.open(typeValue)
}

const messageToggle = (typeValue) => {
  msgType.value = typeValue
  messageText.value = `这是一条${typeValue}消息提示`
  // Assuming $refs are set up correctly in the template
  message.value.open()
}

const dialogToggle = (typeValue) => {
  msgType.value = typeValue
  // Assuming $refs are set up correctly in the template
  alertDialog.value.open()
}

const dialogConfirm = () => {
  console.log('点击确认')
  messageText.value = `点击确认了 ${msgType.value} 窗口`
  message.value.open()
}

const inputDialogToggle = () => {
  // Assuming $refs are set up correctly in the template
  inputDialog.value.open()
}

const dialogClose = () => {
  console.log('点击关闭')
}

const dialogInputConfirm = (val) => {
  uni.showLoading({
    title: '3秒后会关闭'
  })

  setTimeout(() => {
    uni.hideLoading()
    console.log(val)
    value.value = val
    // 关闭窗口后，恢复默认内容
    inputDialog.value.close()
  }, 3000)
}

const shareToggle = () => {
  // Assuming $refs are set up correctly in the template
  share.value.open()
}

// Assuming you have references to these components in the template
const popup = ref(null)
const message = ref(null)
const alertDialog = ref(null)
const inputDialog = ref(null)
const share = ref(null)
</script>
<style lang="scss" scoped>
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}

	.box {
		@include flex;
	}

	.button {
		@include flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 35px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.example-body {
		background-color: #fff;
		padding: 10px 0;
	}

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 200px;
	}

	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-success {
		color: #fff;
		background-color: #e1f3d8;
	}

	.popup-warn {
		color: #fff;
		background-color: #faecd8;
	}

	.popup-error {
		color: #fff;
		background-color: #fde2e2;
	}

	.popup-info {
		color: #fff;
		background-color: #f2f6fc;
	}

	.success-text {
		color: #09bb07;
	}

	.warn-text {
		color: #e6a23c;
	}

	.error-text {
		color: #f56c6c;
	}

	.info-text {
		color: #909399;
	}

	.dialog,
	.share {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.dialog-box {
		padding: 10px;
	}

	.dialog .button,
	.share .button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		margin: 0;
		margin-top: 10px;
		padding: 3px 0;
		flex: 1;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}
</style>
