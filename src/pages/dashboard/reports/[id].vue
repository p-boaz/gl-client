<script setup lang="ts">
const item = defineProps<{ id: string }>()
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hello', { id: id }) }}
    </p>

    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <div>
      <button
        class="m-3 mt-6 text-sm btn"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.inline-flex {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>