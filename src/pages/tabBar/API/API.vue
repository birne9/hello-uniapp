<template>
  <view class="uni-container">
    <template>
      <view v-if="!hasLeftWin" class="uni-header-logo">
        <image class="uni-header-image" src="/static/apiIndex.png"></image>
      </view>
      <view v-if="!hasLeftWin" class="uni-hello-text">
        <text class="hello-text">以下将演示uni-app接口能力，详细文档见：</text>
        <u-link
          class="hello-link"
          :href="'https://uniapp.dcloud.io/api/'"
          :text="'https://uniapp.dcloud.io/api/'"
          :inWhiteList="true"
        ></u-link>
      </view>
      <view class="uni-panel" v-for="(item, index) in list" :key="item.id">
        <view
          class="uni-panel-h"
          :class="item.open ? 'uni-panel-h-on' : ''"
          @click="triggerCollapse(index, item.id)"
        >
          <text class="uni-panel-text">{{ item.name }}</text>
          <text
            class="uni-panel-icon uni-icon"
            :class="item.open ? 'uni-panel-icon-on' : ''"
            >{{ item.pages ? "&#xe581;" : "&#xe470;" }}</text
          >
        </view>
        <view class="uni-panel-c" v-if="item.open">
          <view
            :class="{
              'left-win-active': leftWinActive === item2.url && hasLeftWin,
              'pc-hide': item2.name === '设置TabBar' && hasLeftWin,
            }"
            class="uni-navigate-item"
            v-for="(item2, key) in item.pages"
            :key="key"
            :url="item.url"
            @click="goDetailPage(item.id, item2.url)"
          >
            <text class="uni-navigate-text">{{
              item2.name ? item2.name : item2
            }}</text>
            <text class="uni-navigate-icon uni-icon">&#xe470;</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  onShareAppMessage,
  onNavigationBarButtonTap,
} from "@dcloudio/uni-app";
// Props
const props = defineProps({
  hasLeftWin: {
    type: Boolean,
  },
  leftWinActive: {
    type: String,
  },
});

// Reactive state
const showSetTabBarPage = ref(false);
const list = ref([
  {
    id: "page",
    name: "界面",
    open: false,
    pages: [
      { name: "设置导航条", url: "set-navigation-bar-title" },
      { name: "原生子窗体", url: "subnvue" },
      { name: "页面跳转", url: "navigator" },
      { name: "设置TabBar", url: "set-tabbar" },
      { name: "下拉刷新", url: "pull-down-refresh" },
      { name: "创建动画", url: "animation" },
      { name: "创建绘画", url: "canvas" },
      { name: "节点信息", url: "get-node-info" },
      { name: "节点布局交互状态", url: "intersection-observer" },
      { name: "显示操作菜单", url: "action-sheet" },
      { name: "显示模态弹窗", url: "modal" },
      { name: "显示加载提示框", url: "show-loading" },
      { name: "显示消息提示框", url: "toast" },
    ],
  },
  {
    id: "device",
    name: "设备",
    open: false,
    pages: [
      { name: "获取设备网络状态", url: "get-network-type" },
      { name: "获取设备系统信息", url: "get-system-info" },
      { name: "打电话", url: "make-phone-call" },
      { name: "震动", url: "vibrate" },
      { name: "添加手机联系人", url: "add-phone-contact" },
      { name: "扫码", url: "scan-code" },
      { name: "剪贴板", url: "clipboard" },
      { name: "屏幕亮度", url: "brightness" },
      { name: "蓝牙", url: "bluetooth" },
      { name: "生物认证", url: "soter" },
      { name: "iBeacon", url: "ibeacon" },
      { name: "监听加速度传感器", url: "on-accelerometer-change" },
      { name: "监听罗盘数据", url: "on-compass-change" },
      {
        name: "监听距离传感器",
        url: "/platforms/app-plus/proximity/proximity",
      },
      {
        name: "监听方向传感器",
        url: "/platforms/app-plus/orientation/orientation",
      },
    ],
  },
  {
    id: "network",
    name: "网络",
    open: false,
    pages: [
      { name: "发起一个请求", url: "request" },
      { name: "上传文件", url: "upload-file" },
      { name: "下载文件", url: "download-file" },
    ],
  },
  {
    id: "websocket",
    name: "websocket",
    open: false,
    pages: [
      { name: "socketTask", url: "websocket-socketTask" },
      { name: "全局websocket", url: "websocket-global" },
    ],
  },
  {
    id: "media",
    name: "媒体",
    open: false,
    pages: [
      { name: "图片", url: "image" },
      { name: "音频", url: "inner-audio" },
      { name: "录音", url: "voice" },
      { name: "背景音频", url: "background-audio" },
      { name: "视频", url: "video" },
      { name: "文件", url: "file" },
      { name: "保存媒体到本地", url: "save-media" },
    ],
  },
  {
    id: "location",
    name: "位置",
    open: false,
    pages: [
      { name: "获取当前位置", url: "get-location" },
      { name: "使用地图查看位置", url: "open-location" },
      { name: "使用地图选择位置", url: "choose-location" },
      { name: "地图控制", url: "map" },
      { name: "地图搜索", url: "map-search" },
    ],
  },
  {
    id: "storage",
    name: "数据",
    open: false,
    pages: [
      { name: "数据存储（key-value）", url: "storage" },
      { name: "SQLite", url: "sqlite" },
    ],
  },
]);

const notForPc = ref([{ name: "设置TabBar", url: "set-tabbar" }]);

// Methods
const triggerCollapse = (e, id) => {
  if (!list.value[e].pages) {
    goDetailPage("", list.value[e].url);
    return;
  }
  for (let i = 0; i < list.value.length; ++i) {
    if (e === i) {
      list.value[i].open = !list.value[i].open;
    } else {
      list.value[i].open = false;
    }
  }
};

const goDetailPage = (panel, e) => {
  if (e === "set-tabbar") {
    showSetTabBarPage.value = true;
    return;
  }
  console.log(e,'xxx')
  const url = e.indexOf("platform") > -1 ? e : "/pages/API/" + e + "/" + e;
  if (props.hasLeftWin) {
    uni.reLaunch({ url });
  } else {
    console.log('xxxxx')
    uni.navigateTo({ url });
  }
};

const leaveSetTabBarPage = () => {
  showSetTabBarPage.value = false;
};
onShareAppMessage(() => {
  return {
    title: "欢迎体验uni-app",
    path: "/pages/tabBar/API/API",
  };
});

onNavigationBarButtonTap(() => {
  uni.navigateTo({
    url: "/pages/about/about",
  });
});



// Lifecycle hooks
onMounted(() => {
  // Handle any setup logic
});

onBeforeUnmount(() => {
  // Cleanup logic before unmounting
});
</script>

<style>
@import "../../../common/common.css";
</style>
