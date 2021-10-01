<template>
  <div>
    <button
      class="btn m-3 text-sm mt-6"
    >
      {{ data }}
    </button>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
const api = import.meta.env.VITE_DA_API_KEY

export default defineComponent({
  name: 'ResumeButton',
  props: {
    id: String,
  },
  setup(props) {
    const data = ref(null)
    const loading = ref(true)
    const error = ref(null)

    function fetchData() {
      loading.value = true
      // I prefer to use fetch
      // you can use use axios as an alternative
      return fetch(`https://ny.barplaybook.com/api/resume_url?key=${api}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify ({
          session: `${props.id}`,
          i: 'docassemble.testServer:data/questions/aaDataTypes.yml',
        }),
      })
        .then((res) => {
          // a non-200 response code
          if (!res.ok) {
            // create error instance with HTTP status text
            const error = new Error(res.statusText)
            error.json = res.json()
            throw error
          }

          return res.json()
        })
        .then((json) => {
          // set the response data
          data.value = json.data
        })
        .catch((err) => {
          error.value = err
          // In case a custom JSON error response was provided
          if (err.json) {
            return err.json.then((json) => {
              // set the JSON response message
              error.value.message = json.message
            })
          }
        })
        .then(() => {
          loading.value = false
        })
    }

    onMounted(() => {
      fetchData()
    })

    return {
      data,
      loading,
      error,
    }
  },
})
</script>
