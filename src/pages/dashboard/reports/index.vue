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
    <IntList :activity="activity" />
  </div>
</template>

<script lang="ts">
import IntList from '~/components/IntList.vue'
import getActivity from '~/modules/activities'

export default defineComponent({
  name: 'Activities',
  components: { IntList },
  async setup() {
    const { activity } = await getActivity()

    return { activity }
  },
})
</script>

<style lang="postcss" scoped>
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
