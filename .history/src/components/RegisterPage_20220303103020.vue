<template>
<div class=" btn flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8c">
    <div class="sm:max-w-xl sm:object-center sm:object-cover w-full space-y-8">
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-600">Registeration</h2>
        </div>
        <div>
            <img class="h-16 w-1/2 mx-auto" src="../assets/用户.svg" alt="这里有一张图片">
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
      <div class="rounded-md shadow-sm">
        <div class="py-4">
          <label for="email-address" class="sr-only ">Account</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Please input your account">
        </div>
        <div class="py-4">
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
        <div class="py-4">
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
        <div class="py-4">
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm sm:text-xl">
          <a href="#" class="font-medium text-indigo-800 hover:text-indigo-500"> See our functions </a>
        </div>
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block sm:text-xl text-gray-900"> Accept the privacy </label>
        </div>
      </div>

      <div class="sm:text-xl sm:mt-8">
        <button  class="group relative flex w-full justify-center py-2 border border-transparent sm:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Reset the input
        </button> <br>
        <button type="submit" class="group relative flex w-full justify-center py-2 border border-transparent sm:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          REGISTER
        </button>
      </div>
    </form>
    </div>
</div>
</template>

<script>

</script>

<style>
.btn {
    height:100vh
}
</style>