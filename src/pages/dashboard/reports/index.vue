<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">
      Data Processing
    </h2>

    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700">
        Home
      </router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Dashboard</span>
    </div>
  </div>

  <div class="gap-4 px-4 mt-8">
    <h2 class="mb-8 text-4xl font-bold text-center capitalize">
      Business Function: <span class="text-green-700">{{ tag }}</span>
    </h2>
    <IntFilter v-model="tag" :fetch="fetchItems" />
    <IntList v-if="!loading && !error" :items="items" />
    <!-- Start of loading animation -->
    <div v-if="loading" class="mt-40">
      <p class="text-6xl font-bold text-center text-gray-500 animate-pulse">
        Loading...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
const api = import.meta.env.VITE_DA_API_KEY

export default {
  data() {
    return {
      tag: 'Sales',
      items: [],
      loading: false,
      error: null,
    }
  },
  methods: {
    async fetchItems() {
      try {
        this.error = null
        this.loading = true
        const url = `https://ny.barplaybook.com/api/interviews?key=${api}&tag=${this.tag}&include_dictionary=1`
        const response = await axios.get(url)
        const results = response.data.items
        this.items = results.map((item: { session: any; title: any; email: any; tags: any; filename: any; published_date: any; dict: any }) => ({
          session: item.session,
          title: item.title,
          email: item.email,
          tags: item.tags,
          filename: item.filename,
          published_date: item.published_date,
          dict: item.dict,
        }))
      }
      catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: 'Server Response',
            message: err.message,
          }
        }
        else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: 'Unable to Reach Server',
            message: err.message,
          }
        }
        else {
          // There's probably an error in your code
          this.error = {
            title: 'Application Error',
            message: err.message,
          }
        }
      }
      this.loading = false
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
