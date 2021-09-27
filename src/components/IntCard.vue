<template>
  <div class="w-full px-4 pt-16">
    <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
      <h3 v-if="item.dict.product">
        {{ item.dict.product }}
      </h3>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          v-if="item.dict.data_types"
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Data Types</span>
          <akar-icons:chevron-up
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel>
          <ul
            role="list"
            class="border border-gray-200 divide-y divide-gray-200 rounded-md"
          >
            <li
              v-for="(value) in item.dict.data_types.elements"
              :key="value"
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex items-center flex-1 w-0">
                <span class="flex-1 w-0 ml-2 truncate">
                  {{ value }} Data
                </span>
              </div>
              <div class="flex-shrink-0 ml-4">
                <router-link :to="`/dashboard/reports/${item.session}`" class="font-medium text-indigo-600 hover:text-indigo-500">
                  View
                </router-link>
              </div>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }" as="div" class="mt-2">
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Data Points</span>
          <akar-icons:chevron-up
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <ul class="list-disc mx-4">
            <li
              v-for="element in item.dict.data_types.elements"
              :key="element"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
            >
              <!-- {{ element.details.elements }} -->
              <ul>
                <li v-for="key of element.details.elements" :key="key">
                  {{ key.name }}
                </li>
              </ul>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }" as="div" class="mt-2">
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Data Subjects</span>
          <akar-icons:chevron-up
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <ul class="list-disc mx-4">
            <li
              v-for="element in item.dict.data_types.elements"
              :key="element"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
            >
              <!-- {{ element.details.elements }} -->
              <ul>
                <li v-for="key of element.details.elements" :key="key">
                  {{ key.data_subjects }}
                </li>
              </ul>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-if="item.dict.transfer_details" v-slot="{ open }" as="div" class="mt-2">
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Transfer Details</span>
          <akar-icons:chevron-up
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          {{ item.dict.transfer_details.exporting_country.name }}
          <ant-design:arrow-right-outlined class="inline-block" />
          {{ item.dict.transfer_details.importing_country.name }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>
