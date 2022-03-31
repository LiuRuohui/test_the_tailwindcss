<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Try from "./components/try.vue"
import HelloWorldVue from "./components/HelloWorld.vue"
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <HelloWorldVue></HelloWorldVue>
  <Try></Try>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aliceblue;
}
</style>
