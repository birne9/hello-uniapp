<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">数字输入框组件多用于购物车加减商品等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-number-box @change="changeValue" />
		</uni-section>
		<uni-section :title="'使用v-model : '+ vModelValue" subTitle="使用 v-model 显示默认值" type="line" padding>
			<uni-number-box v-model="vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</uni-section>
		<uni-section title="设置最小值和最大值" subTitle="使用 min \ max 属性设置最大最小值" type="line" padding>
			<uni-number-box :min="2" :max="9" :value="555" />
		</uni-section>
		<uni-section title="设置步长（步长0.1)" subTitle="使用 step 属性设置步长" type="line" padding>
			<uni-number-box :value="1.1" :step="0.1" />
		</uni-section>
		<uni-section title="自定义背景" type="line" subTitle="使用 background 属性设置自定义背景色" padding>
			<uni-number-box :value="50" background="#2979FF" color="#fff" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-number-box :disabled="true" />
		</uni-section>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line" padding>
			<uni-number-box :value="numberValue" @change="change" />
		</uni-section>
	</view>
</template>
<script setup>
import { ref } from 'vue'

const numberValue = ref(0)
const vModelValue = ref(3)

const change = (value) => {
  numberValue.value = value
}

const changeValue = (value) => {
  console.log('返回数值：', value)
}

const blur = (e) => {
  console.log('-------blur:', e)
}

const focus = (e) => {
  console.log('-------focus:', e)
}
</script>
<style lang="scss" scoped></style>

