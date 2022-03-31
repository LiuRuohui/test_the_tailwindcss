<script setup>
import WelcomingPage from "./components/WelcomingPage.vue"
import RegisterPage from "./components/RegisterPage.vue"
import LoginPage from "./components/LoginPage.vue";
import ForgetPasswd from "./components/ForgetPasswd.vue";
import HelloWorld from "./components/HelloWorld.vue";
import UpdateInformation from "./components/UpdateInformation.vue";
import ShowInformation from "./components/ShowInformation.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
<WelcomingPage class="page bg-blue-50"></WelcomingPage>  
<!--<RegisterPage class="bg-blue-50 page"></RegisterPage>  
<LoginPage class="bg-blue-50 page"></LoginPage>   
<ForgetPasswd class="bg-blue-50 page"></ForgetPasswd>  
<UpdateInformation class="bg-blue-50 page"></UpdateInformation> 
<ShowInformation class="bg-blue-50 page"></ShowInformation> 
<MainPage class="bg-blue-50 page"></MainPage> -->
 
</template>

<style>
.page{
    height: 100vh;
    
}
</style>
