<template>
  <div>
    <a rel="noreferrer" href="{{ sessionUrl }}" target="_blank" class="bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center py-2 px-4 rounded">
      Add more data
    </a>
  </div>
</template>

<script lang="ts">
const api = import.meta.env.VITE_DA_API_KEY

export default {
  name: 'ResumeButton',
  props: {
    id: null,
  },
  data() {
    return {
      sessionUrl: null,
    }
  },
  async created() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({
        session: this.id,
        i: 'docassemble.testServer:data/questions/aaDataTypes.yml',
      }),
    }
    const response = await fetch(`https://ny.barplaybook.com/api/resume_url?key=${api}`, requestOptions)
    const data = await response.json()
    this.sessionUrl = data
  },
}
</script>
