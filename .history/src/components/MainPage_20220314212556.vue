<template>
<div class="page">

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
.page{
    height: 100vh;
    background-color:hsla(190, 100%, 95%, 0.5)
}
</style>