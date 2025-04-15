<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button class="target" type="default" @tap="actionSheetTap">弹出action sheet</button>
			</view>
		</view>
	</view>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 响应式数据
const title = ref('action-sheet')
const buttonRect = ref({})

// 操作方法
const actionSheetTap = () => {
  uni.showActionSheet({
    title: '标题',
    itemList: ['item1', 'item2', 'item3', 'item4'],
    popover: {
      // 104: navbar + topwindow 高度（保持原计算逻辑）
      top: buttonRect.value.top + 104 + buttonRect.value.height,
      left: buttonRect.value.left + buttonRect.value.width / 2
    },
    success: (e) => {
      console.log(e.tapIndex)
      uni.showToast({
        title: `点击了第${e.tapIndex}个选项`,
        icon: "none"
      })
    }
  })
}

// #ifdef H5
// H5 特定逻辑
const getNodeInfo = () => {
  uni.createSelectorQuery()
    .select('.target')
    .boundingClientRect()
    .exec((ret) => {
      const rect = ret[0]
      if (rect) {
        buttonRect.value = rect
      }
    })
}

onMounted(() => {
  getNodeInfo()
  window.addEventListener('resize', getNodeInfo)
})

onUnmounted(() => {
  window.removeEventListener('resize', getNodeInfo)
})
// #endif
</script>
