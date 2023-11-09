<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <!-- <om-button></om-button> -->
    <i class="i-icons-delete" color="red"></i>

    <view class="bg-black" c-brand-7 style="width: 50px; height: 50px" text-c>a</view>
    <om-wrapper></om-wrapper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  color: #8f8f94;
  font-size: 36rpx;
}
</style>
