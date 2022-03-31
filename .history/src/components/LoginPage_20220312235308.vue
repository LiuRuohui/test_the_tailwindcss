<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <h2 class="mt-6 text-center sm:text-4xl font-extrabold text-purple-600">登录</h2>
    </div>
    <div class="object-center sm:mt-8">
            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
        </div>
    <div class="space-y-2">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div class="py-4 font">
          <label for="account">账号:</label>
          <input id="account" name="account" type="account" autocomplete="name" required class="inputFrame rounded-t-md  sm:text-xl" placeholder="请输入账号">
        </div>
        <div class="py-4 font">
          <label for="passwd">密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-xl" placeholder="请输入密码">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm sm:text-2xl text-gray-900"> 记住我</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium sm:text-2xl text-indigo-600 hover:text-indigo-500"> 忘记密码? </a>
        </div>
      </div>

      <div>
        <button @click="submit" class="btn group sm:text-2xl">
          登录
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
function submit(){
  alert('登录')
}

</script>

<style>
.font{
  color:hsla(210, 100%, 60%, 0.8);
  font-size: 22px;
}
</style>


