<template>
	<view class="container">
		<uni-card is-full :is-shadow="false"><text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text></uni-card>

		<uni-section title="本地数据" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-picker
					placeholder="请选择班级"
					popup-title="请选择"
					:localdata="classDataTree"
					v-model="classValue"
					@change="onchange"
					@nodeclick="onnodeclick"
					@popupopened="onpopupopened"
					@popupclosed="onpopupclosed"
				></uni-data-picker>
			</view>
		</uni-section>
		<uni-section title="自定义插槽" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-picker v-slot:default="{ data, error, options }" title="请选择" :localdata="classDataTree" v-model="classValue">
					<view class="input-border">
						<view v-if="error" class="error">
							<text>{{ error }}</text>
						</view>
						<view v-else-if="data.length" class="input-selected">
							<view v-for="(item, index) in data" :key="index" class="selected-item">
								<text>{{ item.text }}</text>
							</view>
						</view>
						<view v-else><text>请选择</text></view>
					</view>
				</uni-data-picker>
			</view>
		</uni-section>
		<!-- <view class="title">
      <text>Cloud 数据 (单例)</text>
    </view>
    <uni-data-picker v-model="nation" collection="opendb-nation-china" field="name as value, name as text"
      @nodeclick="onnodeclick" @change="onchange" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
    </uni-data-picker>

    <view class="title">
      <text>Cloud 数据 (树形)</text>
    </view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择所在地区" :preload="true" :step-searh="true" self-field="code"
      parent-field="parent_code" collection="opendb-city-china" orderby="value asc"
      field="code as value, name as text, eq(type, 2) as isleaf" v-model="address" @nodeclick="onnodeclick"
      @change="onchange" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
    </uni-data-picker>

    <view class="title">
      <text>uni-data-pickerview</text>
    </view>
    <uni-data-pickerview class="data-pickerview" :preload="true" :step-searh="true" self-field="code"
      parent-field="parent_code" collection="opendb-city-china" orderby="value asc" field="code as value, name as text">
    </uni-data-pickerview> -->
	</view>
</template>

<script setup>
import { ref } from 'vue';

const nation = ref('汉族');
const address = ref('110101');
// const map = ref({ text: "label", value: "value" });

const classValue = ref('1-2');

const classDataTree = ref([
  {
    text: '一年级',
    value: '1-0',
    children: [
      { text: '1.1班', value: '1-1' },
      { text: '1.2班', value: '1-2' }
    ]
  },
  {
    text: '二年级',
    value: '2-0',
    children: [
      { text: '2.1班', value: '2-1' },
      { text: '2.2班', value: '2-2' }
    ]
  },
  {
    text: '三年级',
    value: '3-0',
    disable: true
  }
]);

function onnodeclick(e) {
  console.log('nodeclick', e);
}

function onpopupopened(e) {
  console.log('onpopupopened');
}

function onpopupclosed(e) {
  console.log('onpopupclosed');
}

function onchange(e) {
  console.log('onchange', e.detail.value);
}
</script>


<style lang="scss" scoped>
.container {
	/* padding: 0 15px; */
	/* #ifndef APP-NVUE */
	display: flex;
	max-width: 500px;
	/* #endif */
	flex-direction: column;
}

.title {
	font-size: 14px;
	font-weight: bold;
	margin: 20px 0 5px 0;
}

.input-border {
	border: 1px solid #b3e5fc;
	border-radius: 5px;
	padding: 2px 4px;
}

.input-selected {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	line-height: 2;
}

.data-pickerview {
	height: 300px;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	/* #ifndef APP-NVUE */
	overflow: hidden;
	/* #endif */
}
</style>
