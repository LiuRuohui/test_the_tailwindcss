<template>
<br>
  <button class="bg-red-500 hover:bg-red-700 ..." @click="Register">Register</button>
  <br><br>
  <button class="bg-sky-600 hover:bg-sky-700 ...">
  Save changes
</button>
<table>
  <!-- ... -->
  <tbody>
      <!-- Use a white background for odd rows, and slate-100 for even rows -->
      <tr class="odd:bg-white even:bg-slate-100">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
</template>

<script setup>
import {reactive} from 'vue'
let person = reactive({
    name:'123',
    title:'1234',
    email:'1829504353@qq.com'
})
function Register(){
    alert('welcome to Register')
}
</script>