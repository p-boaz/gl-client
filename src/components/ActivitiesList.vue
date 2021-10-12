<template>
  <div class="bg-white border rounded-lg shadow sm:col-span-3">
    <div class="flex items-center justify-between px-4 py-2 mb-2 text-gray-600 border-b-2">
      <h3 class="tracking-wider">
        Latest processing activites
      </h3>
      <router-link :to="`/activities`">
        <button class="px-4 py-2 text-xs bg-gray-200 border rounded-sm hover:bg-gray-300">
          View All
        </button>
      </router-link>
    </div>
    <div class="px-4">
      <table class="min-w-full divide-y divide-gray-200 table-fixed">
        <thead>
          <tr>
            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Product
            </th>

            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Jurisdiction
            </th>

            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Last Updated
            </th>

            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Status
            </th>

            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="text-sm text-gray-500 divide-y divide-gray-200">
          <tr v-for="key in activities.items" :key="key">
            <td class="py-4 whitespace-nowrap">
              {{ key.dict.product }}
            </td>
            <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
              {{ key.dict.biz_function }}
            </td>
            <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
              {{ key.modtime }}
            </td>
            <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
              <span class="px-2 py-1 text-xs text-white rounded" :class="key.dict.labelClass">{{ key.dict.status }}</span>
            </td>
            <td class="py-4 text-sm text-blue-600 whitespace-nowrap">
              <router-link :to="`/dashboard/activities/${key.session}`" class="font-medium text-indigo-600 hover:text-indigo-500">
                View Detail
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex items-center justify-between py-2 border-t border-gray-200">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-500">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">5</span>
              of
              <span class="font-medium">42</span>
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                class="relative inline-flex items-center px-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-l-md hover:bg-gray-50"
              >
                <span class="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
              <a
                href="#"
                aria-current="page"
                class="relative z-10 inline-flex items-center px-4 py-1 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50"
              >
                1
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-1 text-sm font-medium text-gray-500 border border-gray-300 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                class="relative items-center hidden px-4 py-1 text-sm font-medium text-gray-500 border border-gray-300 hover:bg-gray-50 md:inline-flex"
              >
                3
              </a>
              <span
                class="relative inline-flex items-center px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 "
              >
                ...
              </span>
              <a
                href="#"
                class="relative items-center hidden px-4 py-1 text-sm font-medium text-gray-500 border border-gray-300 hover:bg-gray-50 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-1 text-sm font-medium text-gray-500 border border-gray-300 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-1 text-sm font-medium text-gray-500 border border-gray-300 hover:bg-gray-50"
              >
                10
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 border border-gray-300 rounded-r-md hover:bg-gray-50"
              >
                <span class="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import getActivities from '~/modules/activities'

export default defineComponent({
  name: 'ActivitiesList',
  props: {
    msg: String,
  },
  async setup() {
    const { activities } = await getActivities()

    return {
      activities,
    }
  },
})
</script>
