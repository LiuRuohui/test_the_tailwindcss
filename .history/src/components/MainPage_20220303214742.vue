<template>
<div class="flex flex-row sm:mx-16 sm:my-20 sm:text-xl bg-indigo-300">
    <div class="basis-40">
        <div class="grid grid-rows-2 gap-4">
            <div class="row-span-2">
                <img src="../assets/用户.svg" alt="" class="h-32 w-2/3 mx-auto">
            </div>
            <div class="sm:text-xl text-center">{{nickname}}</div>
            <div class="bg-purple-500">123</div>
            <div class="bg-purple-500">123</div>
            <div class="bg-purple-500">123</div>
            <div class="bg-purple-500">123</div>
        </div>
    </div>

    <div class="basis-52 bg-red-300">
      列表
    </div>

    <div class="basis-1/2 bg-red-400">
      聊天框
    </div>
</div>
</template>

<script setup>
import {ref} from "vue"
const nickname = ref('刘若晖')
</script>