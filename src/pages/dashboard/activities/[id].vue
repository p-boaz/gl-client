<template>
  <Suspense>
    <DetailCard v-bind="$attrs" />
  </Suspense>
</template>

<script lang="ts">
export default defineComponent({
})
</script>

<route lang="yaml">
meta:
  layout: dashboard
</route>
