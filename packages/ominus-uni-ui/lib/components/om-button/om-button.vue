<template>
  <view style="width: 100px; height: 50px; margin: 100px">{{ text }}<i class="i-icons-delete" color="red"></i></view>
  <view class="block" overflow-auto></view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('一个按钮111')
</script>
<style>
.block {
  font-size: 24rpx;
  text-align: center;
  background-color: aliceblue;
}
</style>
