<template>
  <aside class="hidden w-64 bg-gray-800 sm:block">
    <div class="py-3 mb-8 tracking-widest text-center bg-gray-900 border-b-2 border-gray-800">
      <router-link to="/" class="text-white">
        Graphletter
      </router-link>
    </div>

    <nav class="text-sm text-gray-300">
      <ul class="flex flex-col">
        <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
          Section
        </li>

        <router-link v-slot="{ isExactActive, href, navigate }" to="/dashboard" custom>
          <li class="px-4 cursor-pointer" :class="[isExactActive ? 'bg-gray-500 text-gray-800' : 'hover:bg-gray-700']">
            <a class="flex items-center py-3" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
          </li>
        </router-link>

        <li>
          <Disclosure v-slot="{ open }" :default-open="isUserManagementActive">
            <DisclosureButton
              class="flex items-center w-full px-4 py-3 hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              User Management
              <span class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="open ? 'transform rotate-90' : ''"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <li>
                  <Disclosure v-slot="{ open }" :default-open="isUserActive">
                    <DisclosureButton
                      class="flex items-center w-full py-3 pl-8 pr-4 hover:bg-gray-700"
                      :class="open ? 'bg-gray-700' : ''"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      Users
                      <span class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          :class="open ? 'transform rotate-90' : ''"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel>
                      <ul>
                        <router-link v-slot="{ isExactActive, href, navigate }" to="/dashboard/users" custom>
                          <li
                            class="pl-12"
                            :class="[isExactActive ? 'bg-gray-500 text-gray-800' : 'hover:bg-gray-700']"
                          >
                            <a class="flex items-center py-3" :href="href" @click="navigate">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                              User List
                            </a>
                          </li>
                        </router-link>
                        <li class="pl-12 hover:bg-gray-700">
                          <a href="#" class="flex items-center py-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            User Detail
                          </a>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
                <li class="px-8 hover:bg-gray-700">
                  <router-link to="/dashboard/roles" class="flex items-center py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Roles
                  </router-link>
                </li>
                <li class="px-8 hover:bg-gray-700">
                  <a href="#" class="flex items-center py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Permissions
                  </a>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <li class="px-4 hover:bg-gray-700">
          <router-link to="/dashboard/activities" class="flex items-center py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            Processing Activities
          </router-link>
        </li>

        <li class="px-4 py-2 mt-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
          Apps
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <a href="#" class="flex items-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Messages
            <span class="px-2 py-1 ml-auto text-xs bg-gray-500 rounded-sm">16</span>
          </a>
        </li>

        <li class="px-4 py-2 mt-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
          UI Elements
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'card' }" class="flex items-center py-2">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor"
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor"
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor"
              />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor"
              />
            </svg>
            Card
          </router-link>
        </li>
        <li class="px-4 py-2 mt-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
          <TempUrlButton />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import TempUrlButton from './TempUrlButton.vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TempUrlButton,
  },

  setup() {
    const route = useRoute()

    const isUserManagementActive = computed(() => {
      const names = ['user-list', 'user-detail', 'roles', 'permissions']

      return names.includes(route.name)
    })

    const isUserActive = computed(() => {
      const names = ['user-list', 'user-detail']

      return names.includes(route.name)
    })
    return {
      route,
      isUserManagementActive,
      isUserActive,
    }
  },
}
</script>
