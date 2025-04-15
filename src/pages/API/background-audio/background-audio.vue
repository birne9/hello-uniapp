<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-center">
				<text class="time-big">{{formatedPlayTime}}</text>
			</view>
			<view class="uni-common-mt">
				<slider class="slider" min="0" max="21" step="1" :value="playTime" @change="seek"></slider>
			</view>
			<view class="play-time">
				<text>00:00</text>
				<text>00:21</text>
			</view>
			<view class="uni-hello-text">注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止</view>
			<view class="page-body-buttons">
				<block v-if="playing">
					<view class="page-body-button" @tap="stop">
						<image src="/static/stop.png"></image>
					</view>
					<view class="page-body-button" @tap="pause">
						<image src="/static/pause.png"></image>
					</view>
				</block>
				<block v-if="!playing">
					<view class="page-body-button"></view>
					<view class="page-body-button" @tap="play">
						<image src="/static/play.png"></image>
					</view>
				</block>
				<view class="page-body-button"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted ,getCurrentInstance} from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import * as util from '@/common/util.js'

// 响应式数据
const title = ref('backgroundAudio')
const bgAudioManager = ref(null)
const dataUrl = ref('https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3')
const playing = ref(false)
const playTime = ref(0)
const formatedPlayTime = ref('00:00:00')
const {proxy} =getCurrentInstance()


onLoad(() => {
  // 初始化全局状态同步
  playing.value = proxy.$backgroundAudioData.playing.value
  playTime.value =proxy.$backgroundAudioData.playTime.value
  formatedPlayTime.value = proxy.$backgroundAudioData.formatedPlayTime.value

  // 初始化音频管理器
  const manager = uni.getBackgroundAudioManager()
  bgAudioManager.value = manager

  // 设置默认元数据
  if (!manager.title) manager.title = '致爱丽丝'
  if (!manager.singer) manager.singer = '暂无'
  if (!manager.coverImgUrl) {
    manager.coverImgUrl = 'https://web-assets.dcloud.net.cn/unidoc/zh/Alice.jpeg'
  }

  // 事件监听
  manager.onPlay(() => {
    console.log("开始播放")
    updateGlobalState({ playing: true })
  })

  manager.onPause(() => {
    console.log("暂停播放")
    updateGlobalState({ playing: false })
  })

  manager.onEnded(() => {
    updateGlobalState({
      playing: false,
      playTime: 0,
      formatedPlayTime: util.formatTime(0)
    })
  })

  manager.onTimeUpdate(() => {
    const current = Math.floor(manager.currentTime)
    if (current > Math.floor(playTime.value)) {
      updateGlobalState({
        playTime: manager.currentTime,
        formatedPlayTime: util.formatTime(current)
      })
    } else {
      playTime.value = manager.currentTime
      proxy.$backgroundAudioData.playTime.value = manager.currentTime
    }
  })
})

// 更新全局状态方法
const updateGlobalState = ({ 
  playing: newPlaying = playing.value,
  playTime: newPlayTime = playTime.value,
  formatedPlayTime: newFormated = formatedPlayTime.value
}) => {
  playing.value = proxy.$backgroundAudioData.playing.value = newPlaying
  playTime.value = proxy.$backgroundAudioData.playTime.value = newPlayTime
  formatedPlayTime.value = proxy.$backgroundAudioData.formatedPlayTime.value = newFormated
}

// 控制方法
const play = () => {
  const manager = bgAudioManager.value
  if (!manager.src) {
    manager.startTime = playTime.value
    manager.src = dataUrl.value
  } else {
    manager.seek(playTime.value)
    manager.play()
  }
}

const seek = (value) => {
  bgAudioManager.value.seek(value)
}

const pause = () => {
  bgAudioManager.value.pause()
}

const stop = () => {
  bgAudioManager.value.stop()
  updateGlobalState({
    playing: false,
    playTime: 0,
    formatedPlayTime: util.formatTime(0)
  })
}
</script>

<style lang="scss" scoped>
	image {
		width: 150rpx;
		height: 150rpx;
	}

	.page-body-text {
		padding: 0 30rpx;
	}

	.page-body-wrapper {
		margin-top: 0;
	}

	.page-body-info {
		padding-bottom: 50rpx;
	}

	.time-big {
		font-size: 60rpx;
		margin: 20rpx;
	}

	.slider {
		width:630rpx;
	}

	.play-time {
		font-size: 28rpx;
		width:100%;
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.page-body-buttons {
		display: flex;
		justify-content: space-around;
		margin-top: 100rpx;
	}

	.page-body-button {
		width: 250rpx;
		text-align: center;
	}
</style>
