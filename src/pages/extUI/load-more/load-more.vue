<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<uni-load-more :status="status" />
		</uni-section>
		<uni-section title="修改默认文字" type="line">
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-section>
		<uni-section title="改变颜色" type="line">
			<uni-load-more color="#007AFF" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 按平台自动选择样式" type="line">
			<uni-load-more iconType="auto" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 环形" type="line">
			<uni-load-more iconType="circle" :status="status" />
		</uni-section>

		<uni-section title="改变组件状态" type="line">
			<radio-group class="uni-list" @change="onChange">
				<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</uni-section>

	</view>
</template>
<script setup>
import { ref } from 'vue'

const status = ref('more')
const statusTypes = ref([
  { value: 'more', text: '加载前', checked: true },
  { value: 'loading', text: '加载中', checked: false },
  { value: 'noMore', text: '没有更多', checked: false }
])

const contentText = {
  contentdown: '查看更多',
  contentrefresh: '加载中',
  contentnomore: '没有更多'
}

// Compute the status text based on the current status
const statusText = computed(() => {
  const statusObj = statusTypes.value.find(item => item.value === status.value)
  return statusObj ? statusObj.text : ''
})

const onChange = (e) => {
  status.value = e.detail.value
}

const clickLoadMore = (e) => {
  uni.showToast({
    icon: 'none',
    title: `当前状态：${e.detail.status}`
  })
}
</script>

<style lang="scss" scoped>
	.uni-list-item {
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
		font-size: 14px;
	}

	.uni-list-item__container {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		box-sizing: border-box;
		/* #endif */
		padding: 12px 15px;
		flex: 1;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-item__content-title {
		font-size: 14px;
		color: #666;
	}
</style>
