<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸。</text>
		</uni-card>
		<uni-section title="图标" type="line">
			<template v-slot:right>
				<view>
					<switch :checked="checked" @change="change" />
				</view>
			</template>
			<view class="icon-content">
				<view v-for="(item,index) in iconClassList" :key="index" class="icon-item" @click="switchActive(index,item)">
					<uni-icons :type="item.name" :color="activeIndex === index?'#007aff':'#5e6d82'" size="30" />
					<text :style="{color:activeIndex === index?'#007aff':'#5e6d82'}"
						class="uni-mt-5 uni-subtitle">{{ checked? item.unicode: item.name }}</text>
				</view>
			</view>
		</uni-section>
		<!-- #ifndef APP-PLUS -->
		<uni-section title="自定义图标" subTitle="引入参考App.vue" type="line">
			<view class="icon-content">
				<view class="icon-item" >
					<uni-icons customPrefix="customicons" type="youxi" color="#5e6d82" size="22" />
					<text style="color:#5e6d82;">youxi</text>
				</view>
				<view class="icon-item" >
					<uni-icons customPrefix="customicons" type="wenjian" color="#5e6d82" size="22" />
					<text style="color:#5e6d82;">wenjian</text>
				</view>
				<view class="icon-item" >
					<uni-icons customPrefix="customicons" type="zhuanfa" color="#5e6d82" size="22" />
					<text style="color:#5e6d82;">zhuanfa</text>
				</view>
			</view>
		</uni-section>
		<!-- #endif -->
	</view>
</template>
<script setup>
import { ref } from 'vue'

const iconClassList = ref([
  { "name": "arrow-down", "unicode": "e6be" },
  { "name": "arrow-left", "unicode": "e6bc" },
  { "name": "arrow-right", "unicode": "e6bb" },
  { "name": "arrow-up", "unicode": "e6bd" },
  { "name": "bottom", "unicode": "e6b8" },
  { "name": "left", "unicode": "e6b7" },
  { "name": "right", "unicode": "e6b5" },
  { "name": "top", "unicode": "e6b6" },
  { "name": "back", "unicode": "e6b9" },
  { "name": "forward", "unicode": "e6ba" },
  { "name": "checkmarkempty", "unicode": "e65c" },
  { "name": "closeempty", "unicode": "e66c" },
  { "name": "color", "unicode": "e6cf" },
  { "name": "color-filled", "unicode": "e6c9" },
  { "name": "wallet", "unicode": "e6b1" },
  { "name": "wallet-filled", "unicode": "e6c2" },
  { "name": "tune", "unicode": "e6aa" },
  { "name": "tune-filled", "unicode": "e6ca" },
  { "name": "settings", "unicode": "e560" },
  { "name": "settings-filled", "unicode": "e6ce" },
  { "name": "folder-add", "unicode": "e6a9" },
  { "name": "folder-add-filled", "unicode": "e6c8" },
  { "name": "calendar", "unicode": "e6a8" },
  { "name": "calendar-filled", "unicode": "e6c0" },
  { "name": "vip", "unicode": "e6a8" },
  { "name": "vip-filled", "unicode": "e6c6" },
  { "name": "notification", "unicode": "e6a6" },
  { "name": "notification-filled", "unicode": "e6c1" },
  { "name": "gift", "unicode": "e6a4" },
  { "name": "gift-filled", "unicode": "e6c4" },
  { "name": "medal", "unicode": "e6a2" },
  { "name": "medal-filled", "unicode": "e6c3" },
  { "name": "fire", "unicode": "e6a1" },
  { "name": "fire-filled", "unicode": "e6c5" },
  { "name": "camera", "unicode": "e301" },
  { "name": "camera-filled", "unicode": "e7ef" },
  { "name": "cart", "unicode": "e7f5" },
  { "name": "cart-filled", "unicode": "e7f4" },
  { "name": "chat", "unicode": "e263" },
  { "name": "chat-filled", "unicode": "e847" },
  { "name": "chatboxes", "unicode": "e203" },
  { "name": "chatboxes-filled", "unicode": "e233" },
  { "name": "chatbubble", "unicode": "e202" },
  { "name": "chatbubble-filled", "unicode": "e232" },
  { "name": "minus", "unicode": "e410" },
  { "name": "minus-filled", "unicode": "e440" },
  { "name": "plus", "unicode": "e409" },
  { "name": "plus-filled", "unicode": "e439" },
  { "name": "checkbox", "unicode": "e7fa" },
  { "name": "checkbox-filled", "unicode": "e442" },
  { "name": "close", "unicode": "e404" },
  { "name": "clear", "unicode": "e434" },
  { "name": "circle", "unicode": "e411" },
  { "name": "circle-filled", "unicode": "e441" },
  { "name": "help", "unicode": "e505" },
  { "name": "help-filled", "unicode": "e535" },
  { "name": "info", "unicode": "e504" },
  { "name": "info-filled", "unicode": "e534" },
  { "name": "smallcircle", "unicode": "e868" },
  { "name": "smallcircle-filled", "unicode": "e801" },
  { "name": "upload", "unicode": "e402" },
  { "name": "upload-filled", "unicode": "e8b1" },
  { "name": "download", "unicode": "e403" },
  { "name": "download-filled", "unicode": "e8a4" },
  { "name": "cloud-download", "unicode": "e8e4" },
  { "name": "cloud-download-filled", "unicode": "e8e9" },
  { "name": "cloud-upload", "unicode": "e8e6" },
  { "name": "cloud-upload-filled", "unicode": "e8e5" },
  { "name": "email", "unicode": "e201" },
  { "name": "email-filled", "unicode": "e231" },
  { "name": "mail-open", "unicode": "e84e" },
  { "name": "mail-open-filled", "unicode": "e84d" },
  { "name": "eye", "unicode": "e824" },
  { "name": "eye-filled", "unicode": "e568" },
  { "name": "eye-slash", "unicode": "e823" },
  { "name": "eye-slash-filled", "unicode": "e822" },
  { "name": "hand-down", "unicode": "e83c" },
  { "name": "hand-down-filled", "unicode": "e83b" },
  { "name": "hand-up", "unicode": "e83f" },
  { "name": "hand-up-filled", "unicode": "e83d" },
  { "name": "gear", "unicode": "e502" },
  { "name": "gear-filled", "unicode": "e532" },
  { "name": "flag", "unicode": "e508" },
  { "name": "flag-filled", "unicode": "e825" },
  { "name": "heart", "unicode": "e840" },
  { "name": "heart-filled", "unicode": "e83e" },
  { "name": "home", "unicode": "e500" },
  { "name": "home-filled", "unicode": "e530" },
  { "name": "image", "unicode": "e363" },
  { "name": "image-filled", "unicode": "e877" },
  { "name": "images", "unicode": "e87b" },
  { "name": "images-filled", "unicode": "e87a" },
  { "name": "locked", "unicode": "e506" },
  { "name": "locked-filled", "unicode": "e856" },
  { "name": "location", "unicode": "e303" },
  { "name": "location-filled", "unicode": "e333" },
  { "name": "map", "unicode": "e364" },
  { "name": "map-filled", "unicode": "e85c" },
  { "name": "map-pin", "unicode": "e85e" },
  { "name": "map-pin-ellipse", "unicode": "e864" },
  { "name": "mic", "unicode": "e302" },
  { "name": "mic-filled", "unicode": "e332" },
  { "name": "micoff", "unicode": "e360" },
  { "name": "micoff-filled", "unicode": "e892" },
  { "name": "more", "unicode": "e507" },
  { "name": "more-filled", "unicode": "e537" },
  { "name": "navigate", "unicode": "e501" },
  { "name": "navigate-filled", "unicode": "e884" },
  { "name": "paperplane", "unicode": "e503" },
  { "name": "paperplane-filled", "unicode": "e86e" },
  { "name": "contact", "unicode": "e100" },
  { "name": "contact-filled", "unicode": "e130" },
  { "name": "auth", "unicode": "e101" },
  { "name": "auth-filled", "unicode": "e131" }
])

const checked = ref(false)

const switchActive = (index, item) => {
  console.log(`Item clicked: ${item.name}, Index: ${index}`)
}
</script>

<style lang="scss" scoped>

	.icon-content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;

		.icon-item {
			/* #ifndef APP-NVUE */
			display: flex;
			box-sizing: border-box;
			width: calc(100% / 4);
			/* #endif */
			/* #ifdef APP-NVUE */
			width: 187rpx;
			/* #endif */
			align-items: center;
			padding: 10px;
			text-align: center;
			flex-direction: column;
		}
	}
</style>
