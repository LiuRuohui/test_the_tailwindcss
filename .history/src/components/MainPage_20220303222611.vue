<template>
<div class="flex flex-row sm:mx-16 sm:my-20 sm:text-xl bg-indigo-300">
    <div class="basis-44">
        <div class="grid grid-rows-3 gap-6">
            <div class="row-span-2">
                <img src="../assets/用户.svg" alt="" class=" mt-8 h-32 w-2/3 mx-auto">
            </div>
            <div class="sm:text-3xl text-center m-auto">{{nickname}}</div>
            <div class="grid grid-rows-4 gap-20 bg-indigo-400">
                <div class="">
                    <img src="../assets/设置.svg" alt="设置" class="h-16"> 
                </div>
                <div class="">
                    <img src="../assets/设置.svg" alt="设置" class="h-16">
                </div>
                <div class="">
                    <img src="../assets/设置.svg" alt="设置" class="h-16">
                </div>
                <div class="">
                    <img src="../assets/设置.svg" alt="设置" class="h-16">
                </div>
            </div>
        </div>
    </div>

    <div class="basis-56 bg-red-300">
      列表
    </div>

    <div class="basis-auto bg-red-400">
      聊天框111111111111111111111111111111111111111111111111111
    </div>
</div>
</template>

<script setup>
import {ref} from "vue"
const nickname = ref('刘若晖')
</script>