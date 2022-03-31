<template>
 <div class="relative min-h-screen flex">
      <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative" style="background-image: url(img.jpg)">
              <div class="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                    <div class="w-full max-w-md z-10">
                        <div class="sm:text-4xl font-bold leading-tight mb-6">
                          欢迎光临
                        </div>
                        <div class="sm:text-xl text-gray-200 font-normal">
                          欢迎来到PDD和yingyi的即时通讯程序,您能够在里面感受到优质的界面设计,感受到良好的单聊群聊氛围,感受科技带给我们的变革,体会http和ws对通讯的技巧...
                        </div>
                    </div>
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div class="max-w-md w-full mx-auto space-y-8">
                        <div class="text-center">
                            <h2 class="mt-6 text-3xl font-bold text-gray-900">欢迎回来</h2>
                        </div>
                        <div class="object-center sm:mt-8">
                            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
                        </div>
                        <div class="mt-8 space-y-6">
                            <input type="hidden" name="remember" value="true" />
                            <div class="rounded-md shadow-sm">
                                <div class="py-2 font">
                                    <label for="account">账号:</label>
                                    <input id="account" name="account" type="account" autocomplete="name" required class="inputFrame rounded-t-md  sm:text-xl" placeholder="请输入账号">
                                  </div>
                                  <div class="py-2 font">
                                    <label for="passwd">密码:</label>
                                    <input id="passwd" name="passwd" type="password" autocomplete="current-password" required class="inputFrame rounded-b-md  sm:text-xl" placeholder="请输入密码">
                                  </div>
                                </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded "/>
                                    <label for="remember_me" class="ml-2 block text-sm text-gray-900" >
                                      记住我
                                    </label>
                                </div>
                                <div class="text-sm">
                                    <a href="#" class="text-indigo-400 hover:text-blue-500">
                                      忘记密码？
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button @click="submit" class="btn group sm:text-2xl">
                                    登录
                                </button>
                            </div>
                            <p class="items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>还没有账号？</span>
                                <a href="https://www.dowebok.com/7948.html" target="_blank" class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                                    立即注册
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
.font{
  color:hsla(210, 100%, 60%, 0.8);
}
.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
}
.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}
.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}
.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}
.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}
.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}
.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}
.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

</style>