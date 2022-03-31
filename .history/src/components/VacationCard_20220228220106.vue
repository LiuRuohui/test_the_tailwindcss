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

//创建模板部分或 JavaScript 组件
function Notification({ imageUrl, imageAlt, title, message }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  )
}

</script>