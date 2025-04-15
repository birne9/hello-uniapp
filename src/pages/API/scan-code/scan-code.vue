<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">扫码结果：</view>
			<view class="uni-list" v-if="result">
				<view class="uni-cell">
					<view class="scan-result">
						{{result}}
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="scan">扫一扫</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import permision from "@/common/permission.js"
import { ref } from 'vue'

// 响应式数据
const title = ref('scanCode')
const result = ref('')

// 扫码方法
const scan = async () => {
  // #ifdef APP-PLUS
  const status = await checkPermission()
  if (status !== 1) {
    return
  }
  // #endif
  
  uni.scanCode({
    success: (res) => {
      result.value = res.result
    },
    fail: (err) => {
      // 小程序扫码不需要申请相机权限
    }
  })
}

// #ifdef APP-PLUS
// 权限检查方法
const checkPermission = async (code) => {
  const status = permision.isIOS 
    ? await permision.requestIOS('camera')
    : await permision.requestAndroid('android.permission.CAMERA')

  if (status === null || status === 1) {
    return 1
  } else {
    uni.showModal({
      content: "需要相机权限",
      confirmText: "设置",
      success: (res) => {
        if (res.confirm) {
          permision.gotoAppSetting()
        }
      }
    })
  }
  return status
}
// #endif
</script>

<style scoped lang="scss">
	.scan-result {
		min-height: 50rpx;
		line-height: 50rpx;
	}
</style>
