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
        </div>
        <div class="px-3 md:w-1/2">
          <label class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" for="email">
            email
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

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { useToggle } from '@vueuse/shared'

const nativeData = ref('')
const useNative = ref(false)

const buildFormData = () => {
  const formData = new FormData()
  formData.append(
    'A',
    new Blob(
      [JSON.stringify({ message: `Multipart A: ${Math.random()}` })],
      { type: 'application/json' },
    ),
    'test-multipart-a.json',
  )
  formData.append(
    'B',
    new Blob(
      [JSON.stringify({ message: `Multipart B: ${Math.random()}` })],
      { type: 'application/json' },
    ),
    'test-multipart-b.json',
  )
  return formData
}

const { /* post, */execute, data } = useFetch('https://ny.barplaybook.com/api/user', {
  immediate: false,
}).post(buildFormData(), 'formData')

const useFetchData = computed(() => {
  if (nativeData.value) {
    return ''
  }
  else {
    if (data.value)
      return JSON.stringify(data.value)
    else
      return ''
  }
})

const usingUseFetch = async() => {
  // const payload = await buildFormData()
  // console.log(post)
  nativeData.value = ''
  useNative.value = false
  try {
    // console.log(post(payload, 'formData'))
    await execute()
  }
  catch (e) {
    // just ignore
    console.log('upps', e)
  }
}
const usingNativeFetch = async() => {
  nativeData.value = ''
  useNative.value = true
  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
  			body: buildFormData(),
    })
    nativeData.value = await response.json()
  }
  catch (ignore) {
    // just ignore error
  }
}
</script>

<route lang="yaml">
meta:
  layout: dashboard
</route>
