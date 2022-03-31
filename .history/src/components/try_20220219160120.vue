<template>
<br>
  <button class="bg-red-500 hover:bg-red-700 ..." @click="Register">Register</button>
  <br><br>
  <button class="bg-sky-600 hover:bg-sky-700 ...">
  Save changes
</button>
<br>
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
<br>
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
</template>

<script setup>
function Register(){
    alert('welcome to Register')
}
</script>