<template>
  <div
    class="grid gap-4 grid-cols-3"
  >
    <IntCard v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
