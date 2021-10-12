
<template>
  <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
    <div class="px-6 py-4">
      <div v-if="item.dict.product" class="mb-2 text-xl font-bold text-gray-900">
        <router-link :to="`/dashboard/activities/${item.session}`" class="font-medium text-indigo-600 hover:text-indigo-500">
          {{ item.dict.product }}
        </router-link>
      </div>
      <p class="text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-if="item.dict.transfer_details"
        class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
      ><ant-design:exclamation-circle-outlined class="inline-block text-red-600" />
        {{ item.dict.transfer_details.exporting_country.name }}
        <ant-design:arrow-right-outlined class="inline-block" />
        {{ item.dict.transfer_details.importing_country.name }}
      </span>
      <div
        v-for="category in item.dict.data_types.elements"
        :key="category"
      >
        <div
          v-for="key in category.details.elements"
          :key="key"
        >
          <span
            v-if="key.name === 'Medical and Health'"
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          ><ant-design:exclamation-circle-outlined
             class="inline-block text-blue-600"
           />
            {{ key.name }} Data
          </span>
          <span
            v-if="key.name === 'Credit'"
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          ><ant-design:exclamation-circle-outlined
             class="inline-block text-blue-600"
           />
            {{ key.name }} Data
          </span>
          <span
            v-if="key.name === 'Criminal'"
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          ><ant-design:exclamation-circle-outlined
             class="inline-block text-blue-600"
           />
            {{ key.name }} Data
          </span>
          <span
            v-else
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            {{ key.name }} Data
          </span>
        </div>
      </div>
      <div
        v-for="category in item.dict.data_types.elements"
        :key="category"
      >
        <div
          v-for="key in category.details.elements"
          :key="key"
        >
          <span
            v-if="key.dpia_factors"
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          ><ant-design:exclamation-circle-outlined
            class="inline-block text-blue-600"
          />
            DPIA required
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'IntCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ['item.filename'],

  setup(props, { emit }) {
    const filename = computed({
      get: () => props.item.filename,
      set: value => emit('item.filename', value),
    })

    return {
      filename,
    }
  },
})
</script>
