<template>
  <header class="flex justify-between px-4 bg-white border-b-2 sm:justify-end sm:px-6">
    <button class="sm:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <Menu as="div" class="relative">
      <MenuButton class="flex items-center px-2 py-3 space-x-2 text-sm hover:bg-gray-200 focus:outline-none">
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span>Username</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 w-48 py-1 origin-top-right bg-white divide-y divide-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']"
              >Your Profile</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
            </MenuItem>
          </div>
          <MenuItem v-slot="{ active }">
            <router-link
              to="/"
              :class="[active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              Sign out
            </router-link>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script lang="ts">

export default {
  name: 'TheHeader',
}
</script>
