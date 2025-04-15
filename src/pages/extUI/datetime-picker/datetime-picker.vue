<template>
	<view class="page container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">可以同时选择日期和时间的选择器</text>
		</uni-card>
		<uni-section :title="'日期用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="dateString" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimeString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" :start="start" :end="end" v-model="datetimeString" @change="change" />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + dateRange + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateRange" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimeRange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimeRange" type="datetimerange" rangeSeparator="至" />
		</view>
		<uni-section :title="'时间戳用法：' + dateTimestamp" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="dateTimestamp" @change="change" />
		</view>
		<uni-section :title="'date 对象用法：' + dateInstance" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="dateInstance" @change="change" />
		</view>
		<uni-section :title="'插槽用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" :border="false" />
		</view>
		<uni-section :title="'隐藏清除按钮用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" disabled />
		</view>
	</view>
</template>

<script setup>
import { ref, watch } from 'vue';

const hideSecond = false; // 若需要控制是否隐藏秒，可调整此值

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function getDate(date) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${addZero(month)}-${addZero(day)}`;
}

function getTime(date) {
  date = new Date(date);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return hideSecond
    ? `${addZero(hour)}:${addZero(minute)}`
    : `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
}

function getDateTime(date) {
  return `${getDate(date)} ${getTime(date)}`;
}

// 初始化数据
const dateString = ref(getDateTime(new Date()));
const datetimeString = ref(getDateTime(new Date()));
const dateTimestamp = ref(Date.now());
const dateInstance = ref(new Date());

const dateRange = ref([
  getDate(Date.now() - 5 * 24 * 3600000),
  getDate(Date.now() + 5 * 24 * 3600000)
]);

const datetimeRange = ref([
  getDateTime(Date.now() - 5 * 24 * 3600000),
  getDateTime(Date.now() + 5 * 24 * 3600000)
]);

const start = ref(Date.now() - 10 * 24 * 3600000);
const end = ref(Date.now() + 10 * 24 * 3600000);

// 监听器
watch(datetimeString, (newVal) => {
  console.log('日期时间单选:', newVal);
});

watch(dateRange, (newVal) => {
  console.log('日期范围选:', newVal);
});

watch(datetimeRange, (newVal) => {
  console.log('日期时间范围选:', newVal);
});

// 事件处理方法
function change(e) {
  console.log('----change事件:', e);
}

function maskClick(e) {
  console.log('----maskClick事件:', e);
}
</script>


<style lang="scss" scoped>
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
</style>
