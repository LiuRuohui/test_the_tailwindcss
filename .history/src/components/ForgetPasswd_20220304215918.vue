<template>
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8c">
    <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-600">忘记密码</h2>
        </div>
        <div>
            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
        </div>
      <div class="rounded-md shadow-sm sm:text-xl">
        <div class="py-4 text-blue-800">
          <label for="email-address">邮箱</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="inputFrame rounded-t-md  sm:text-xl" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="sm:text-xl sm:mt-8">
          <button @click="sendEmail" class="btn group sm:text-xl">确认</button>
      </div>
    </div>
</div>
</template>

<script setup>
function sendEmail(){
    var name = document.getElementById("email").value;
    if(isEmail(name)){
        alert('邮箱格式不正确！请重新输入！')
    }
    var confirmation = confirm('确认忘记密码？点击确认之后系统会将密码发到您的邮箱！')
    if(confirmation == true){
        alert('请查收邮箱！')
    }
}
function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return reg.test(str)
}
</script>
