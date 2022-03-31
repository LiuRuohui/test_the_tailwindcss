<template>
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8c">
    <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-600">注册</h2>
        </div>
        <div>
            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
        </div>
        <form class="mt-8 space-y-4" action="#" method="POST">
      <div class="rounded-md shadow-sm sm:text-xl">
        <div class="py-4 text-blue-800">
          <label for="nickname">昵称:</label>
          <input id="nickname" name="nickname" type="nickname" autocomplete="nickname" required class="btn  rounded-t-md  sm:text-xl" placeholder="请输入昵称">
        </div>
        <div class="py-4 text-blue-800">
          <label for="account">账号:</label>
          <input id="account" name="account" type="account" autocomplete="current-account" required class="btn rounded-b-md sm:text-xl" placeholder="请输入账号">
        </div>
        <div class="py-4 text-blue-800">
          <label for="passwd">密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="btn rounded-b-md  sm:text-xl" placeholder="请输入密码">
        </div>
        <div class="py-4 text-blue-800">
          <label for="repeated-password">再次输入密码:</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="btn rounded-b-md sm:text-xl" placeholder="请再次输入密码">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm sm:text-xl">
          <a href="#" class="font-medium text-indigo-800 hover:text-indigo-500"> 查看我们的功能 </a>
        </div>
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block sm:text-xl text-gray-900"> 同意隐私协议 </label>
        </div>
      </div>

      <div class="sm:text-xl sm:mt-8">
        <button @click="reset" class="group relative flex w-full justify-center py-2 border border-transparent sm:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          重置输入
        </button> <br>
        <button @click="submit" type="submit" class="group relative flex w-full justify-center py-2 border border-transparent sm:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          注册
        </button>
      </div>
    </form>
    </div>
</div>
</template>

<script setup>

function reset() {

}

function submit() {

}

</script>
