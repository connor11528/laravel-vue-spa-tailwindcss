<template>
    <div id="login-page w-full">
        <div class="h-screen">
            <form class="flex flex-col jestify-center items-center rounded">
                <div class="md:w-1/3 w-10/12 mt-56">
                    <h1 class="text-xl">Apply here to join the private employer beta</h1>
                    <p>Easily access hundreds of qualified candidates looking for new opportunities in the Bay Area</p>
                    <input class="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                           type="text"
                           placeholder="youremail@company.com"
                           aria-label="Full name">
                    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
