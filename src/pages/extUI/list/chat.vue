<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">此示例展示了聊天列表的使用场景。</text>
		</uni-card>
		<uni-section title="圆头像且不显示分割线" type="line">
			<uni-list :border="false">
				<uni-list-chat v-for="item in listData" :avatar-circle="true" :key="item.id" :title="item.author_name" :avatar="item.cover"
				 :note="item.title" :time="item.published_at" :clickable="false"></uni-list-chat>
			</uni-list>
		</uni-section>

		<uni-section title="带圆点" type="line">
			<uni-list>
				<uni-list-chat v-for="item in listData" :key="item.id" :title="item.author_name" :avatar="item.cover" :note="item.title"
				 :time="item.published_at" :badge-text="item.text" :clickable="false" badge-positon="left" badge-text="dot"></uni-list-chat>
			</uni-list>
		</uni-section>

		<uni-section title="自定义右侧内容" type="line">
			<uni-list>
				<uni-list-chat v-for="item in listData" :key="item.id" :title="item.author_name" :avatar="item.cover" :note="item.title"
				 badge-positon="left" :badge-text="item.text">
					<view class="chat-custom-right">
						<text class="chat-custom-text">刚刚</text>
						<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
					</view>
				</uni-list-chat>
			</uni-list>
		</uni-section>

		<uni-section title="带通知角标的单头像聊天列表" type="line">
			<uni-list>
				<uni-list-chat v-for="item in listData" :key="item.id" :title="item.author_name" :avatar="item.cover" :note="item.title"
				 :time="item.published_at" :clickable="true" :badge-text="item.text" @click="onClick"></uni-list-chat>
			</uni-list>
		</uni-section>

		<uni-section title="带通知角标的多头像聊天列表" type="line">
			<uni-list>
				<uni-list-chat v-for="(item,index) in listData" :key="item.id" :title="item.author_name" :avatar="item.cover" :note="item.title"
				 :time="item.published_at" :clickable="true" :avatarList="avatar(index+1)" :badge-text="item.text" @click="onClick"></uni-list-chat>
			</uni-list>
		</uni-section>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const UNITS = {
  '年': 31557600000,
  '月': 2629800000,
  '天': 86400000,
  '小时': 3600000,
  '分钟': 60000,
  '秒': 1000
}

const listData = ref([])
const avatarList = ref([
  { url: '/static/logo.png' },
  { url: '/static/logo.png' },
  { url: '/static/logo.png' }
])

const getList = () => {
  const data = {
    column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
  }

  uni.request({
    url: 'https://unidemo.dcloud.net.cn/api/news',
    data: data,
    success: ({ data }) => {
      if (data.statusCode === 200) {
        let list = setTime(data.data)
        list = listData.value.length === 0 ? list : listData.value.concat(list)
        list.forEach(item => {
          item.text = Math.floor(Math.random() * (1 - 20) + 20)
        })
        listData.value = getRandomArrayElements(list, 3)
      }
    },
    fail: (data) => {
      console.log('fail', data)
    }
  })
}

const getRandomArrayElements = (arr, count) => {
  const shuffled = arr.slice()
  let i = arr.length
  const min = i - count
  let temp
  let index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(min)
}

const setTime = (items) => {
  return items.map(item => ({
    author_name: item.author_name,
    cover: item.cover,
    id: item.id,
    post_id: item.post_id,
    published_at: format(item.published_at),
    title: item.title
  }))
}

const format = (dateStr) => {
  const date = parse(dateStr)
  const diff = Date.now() - date.getTime()
  if (diff < UNITS['天']) {
    return humanize(diff)
  }
  const _format = (number) => (number < 10 ? '0' + number : number)
  return `${date.getFullYear()}-${_format(date.getMonth() + 1)}-${_format(date.getDate())} ${_format(date.getHours())}:${_format(date.getMinutes())}`
}

const parse = (str) => {
  const a = str.split(/[^0-9]/)
  return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5])
}

const humanize = (diff) => {
  // Implement your humanize logic if needed
  return `${Math.floor(diff / UNITS['小时'])} hours ago`
}

const avatar = (count) => {
  return avatarList.value.slice(0, count)
}

const onClick = () => {
  uni.showToast({
    title: '列表被点击'
  })
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" >
	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}
</style>
