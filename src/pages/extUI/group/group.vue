<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6"
        >分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text
      >
    </uni-card>
    <uni-section title="基础分组" type="line">
      <uni-group>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
      </uni-group>
      <uni-group title="基本模式" margin-top="20">
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
      </uni-group>
    </uni-section>

    <uni-section title="卡片分组" type="line">
      <uni-group mode="card">
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
      </uni-group>

      <uni-group title="card 模式" mode="card">
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
        <view> 分组内容 </view>
      </uni-group>
    </uni-section>
  </view>
</template>

<script setup>
import { ref } from "vue";

const appear = ref(false);
const name = ref("");
const mobile = ref("139 9999 9999");
const weixin = ref("sskd");
const message = ref("");
const errorMessage = ref("");

onReady(() => {
  // Logic that should run when the component is ready
});
</script>

<style lang="scss" scoped>
.uni-wrap {
  flex-direction: column;
  /* #ifdef H5 */
  height: calc(100vh - 44px);
  /* #endif */
  /* #ifndef H5 */
  height: 100vh;
  /* #endif */
  flex: 1;
}

.scroll {
  flex-direction: column;
  flex: 1;
}

.example-body {
  padding: 0;
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
}
</style>
