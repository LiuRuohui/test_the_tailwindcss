<template>
<div class="flex items-center justify-center py-8 px-4 sm:px-4 lg:px-6">
  <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
    <div>
      <h2 class="mt-4 text-center text-4xl font-extrabold text-purple-600 opacity-90">欢迎使用即时通讯</h2>
    </div>
    <div>
        <img class="w-1/2 width shadow-xl mx-auto" src="../assets/QQ图片20220303084420.jpg" alt="这里有一张图片">
    </div>
    <div class="mt-8 space-y-6">
      <div class="flex items-center justify-between">
        <div class="text-sm sm:text-xl">
          <a href="#" class="font-medium text-indigo-800 hover:text-indigo-500" @click="seeFunctions"> 查看我们的功能</a>
        </div>
        <div class="text-sm sm:text-xl">
          <a href="#" class="font-medium text-indigo-800 hover:text-indigo-500" @click="policities"> 了解隐私策略</a>
        </div>
      </div>
      <div class="sm:text-xl sm:mt-8">
          <p class="my-2 text-gray-500">如果您未拥有账户,请点击注册</p>
        <button  class="btn group sm:text-2xl" @click="register">
          注册
        </button>
        <p class="my-2 text-gray-500">已经有账户?请登录</p>
        <button  class="btn group sm:text-2xl" @click="login">
          登录
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
function seeFunctions(){
  alert('我们的功能是')
}

function policities(){
  var x = confirm('123')
  if(x == true){
    alert('你选了确认')
  }
  else {
    alert('你否认了')
  }
}

function register(){
  alert('路由跳转注册界面')
}

function login(){
  alert('路由跳转登录界面')
}
</script>

