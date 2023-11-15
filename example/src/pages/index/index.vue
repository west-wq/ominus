<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <i class="i-icons-delete" color="red"></i>
    <i class="i-custom-filter" color="red"></i>
    <view class="bg-black" c-brand-7 style="width: 50px; height: 50px" text-c>a</view>
  </view>
</template>

<script setup lang="ts">
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
