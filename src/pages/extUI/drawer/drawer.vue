<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
<script setup>
import { ref, nextTick ,getCurrentInstance} from 'vue';

const showRight = ref(false);
const showLeft = ref(false);
const {proxy}=getCurrentInstance();

// Open Drawer
function showDrawer(e) {
  nextTick(() => {
    const drawer = proxy.$refs[e];
    drawer.open();
  });
}

// Close Drawer
function closeDrawer(e) {
  nextTick(() => {
    const drawer = proxy.$refs[e];
    drawer.close();
  });
}

// Handle Drawer state change
function change(e, type) {
  console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
  if (type === 'showLeft') {
    showLeft.value = e;
  } else {
    showRight.value = e;
  }
}

// Navigation bar button tap handler
function onNavigationBarButtonTap() {
  if (showLeft.value) {
    proxy.$refs.showLeft.close();
  } else {
    proxy.$refs.showLeft.open();
  }
}

// Handle back press (for app only)
function onBackPress() {
  if (showRight.value || showLeft.value) {
    proxy.$refs.showLeft.close();
    proxy.$refs.showRight.close();
    return true; // Prevent default behavior
  }
  return false; // Allow default behavior
}
</script>

<style lang="scss" scoped>
	.example-body {
		padding: 10px;
	}

	.scroll-view {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1
	}

	// 处理抽屉内容滚动
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.info {
		padding: 15px;
		color: #666;
	}

	.info-text {
		font-size: 14px;
		color: #666;
	}

	.info-content {
		padding: 5px 15px;
	}

	.close {
		padding: 10px;
	}
</style>
