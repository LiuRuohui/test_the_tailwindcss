<template>
<!--提取组件或部分-->
  <div>
    <img class="rounded" :src="img" :alt="imgAlt">
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">{{ eyebrow }}</div>
        <div class="font-bold text-slate-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="mt-2 text-sm text-slate-600">{{ pricing }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
const img = ref()
const url = ref("www.baidu.com")
const imgAlt = ref("这是一张图片")
const eyebrow = ref()
const title = ref("123")
const pricing = ref(95)

</script>