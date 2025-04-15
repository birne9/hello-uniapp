<template name="page-head">
	<view class="common-page-head">
		<view class="common-page-head-title">{{title}}</view>
	</view>
</template>
<script setup>
const props = defineProps({
	title: {
		type: String,
		default: ""
	}
})
	
</script>
