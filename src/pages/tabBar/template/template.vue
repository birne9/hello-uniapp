<template>
	<view class="uni-container">
		<view v-if="!hasLeftWin" class="uni-header-logo">
			<image class="uni-header-image" src="/static/templateIndex.png"></image>
		</view>
		<view v-if="!hasLeftWin" class="uni-hello-text">
			<text class="hello-text">以下是部分模板示例，更多模板见插件市场：</text>
			<u-link class="hello-link" href="https://ext.dcloud.net.cn" :text="'https://ext.dcloud.net.cn'"
				:inWhiteList="true"></u-link>
		</view>
		<view :class="{'pc-hide': hideList.indexOf(item.url) !== -1  && hasLeftWin}" class="uni-panel"
			v-for="(item, index) in list" :key="item.id">
			<view
				:class="{'left-win-active': leftWinActive === item.url  && hasLeftWin, 'uni-panel-h-on': item.open}"
				class="uni-panel-h" @click="triggerCollapse(index, item.id)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon"
					:class="item.open  ? 'uni-panel-icon-on' : ''">{{item.pages ? '&#xe581;' : '&#xe470;'}}</text>
			</view>
			<view class="uni-panel-c" v-if="item.open ">
				<view
					:class="{'left-win-active': leftWinActive === item2.url  && hasLeftWin, 'pc-hide': hideList.indexOf(item2.url) !== -1  && hasLeftWin}"
					class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
					<text class="uni-navigate-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			hasLeftWin: {
				type: Boolean
			},
			leftWinActive: {
				type: String
			}
		},
		data() {
			return {
				hideList: [
					'ucharts',
					'nav-city-dropdown'
				],
				list: [
					// #ifdef APP-PLUS || H5 || MP-ALIPAY
					{
						id: 'navbar',
						name: '顶部原生导航标题栏',
						open: false,
						pages: [
							// #ifdef APP-PLUS || H5
							{
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '导航栏带搜索框',
								url: 'nav-search-input'
							},
							// #endif
							// #ifdef APP-PLUS || H5 || MP-ALIPAY
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							}
							// #endif
						]
					},
					// #endif
					// #ifndef QUICKAPP-WEBVIEW || MP-KUAISHOU
					{
						name: '顶部选项卡',
						url: 'tabbar'
					},
					// #endif
					{
						name: '组件通讯',
						url: 'component-communication'
					},
					// #ifndef MP-QQ || QUICKAPP-WEBVIEW
					// {
					// 	name: 'uCharts 图表',
					// 	url: 'ucharts'
					// },
					// #endif
					// #ifndef QUICKAPP-WEBVIEW
					{
						name: '列表到详情示例',
						url: 'list2detail-list'
					},
					// #endif
					// #ifndef VUE3
					// #ifdef APP-PLUS
					// {
					// 	name: '上下滑动切换视频',
					// 	url: 'swiper-vertical'
					// },
					// #endif
					// #endif
					// #ifdef APP-NVUE
					{
						name: 'swiper-list',
						url: 'swiper-list-nvue'
					},
					// #endif
					{
						name: 'GlobalData和vuex',
						url: 'global'
					},
					// #ifdef APP-NVUE
					{
						name: 'vuex-nvue',
						url: 'vuex-nvue'
					},
					// #endif
					{
						name: 'vuex-vue',
						url: 'vuex-vue'
					},
					// #ifdef VUE3
					{
						name: 'pinia',
						url: 'pinia'
					},
					// #endif
					// #ifdef APP-PLUS || H5
					{
						name: 'renderjs',
						url: 'renderjs'
					},
					// #endif
					// #ifdef APP-PLUS
					{
						name: '问题反馈',
						url: '/platforms/app-plus/feedback/feedback'
					},
					{
						name: '打开外部应用',
						url: 'scheme'
					},
					// #endif
					// #ifdef APP-PLUS || MP-WEIXIN || MP-QQ || H5
					// {
					// 	name: '微信自定义组件示例（vant ui）',
					// 	url: 'vant-button'
					// }
					// #endif
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/tabBar/template/template'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		// #ifdef H5
		watch: {
			$route: {
				immediate: true,
				handler(newRoute) {
					if (newRoute.matched.length) {
						let path = newRoute.path.split('/')[3]
						for (const item of this.list) {
							if (Array.isArray(item.pages)) {
								for (const page of item.pages) {
									if (page === path || page.url && page.url === path) {
										item.open = true
									}
								}
							}
						}
					}
				}
			}
		},
		// #endif
		methods: {
			triggerCollapse(e, id) {
				if (!this.list[e].pages) {
					this.goDetailPage(this.list[e].url);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				let path = e.url ? e.url : e;
				let url = ~path.indexOf('platform') ? path : '/pages/template/' + path + '/' + path;
				if (this.hasLeftWin) {
					uni.reLaunch({
						url: url
					})
				} else {
					uni.navigateTo({
						url: url
					})
				}
				return false;
			}
		}
	}
</script>

<style>
		@import '../../../common/common.css';
</style>
