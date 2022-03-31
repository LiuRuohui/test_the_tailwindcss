<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">登录</h2>
    </div>
    <div>
        <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div class="py-4 text-blue-800 sm:text-xl">
          <label for="account">账号:</label>
          <input id="account" name="account" type="account" autocomplete="current-account" required class="inputFrame rounded-b-md sm:text-xl" placeholder="请输入账号">
        </div>
        <div class="py-4 text-blue-800 sm:text-xl">
          <label for="passwd">密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-xl" placeholder="请输入密码">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm sm:text-xl text-gray-900"> 记住我</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium sm:text-xl text-indigo-600 hover:text-indigo-500"> 忘记密码? </a>
        </div>
      </div>

      <div>
        <button @click="submit" type="submit" class="btn group sm:text-xl">
          登录
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>

</script>


