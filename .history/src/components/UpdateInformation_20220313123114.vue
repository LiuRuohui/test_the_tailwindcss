<template>
<div class="min-h-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center sm:text-4xl font-extrabold text-purple-600">更改信息</h2>
    </div>
    <div>
        <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
    </div>
    <div class="mt-4 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div class="py-2 text-blue-800 sm:text-2xl">
          <label for="account">账号:</label>
          <input id="account" name="account" type="account" autocomplete="account" required class="inputFrame rounded-t-md  sm:text-2xl" placeholder="请输入账号">
        </div>
        <div class="py-2 text-blue-800 sm:text-2xl">
          <label for="nickname">昵称:</label>
          <input id="nickname" name="nickname" type="nickname" autocomplete="nickname" required class="inputFrame rounded-t-md  sm:text-2xl" placeholder="请输入昵称">
        </div>
        <div class="py-2 text-blue-800 sm:text-2xl">
          <label for="email-address">邮箱:</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="inputFrame rounded-t-md  sm:text-2xl" placeholder="请输入邮箱">
        </div>
        <div class="py-2 text-blue-800 sm:text-2xl">
            <label for="sex">性别:</label>
            <select name="性别" class="inputFrame">
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <div class="py-2 text-blue-800 sm:text-2xl">
          <label for="passwd">密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-2xl" placeholder="请输入密码">
        </div>
        <div class="py-2 text-blue-800 sm:text-2xl">
          <label for="passwd">请再次输入密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-2xl" placeholder="请再次输入密码">
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

<script>

</script>

<style>
.font{
  color:hsla(210, 100%, 60%, 0.8);
  font-size: 22px;
}
</style>