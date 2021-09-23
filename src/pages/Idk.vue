<template>
  <div class="container">
    <div class="buttons">
      <button @click="usingUseFetch">
        multipart using <strong>useFetch</strong>
      </button>
      <button @click="usingNativeFetch">
        multipart using <strong>native fetch</strong>
      </button>
    </div>
    <div>
      Check <strong>multipart/form-data; boundary on Content-Type request header</strong> on devtools
    </div>
    <div class="data">
      <pre v-if="useNative">
        {{ nativeData }}
      </pre>
      <pre v-else>
        {{ useFetchData }}
      </pre>
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
      "A", 
      new Blob(
        [JSON.stringify({ message: `Multipart A: ${Math.random()}`})], 
        { type: 'application/json' }
      ), 
      'test-multipart-a.json'
    )
    formData.append(
      "B", 
      new Blob(
        [JSON.stringify({ message: `Multipart B: ${Math.random()}`})], 
        { type: 'application/json' }
      ), 
      'test-multipart-b.json'
    )
    return formData
  }

  const { /*post, */execute, data } = useFetch('https://httpbin.org/post', {
    immediate: false
  }).post(buildFormData(), 'formData')
  
  const useFetchData = computed(() => {
    if (nativeData.value) {
      return ''
    } else {
      if (data.value) {
        return JSON.stringify(data.value)
      } else {
        return ''
      }
    }
  })
  
  const usingUseFetch = async() => {
    //const payload = await buildFormData()
    //console.log(post)
    nativeData.value = ''
    useNative.value = false
    try {
      //console.log(post(payload, 'formData'))
      await execute()
    } catch(e) {
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
    } catch (ignore) {
      // just ignore error
    }
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding: 1rem;
    justify-items: center;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  .data {
    width: 100%;
    overflow-x: auto;
  }
  pre {
    font-size: 0.6rem;
  }
</style>