<template>
  <Suspense>
    <DetailCard v-bind="$attrs" />
  </Suspense>
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
