<template>
  <div>
    {{ data }}
  </div>
</template>
<script lang="ts">
const api = import.meta.env.VITE_DA_API_KEY

export default {
  data() {
    return {
      data: {},
    }
  },
  beforeMount() {
    this.getName()
  },
  methods: {
    async getName() {
      const res = await fetch('https://ny.barplaybook.com/api/user/')
      const data = await res.json()
      this.data = data
    },
  },
}
</script>
