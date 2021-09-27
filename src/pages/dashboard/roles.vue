<template>
  <div id="analytics">
    <!-- breadcrumb -->
    <nav class="mb-6 text-sm font-semibold" aria-label="Breadcrumb">
      <ol class="inline-flex p-0 list-none">
        <li class="flex items-center text-blue-500">
          <router-link class="text-gray-700" to="/">
            Home
          </router-link>
          <svg
            class="w-3 h-3 mx-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </li>
        <li class="flex items-center">
          <router-link
            class="text-gray-700"
            to="/dashboard"
          >
            Dashboard
          </router-link>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->
    <div class="gap-4 px-4 mt-8">
    </div>
    <article class="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <!-- <div v-for="items in data" :key="items">
        <p>
          {{ items }}
        </p>
      </div> -->

      <p>
        {{ nested.data.value }}
      </p>
      <!-- ... -->
    </article>
  </div>
</template>

<script lang="ts">
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
const api = import.meta.env.VITE_DA_API_KEY

export default {
  async setup() {
    const url = ref(`https://ny.barplaybook.com/api/interviews?key=${api}&include_dictionary=1`)
    const { data } = useFetch(url, { method: 'GET' }, { refetch: true }).json()
    return {
      data,

      nested: {
        data,
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
