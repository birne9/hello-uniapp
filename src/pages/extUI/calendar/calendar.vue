<template>
	<view class="container" v-if="showCalendar">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。</text> 
		</uni-card>
		<uni-section title="插入模式" type="line"></uni-section>
		<view>
			<!-- 插入模式 -->
			<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</view>
		<uni-section class="hideOnPc" title="弹出模式" type="line"></uni-section>
		<view class="example-body hideOnPc"><button class="calendar-button" type="button" @click="open">打开日历</button></view>
		<uni-calendar
			ref="calendar"
			class="uni-calendar--hook"
			:clear-date="true"
			:date="info.date"
			:insert="info.insert"
			:lunar="info.lunar"
			:startDate="info.startDate"
			:endDate="info.endDate"
			:range="info.range"
			@confirm="confirm"
			@close="close"
		/>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

/**
 * 获取任意时间
 */
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = new Date();
  }
  if (typeof date !== 'object') {
    date = date.replace(/-/g, '/');
  }
  const dd = new Date(date);

  dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期

  const y = dd.getFullYear();
  const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
  const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
  return {
    fullDate: y + '-' + m + '-' + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay()
  };
}

const showCalendar = ref(false);
const info = ref({
  lunar: true,
  range: true,
  insert: false,
  selected: [],
  date: '',
  startDate: '',
  endDate: ''
});

onMounted(() => {
  // TODO 模拟请求异步同步数据
  setTimeout(() => {
    info.value.date = getDate(new Date(), -30).fullDate;
    info.value.startDate = getDate(new Date(), -60).fullDate;
    info.value.endDate = getDate(new Date(), 30).fullDate;
    info.value.selected = [
      {
        date: getDate(new Date(), -3).fullDate,
        info: '打卡'
      },
      {
        date: getDate(new Date(), -2).fullDate,
        info: '签到',
        data: {
          custom: '自定义信息',
          name: '自定义消息头'
        }
      },
      {
        date: getDate(new Date(), -1).fullDate,
        info: '已打卡'
      }
    ];
    showCalendar.value = true;
  }, 2000);
});

function open() {
  const calendar = useRefs('calendar');
  calendar?.open();
}

function close() {
  console.log('弹窗关闭');
}

function change(e) {
  console.log('change 返回:', e);
  // 模拟动态打卡
  if (info.value.selected.length > 5) return;
  info.value.selected.push({
    date: e.fulldate,
    info: '打卡'
  });
}

function confirm(e) {
  console.log('confirm 返回:', e);
}

function monthSwitch(e) {
  console.log('monthSwitch 返回:', e);
}
</script>


<style lang="scss" scoped>
.example-body {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
}

.calendar-button {
	flex: 1;
	font-weight: bold;
	font-size: 32rpx;
}
</style>
