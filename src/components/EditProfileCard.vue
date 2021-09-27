<template>
  <div class="flex flex-col content-center justify-center h-screen">
    <div class="flex flex-col self-center px-8 pt-6 pb-8 my-2 mb-4 bg-white rounded shadow-md max-w-7xl">
      <div class="mb-6 md:flex">
        <div class="px-3 mb-6 md:w-1/2 md:mb-0">
          <label class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" for="name">
            Name
          </label>
          <input
            id="name"
            class="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red"
            required
            type="text"
          >
          {{ profile.first_name }}
        </div>
        <div class="px-3 md:w-1/2">
          <label class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" for="email">
            Email
          </label>
          <input
            id="email"
            class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
            required
            type="email"
          >
        </div>
      </div>
      <div class="mb-6 md:flex">
        <div class="px-3 mb-6 md:w-1/2 md:mb-0">
          <label class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" for="address">
            Address
          </label>
          <input
            id="address"
            class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
            required
            type="text"
          >
        </div>
        <div class="px-3 md:w-1/2">
          <label class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" for="city">
            City
          </label>
          <input
            id="city"
            class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
            required
            type="text"
          >
        </div>
      </div>
      <div class="flex justify-end mb-2 md:flex">
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Update Info
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import getProfile from '~/modules/profile'

export default defineComponent({
  name: 'ProfilePage',
  props: {
    msg: String,
  },
  async setup() {
    const { profile } = await getProfile()

    return { profile }
  },
})
</script>
