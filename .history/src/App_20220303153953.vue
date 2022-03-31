<script setup>
import WelcomingPage from "./components/WelcomingPage.vue"
import RegisterPage from "./components/RegisterPage.vue"
import LoginPage from "./components/LoginPage.vue";
</script>

<template>
<!--<WelcomingPage class="bg-blue-50 page"></WelcomingPage> -->
<RegisterPage class="bg-blue-50 page"></RegisterPage>  
<LoginPage class="bg-blue-50 page"></LoginPage>
</template>

<style>
.page{
    height: 100vh;
}
</style>
