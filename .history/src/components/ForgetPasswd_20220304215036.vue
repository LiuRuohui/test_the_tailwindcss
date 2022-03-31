<template>
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8c">
    <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-600">忘记密码</h2>
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
      </div>
      <div class="sm:text-xl sm:mt-8">
        <input @click="submit" type="submit" class="btn group sm:text-xl">
      </div>
    </form>
    </div>
</div>
</template>

<script setup>

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
