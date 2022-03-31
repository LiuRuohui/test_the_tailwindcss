<template>
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8c">
    <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
        <div>
            <h2 class="mt-6 text-center sm:text-4xl font-extrabold text-purple-600">注册</h2>
        </div>
        <div>
            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
        </div>
    <form class="mt-8 space-y-4" action="#" method="POST">
      <div class="rounded-md shadow-sm sm:text-xl">
        <div class="py-4 text-blue-800">
          <label for="email-address">邮箱</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="inputFrame rounded-t-md  sm:text-xl" placeholder="请输入邮箱">
        </div>
        <div class="py-4 text-blue-800">
          <label for="name">昵称:</label>
          <input id="name" name="name" type="name" autocomplete="name" required class="inputFrame rounded-t-md  sm:text-xl" placeholder="请输入昵称">
        </div>
        <div class="py-4 text-blue-800">
          <label for="passwd">密码:</label>
          <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-xl" placeholder="请输入密码">
        </div>
        <div class="py-4 text-blue-800">
          <label for="passwd">再次输入密码:</label>
          <input id="repeated-passwd" name="repeated-passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md sm:text-xl" placeholder="请再次输入密码">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm sm:text-xl">
          <a href="#" class="font-medium text-indigo-800 hover:text-indigo-500" @click="seeFunctions"> 查看我们的功能 </a>
        </div>
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block sm:text-xl text-gray-900"> 同意隐私协议 </label>
        </div>
      </div>
      <div class="sm:text-xl sm:mt-8">
        <input value="重置" type="reset" @click="reset" class="btn group sm:text-xl text-center">
        <br>
        <input @click="submit" type="submit" class="btn group sm:text-xl"><br>
        <button @click="fantastic">点击</button>
      </div>
    </form>
    </div>
</div>
</template>

<script setup>
function fantastic(){
  let name = document.getElementById("passwd").value
  let repeated_name = document.getElementById("repeated_passwd").value
  console.log( name,repeated_name)
}

function seeFunctions(){
  alert("See functions")
}

function reset() {
  var confirmation = confirm('确定要重置数据吗？')
  if(confirmation == true){
    alert('你表单没了')
  }
  else{
    alert('你表单还是没了')
  }
}

function submit() {
  alert('提交数据注册 注册成功返回警示框 注册失败返回原因')
}

</script>
