<script setup>
import WelcomingPage from "./components/WelcomingPage.vue"
import RegisterPage from "./components/RegisterPage.vue"
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";
import ForgetPasswd from "./components/ForgetPasswd.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
<!--<WelcomingPage class="bg-blue-50 page"></WelcomingPage> 
<RegisterPage class="bg-blue-50 page"></RegisterPage>  
<LoginPage class="bg-blue-50 page"></LoginPage>  
<MainPage class="bg-blue-50 page"></MainPage>  
<ForgetPasswd class="bg-blue-50 page"></ForgetPasswd> -->
<RegisterPage class="bg-blue-50 page"></RegisterPage> 
<HelloWorld></HelloWorld>
</template>

<style>
.page{
    height: 100vh;
}
</style>
