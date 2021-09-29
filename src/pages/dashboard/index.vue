<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">
      Dashboard
    </h2>

    <div class="flex items-center space-x-1 text-xs">
      <a href="#" class="font-bold text-indigo-700">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Dashboard</span>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
      <div class="p-4 bg-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">
          Total Member
        </h3>
        <p class="text-3xl">
          12,768
        </p>
      </div>
    </div>

    <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
      <div class="p-4 bg-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">
          Total Post
        </h3>
        <p class="text-3xl">
          39,265
        </p>
      </div>
    </div>

    <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
      <div class="p-4 bg-indigo-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">
          Total Comment
        </h3>
        <p class="text-3xl">
          142,334
        </p>
      </div>
    </div>

    <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
      <div class="p-4 bg-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">
          Server Load
        </h3>
        <p class="text-3xl">
          34.12%
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
    <div class="px-4 py-2 overflow-hidden bg-white border rounded-md shadow">
      <h3 class="mb-4 text-xl text-gray-600">
        Page View
      </h3>
    </div>

    <div class="px-4 py-2 overflow-hidden bg-white border rounded-md shadow">
      <h3 class="mb-4 text-xl text-gray-600">
        Sessions by device
      </h3>
    </div>

    <div class="grid grid-rows-2 gap-4">
      <div class="px-4 py-2 bg-white border rounded-md shadow">
        <h3 class="mb-2 text-xl text-gray-600">
          Popular Post
        </h3>

        <div class="flex flex-col">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden border-0">
              <table class="min-w-full divide-y divide-gray-200 table-auto">
                <thead>
                  <tr>
                    <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Post Title
                    </th>

                    <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Views
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm text-gray-500 divide-y divide-gray-200">
                  <tr>
                    <td class="py-1">
                      Create an Admin Panel with Vue.js and Tailwind CSS
                    </td>
                    <td class="py-1 text-sm text-gray-500">
                      1,672
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      How To Center a Div
                    </td>
                    <td class="py-1 text-sm text-gray-500">
                      1,423
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      Let's Star This Project
                    </td>
                    <td class="py-1 text-sm text-gray-500">
                      926
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 bg-white border rounded-md shadow">
        <h3 class="mb-2 text-xl text-gray-600">
          Top Contributor
        </h3>

        <div class="flex flex-col">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden border-0">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Name
                    </th>

                    <th scope="col" class="py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                      Commit
                    </th>

                    <th scope="col" class="py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                      Issue
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm text-gray-500 divide-y divide-gray-200">
                  <tr>
                    <td class="py-1 whitespace-nowrap">
                      Seto Kuslaksono
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      41
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      12
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1 whitespace-nowrap">
                      Some Dude
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      22
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      15
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1 whitespace-nowrap">
                      It Could Be You
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      12
                    </td>
                    <td class="py-1 text-sm text-right text-gray-500 whitespace-nowrap">
                      4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-5 sm:px-8">
    <TabGroup>
      <div class="bg-white border rounded-lg shadow sm:col-span-2">
        <div
          class="flex flex-col items-center px-4 py-2 mb-2 space-y-2 text-gray-600 border-b-2 sm:flex-row sm:justify-between"
        >
          <h3 class="tracking-wider">
            Top Author
          </h3>
          <TabList class="flex space-x-1">
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Today
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Yesterday
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Last 7 Days
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanels class="px-4 py-2">
          <TabPanel v-for="topAuthor in topAuthors" :key="topAuthor">
            <table class="min-w-full text-gray-500">
              <tbody>
                <tr v-for="author in topAuthor" :key="author.username">
                  <td class="flex items-center py-2">
                    <img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" :src="author.avatar" alt="" />
                    <div class="px-4">
                      <div>{{ author.name }}</div>
                      <div class="text-sm font-bold">
                        <a href="#">@{{ author.username }}</a>
                      </div>
                    </div>
                  </td>
                  <td class="py-2 text-right">
                    <div class="text-2xl">
                      {{ author.postViews }}
                    </div>
                    <div class="text-sm">
                      Post Views
                    </div>
                  </td>
                  <td class="hidden py-2 space-x-2 text-right sm:table-cell">
                    <button class="p-1 text-white bg-green-500 rounded-md hover:bg-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button class="p-1 text-white bg-red-500 rounded-md hover:bg-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>

    <div class="bg-white border rounded-lg shadow sm:col-span-3">
      <div class="flex items-center justify-between px-4 py-2 mb-2 text-gray-600 border-b-2">
        <h3 class="tracking-wider">
          Recent Sales
        </h3>
        <button class="px-4 py-2 text-xs bg-gray-200 border rounded-sm hover:bg-gray-300">
          View All
        </button>
      </div>
      <div class="px-4">
        <table class="min-w-full divide-y divide-gray-200 table-fixed">
          <thead>
            <tr>
              <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Order ID
              </th>

              <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Item
              </th>

              <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Amount
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
            <tr v-for="sales in recentSales" :key="sales.orderId">
              <td class="py-4 whitespace-nowrap">
                {{ sales.orderId }}
              </td>
              <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
                {{ sales.item }}
              </td>
              <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
                ${{ sales.amount }}
              </td>
              <td class="py-4 text-sm text-gray-500 whitespace-nowrap">
                <span class="px-2 py-1 text-xs text-white rounded" :class="sales.labelClass">{{ sales.status }}</span>
              </td>
              <td class="py-4 text-sm text-blue-600 whitespace-nowrap">
                <a href="#">View Detail</a>
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
  </div>
</template>

<script lang="ts">
import topAuthors from '~/topAuthors.json'
import recentSales from '~/recentSales.json'
import TheSidebar from '~/components/TheSidebar.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },

  setup() {
    const pageViewOptions = {
      chart: {
        id: 'pageview-chart',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
      },
    }

    const pageViewSeries = [
      {
        name: 'Page view',
        data: [3087, 4403, 3456, 2864, 4956, 6023, 7063],
      },
    ]

    const sessionsOptions = {
      chart: {
        id: 'sessions-chart',
      },
      labels: ['Desktop', 'Mobile', 'Tablet'],
      legend: {
        position: 'bottom',
      },
    }

    const sessionsSeries = [70.9, 27.2, 1.9]

    return {
      pageViewOptions,
      pageViewSeries,
      sessionsOptions,
      sessionsSeries,
      topAuthors,
      recentSales,
    }
  },
}
</script>

<route lang="yaml">
meta:
  layout: dashboard
</route>
