<template>
  <div id="login-page w-full">
    <div class="h-screen">
        <form class="flex flex-col jestify-center items-center rounded">
          <div class="md:w-1/3 w-10/12 mt-56">
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-white text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
              <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2019 Employbl. All rights reserved.
        </p>
      </div>

      <p>Not part of the network yet? Please <router-link to="apply">apply here</router-link></p>
  </div>
</template>
<script>

  export default {

  }
</script>
