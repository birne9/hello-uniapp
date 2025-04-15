<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>

		<uni-section title="基本功能" subTitle="点击按钮,切换 fab 不同状态" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">切换菜单方向({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
				<button class="button" type="primary" @click="switchColor">修改颜色</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script setup>
import { ref } from 'vue';

// Reactive data variables
const title = ref('uni-fab');
const directionStr = ref('垂直');
const horizontal = ref('left');
const vertical = ref('bottom');
const direction = ref('horizontal');
const pattern = ref({
  color: '#7A7E83',
  backgroundColor: '#fff',
  selectedColor: '#007AFF',
  buttonColor: '#007AFF',
  iconColor: '#fff',
});
const is_color_type = ref(false);
const content = ref([
  {
    iconPath: '/static/image.png',
    selectedIconPath: '/static/image-active.png',
    text: '相册',
    active: false,
  },
  {
    iconPath: '/static/home.png',
    selectedIconPath: '/static/home-active.png',
    text: '首页',
    active: false,
  },
  {
    iconPath: '/static/star.png',
    selectedIconPath: '/static/star-active.png',
    text: '收藏',
    active: false,
  },
]);

// Methods
function onBackPress() {
  const fab = $refs.fab;
  if (fab.isShow) {
    fab.close();
    return true;
  }
  return false;
}

function trigger(e) {
  console.log(e);
  content.value[e.index].active = !e.item.active;
  uni.showModal({
    title: '提示',
    content: `您${content.value[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
    success: (res) => {
      if (res.confirm) {
        console.log('用户点击确定');
      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    },
  });
}

function fabClick() {
  uni.showToast({
    title: '点击了悬浮按钮',
    icon: 'none',
  });
}

function switchBtn(hor, ver) {
  if (hor === 0) {
    direction.value = direction.value === 'horizontal' ? 'vertical' : 'horizontal';
    directionStr.value = direction.value === 'horizontal' ? '垂直' : '水平';
  } else {
    horizontal.value = hor;
    vertical.value = ver;
  }
}

function switchColor() {
  is_color_type.value = !is_color_type.value;
  if (is_color_type.value) {
    pattern.value.iconColor = '#aaa';
    pattern.value.buttonColor = '#fff';
  } else {
    pattern.value.iconColor = '#fff';
    pattern.value.buttonColor = '#007AFF';
  }
}
</script>

<style lang="scss" scoped>
	.warp {
		padding: 10px;
	}

	.button {
		margin-bottom: 10px;
	}
</style>
