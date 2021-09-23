<template>
  <div class="overflow-y-scroll text-left bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3
      class="text-lg font-medium leading-6 text-gray-900">
        Title
      </h3>
        <router-link :to="`/dashboard/reports/${item.session}`">
          {{ item.session }}
        </router-link>
    </div>
    <div
    class="border-t border-gray-200"
    >
      <dl>
        <div v-if="item.dict.data_types" class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Data Type(s)
          </dt>
          <dd
          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            <ul
            role="list" 
            class="border border-gray-200 divide-y divide-gray-200 rounded-md">
              <li
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
              v-for="(value, key) in item.dict.data_types.elements"
              v-bind:key="key">
                <div class="flex items-center flex-1 w-0">
                  <span class="flex-1 w-0 ml-2 truncate">
                    {{ key }} Data
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <router-link :to="`/dashboard/reports/${item.session}`" class="font-medium text-indigo-600 hover:text-indigo-500">
                    View
                  </router-link>
                </div>
              </li>
            </ul>
          </dd>
        </div>
        <div v-if="item.dict.data_types.elements" class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Data Subjects
          </dt>
          <dd>
            <ol>
              <li
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              v-for="element in item.dict.data_types.elements"
              v-bind:key="element">
              <!-- {{ element.details.elements }} -->
                <ul>
                  <li v-for="element of element.details.elements" v-bind:key="element">{{ element.data_subjects }}</li>
                </ul>
              </li>
            </ol>
          </dd>
        </div>
        <div v-if="item.dict.data_types.elements" class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Purpose
          </dt>
          <dd>
            <ul>
              <li
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              v-for="element in item.dict.data_types.elements"
              v-bind:key="element">
              <!-- {{ element.details.elements }} -->
                <ul>
                  <li v-for="element of element.details.elements" v-bind:key="element">{{ element.purpose }}</li>
                </ul>
              </li>
            </ul>
          </dd>
        </div>
        <div v-if="item.dict.data_types.elements" class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Format
          </dt>
          <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              v-for="element in item.dict.data_types.elements"
              v-bind:key="element">
              <!-- {{ element.details.elements }} -->
          <p v-for="element of element.details.elements" v-bind:key="element">{{ element.format }}</p>
          </dd>
        </div>
        <div v-if="item.dict.transfer_details" class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Transfer Details
          </dt>
          <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>{{ item.dict.transfer_details.exporting_country.name}}
                <ant-design:arrow-right-outlined class="inline-block" /> 
                {{ item.dict.transfer_details.importing_country.name}}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>