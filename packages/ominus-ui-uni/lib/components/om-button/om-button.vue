<template>
  <view style="width: 100px; height: 50px; margin: 100px">{{ text }}</view>
  <view class="block"></view>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('一个按钮')
</script>
<style>
.block {
  font-size: 24rpx;
  text-align: center;
  background-color: aliceblue;
}
</style>
