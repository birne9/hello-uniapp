<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="单选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">单选选中：{{JSON.stringify(radio1)}}</view>
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="多选" subTitle="使用multiple属性开启多选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox1)}}</view>
				<uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="最大最小值" subTitle="使用 min / max 设置多选的最大最小值,单选无效">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">选中：{{JSON.stringify(checkbox6)}}</view>
				<uni-data-checkbox min="1" max="2" multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - button" subTitle="使用mode=button属性使用按钮样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio2)}}</view>
				<uni-data-checkbox mode="button" v-model="radio2" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox2)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox2" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - tag" subTitle="使用mode=tag属性使用标签样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio3)}}</view>
				<uni-data-checkbox mode="tag" v-model="radio3" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox3)}}</view>
				<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="禁用" subTitle="数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio4)}}</view>
				<uni-data-checkbox mode="button" v-model="radio4" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox4)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox4" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>



		<uni-section title="自定义高亮颜色" subTitle="使用 selectedColor 属性修改颜色" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio5)}}</view>
				<uni-data-checkbox selectedColor="red" v-model="radio5" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox5)}}</view>
				<uni-data-checkbox selectedColor="red" multiple v-model="checkbox5" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>

	</view>
</template>

<script setup>
import { ref } from 'vue';

const radio1 = ref(0);
const radio2 = ref(0);
const radio3 = ref(0);
const radio4 = ref(0);
const radio5 = ref(0);
const radio6 = ref(0);

const checkbox1 = ref([0]);
const checkbox2 = ref([0]);
const checkbox3 = ref([0]);
const checkbox4 = ref([0]);
const checkbox5 = ref([0]);
const checkbox6 = ref([0]);

const sex = ref([
  { text: '男', value: 0 },
  { text: '女', value: 1 },
  { text: '未知', value: 2 }
]);

const sex1 = ref([
  { text: '男', value: 0 },
  { text: '女', value: 1, disable: true },
  { text: '未知', value: 2 }
]);

const hobby = ref([
  { text: '足球', value: 0 },
  { text: '篮球', value: 1 },
  { text: '游泳', value: 2 }
]);

const hobby2 = ref([
  { text: '足球', value: 0, disable: true },
  { text: '篮球', value: 1, disable: true },
  { text: '游泳', value: 2 }
]);

</script>


<style lang="scss" scoped>
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}
</style>
