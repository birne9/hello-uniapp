<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>
		<uni-section title="主色" type="line">
			<view class="uni-ma-5">
				<view class="box uni-radius">
					<view class="item-box uni-primary-bg "><text class="uni-body uni-white">primary</text></view>
					<view class="item-box">
						<view class="item uni-primary-disable-bg "><text class="uni-body uni-white">disable</text>
						</view>
						<view class="item uni-primary-light-bg "><text class="uni-body uni-white">light</text></view>
					</view>
				</view>
			</view>
		</uni-section>
		<uni-section title="辅助色" sub-title="除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。" type="line">
			<view class="uni-ma-5">
				<view class="box uni-radius">
					<view class="item-box uni-success-bg "><text class="uni-body uni-white">success</text></view>
					<view class="item-box">
						<view class="item uni-success-disable-bg "><text class="uni-body uni-white">disable</text>
						</view>
						<view class="item uni-success-light-bg "><text class="uni-body uni-white">light</text></view>
					</view>
				</view>
				<view class="box  uni-mt-5 uni-radius">
					<view class="item-box uni-warning-bg "><text class="uni-body uni-white">warning</text></view>
					<view class="item-box">
						<view class="item uni-warning-disable-bg "><text class="uni-body uni-white">disable</text>
						</view>
						<view class="item uni-warning-light-bg "><text class="uni-body uni-white">light</text></view>
					</view>
				</view>
				<view class="box uni-mt-5 uni-radius">
					<view class="item-box uni-error-bg "><text class="uni-body uni-white">error</text></view>
					<view class="item-box">
						<view class="item uni-error-disable-bg "><text class="uni-body uni-white">disable</text></view>
						<view class="item uni-error-light-bg "><text class="uni-body uni-white">light</text></view>
					</view>
				</view>
				<view class="box uni-mt-5 uni-radius">
					<view class="item-box uni-info-bg uni-white"><text class="uni-body uni-white">info</text></view>
					<view class="item-box">
						<view class="item uni-info-disable-bg uni-white"><text class="uni-body uni-white">disable</text>
						</view>
						<view class="item uni-info-light-bg uni-white"><text class="uni-body uni-white">light</text>
						</view>
					</view>
				</view>
			</view>
		</uni-section>
		<uni-section title="中性色" sub-title="中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。" type="line">
			<view class="uni-ma-5 uni-radius">
				<view class="box-base uni-radius uni-main-color-bg uni-mt-5"><text
						class="uni-body uni-white">main-color</text></view>
				<view class="box-base uni-radius uni-base-color-bg uni-mt-5 "><text
						class="uni-body uni-white">base-color</text></view>
				<view class="box-base uni-radius uni-secondary-color-bg uni-mt-5"><text
						class="uni-body uni-white">secondary-color</text></view>
				<view class="box-base uni-radius uni-extra-color-bg uni-mt-5"><text
						class="uni-body uni-white">extra-color</text></view>
			</view>
		</uni-section>

		<uni-section title="分隔线" sub-title="主要用于边框颜色" type="line">
			<view class="uni-ma-5 uni-radius">
				<view class="box-base uni-radius uni-border-4-bg uni-mt-5 "><text
						class="uni-body uni-secondary-color uni-white">border-4</text></view>
				<view class="box-base uni-radius uni-border-3-bg uni-mt-5 "><text
						class="uni-body uni-secondary-color uni-white">border-3</text></view>
				<view class="box-base uni-radius uni-border-2-bg uni-mt-5"><text
						class="uni-body uni-white">border-2</text></view>
				<view class="box-base uni-radius uni-border-1-bg uni-mt-5"><text
						class="uni-body uni-white">border-1</text></view>
			</view>
		</uni-section>

		<uni-section title="常规色" sub-title="通用颜色,如黑色白色" type="line">
			<view class="uni-ma-5 uni-radius">
				<view class="box-base uni-radius uni-border uni-white-bg uni-mt-5"><text
						class="uni-body uni-secondary-color">white</text></view>
				<view class="box-base uni-radius uni-border uni-black-bg uni-mt-5"><text
						class="uni-body uni-secondary-color">black</text></view>
				<view class="box-base uni-radius uni-border uni-transparent-bg uni-mt-5"><text
						class="uni-body uni-secondary-color">transparent</text>
				</view>
				<view class="box-base uni-radius uni-border uni-bg-color-bg uni-mt-5"><text
						class="uni-body uni-secondary-color">bg-color</text></view>
			</view>
		</uni-section>

		<uni-section title="阴影" type="line">
			<view class="box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-sm  uni-mt-2"><text
					class="uni-body uni-secondary-color">shadow-sm</text></view>
			<view class="box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-base uni-secondary-color uni-mt-2"><text
					class="uni-body uni-secondary-color">shadow-base</text></view>
			<view class="box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-lg uni-secondary-color uni-mt-2"><text
					class="uni-body uni-secondary-color">shadow-lg</text></view>
		</uni-section>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	@mixin flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box {
		display: flex;
		flex-direction: column;
		/* #ifndef APP-NVUE */
		min-height: 50px;
		/* #endif */
		font-size: 14px;
		overflow: hidden;

		.item-box {
			@include flex;
			flex-direction: row;
			height: 50px;
			overflow: hidden;

			.item {
				@include flex;
				flex: 1;
				height: 50px;
			}
		}
	}

	.box-base {
		@include flex;
		height: 50px;
	}
</style>
