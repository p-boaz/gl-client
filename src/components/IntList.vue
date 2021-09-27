<template>
  <div
    class="grid gap-4 grid-cols-3"
  >
    <ul>
      <li v-for="activity in activities" :key="activity"></li>
    </ul>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
})
</script>
