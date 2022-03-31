<template>
<div class="flex flex-row sm:mx-16 sm:my-20 sm:text-xl ">
    <div class="sm:basis-40 bg-blue-200">
        <div class="grid grid-rows-3 sm:gap-6 gap-3">
            <div class="row-span-2">
                <img src="../assets/用户.svg" alt="" class="mt-2 sm:mt-4 h-20 w-2/3 mx-auto">
            </div>
            <div class="sm:text-3xl text-center m-auto">{{nickname}}</div>
            <div class="grid grid-rows-4 gap-20 mt-4 ">
                <div class="bg-indigo-300 opacity-80" @click="gotoFriends">
                    <img src="../assets/好友.svg" alt="好友" class="h-16 m-auto">
                    <p class="sm:text-3xl text-xl text-center mt-2">好友</p>
                </div>
                <div class="bg-indigo-300 opacity-80" @click="gotoGroups">
                    <img src="../assets/群组.svg" alt="群组" class="h-16 m-auto">
                    <p class="sm:text-3xl text-xl text-center mt-2">群组</p>
                </div>
                <div class="bg-indigo-300 opacity-80" @click="settings">
                    <img src="../assets/设置.svg" alt="设置" class="h-16 m-auto"> 
                    <p class="sm:text-3xl text-xl text-center mt-2">设置</p>
                </div>
                <div class="bg-indigo-300 opacity-80" @click="Logout">
                    <img src="../assets/退出.svg" alt="退出" class="h-16 m-auto">
                    <p class="sm:text-3xl text-xl text-center mt-2">退出登录</p>
                </div>
            </div>
        </div>
    </div>

    <div class="sm:basis-52 bg-green-100 overflow-auto">
        <div v-for="friend in friends.name" class="my-4 sm:text-xl ">
            <img src="../assets/好友.svg" alt="好友" class="h-16 my-2 ml-4 inline-block">
            <span class="sm:text-xl p-4">好友1</span>
            <hr class="border-2">
        </div>
    </div>

    <div class="sm:flex-1 bg-red-100 flex flex-col">
        <div class="flex flex-col">
            <div class="bg-yellow-200 basis-20 sm:text-4xl opacity-60">
                <p class="text-center sm:pt-4">{{friends.name[1]}}</p>
            </div>
            <div class="basis-2/3">
123
            </div>
            <div class="flex-1">
123
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {ref,reactive} from "vue"
const nickname = ref('刘若晖')

const friends = reactive({
    name:['123','456','789','','','','','','','','','','','','','','','','',''],
    message:[],
})

const groups = reactive({})

function settings(){
    alert('你点击了设置')
}

function gotoFriends(){
    alert('显示好友列表')
}

function gotoGroups(){
    alert('显示群组列表')
}

function Logout(){
    var choose = confirm('退出登录!')
    if(choose == true){
        alert('退出登录，返回登录界面')
    }else{
        alert('111')
    }
}
</script>

<style>
.deisgn{
    background-color:red;
    font-size:12px;

}
</style>