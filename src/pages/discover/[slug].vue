<template>
  <div class="p-2">{{ slug }}
  </div>
</template>

<script lang="ts">

export default {
  props: {
    // Receives the slug param from the route
    slug: String,
  },
};
</script>

<style lang="postcss" scoped>
</style>

<route lang="yaml">
meta:
  layout: feature
</route>