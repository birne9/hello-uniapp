<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		</uni-card>
		<uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="不显示天数" subTitle="设置 show-day = false 不显示天" type="line" padding>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</uni-section>
		<uni-section title="文字分隔符" subTitle="设置 show-colon 属性设置分隔符样式" type="line" padding>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</uni-section>
		<uni-section title="修改颜色" subTitle="设置 color \ background 属性设置组件颜色" type="line" padding>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="修改字体大小" subTitle="设置 font-size 属性设置组件大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" />
		</uni-section>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF"
				background-color="#007AFF" />
		</uni-section>
		<uni-section title="自由控制开始/暂停" subTitle="设置 start 属性控制是否自动开启" type="line" padding>
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="倒计时回调事件" type="line" padding>
			<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
		</uni-section>
		<uni-section title="动态赋值" type="line" padding>
			<uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</uni-section>
	</view>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const testHour = ref(1);
const testMinute = ref(0);
const testSecond = ref(0);
const start = ref(false);
const timeupSecond = ref(10);

onMounted(() => {
  setTimeout(() => {
    testHour.value = 1;
    testMinute.value = 1;
    testSecond.value = 0;
    start.value = true;
  }, 3000);

  setTimeout(() => {
    start.value = false;
  }, 10000);
});

function timeup() {
  uni.showToast({
    title: '时间到'
  });
  timeupSecond.value = 29;
}
</script>


<style lang="scss" scoped>
</style>
