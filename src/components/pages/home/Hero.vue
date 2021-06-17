<template>
  <div class="relative bg-gray-50 h-164 overflow-hidden">
    <div class="flex flex-col h-full items-center justify-center">
      <h1
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Here is my</span>
        {{ ' ' }}
        <span class="block text-indigo-600 xl:inline">TODOs</span>
      </h1>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <router-link
            to="list"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Go to List
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
