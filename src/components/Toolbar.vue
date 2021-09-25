<template>
  <nav class="p-6">
    <div class="flex items-center justify-between">
      <router-link
        class="pr-6 text-2xl font-bold text-gray-500"
        to="/"
      >
        <!-- <img src="./assets/logo.png" :width="30" class="text-ui-primary" /> -->
        Graphletter
      </router-link>
      <div class="flex justify-between flex-grow">
        <div class="flex items-center ml-6">
        </div>
        <div class="hidden space-x-6 md:flex">
          <span class="text-gray-500 text-md">
            <router-link to="/dashboard">Dashboard</router-link>
          </span>
          <span>
            <button v-if="auth0.state.isLoading" class="button" type="button">
              Loading
              <feather-loader class="ml-2" />
            </button>
            <div v-else>
              <span
                v-if="auth0.state.isAuthenticated"
                class="text-gray-500 text-md"
                type="button"
                @click="logout"
              >
                <a href="">Logout</a>
              </span>
              <div v-else class="hidden space-x-6 md:flex">
                <span class="text-gray-500 text-md">
                  <router-link to="/signup">Signup</router-link>
                </span>
                <span
                  class="text-gray-500 text-md"
                  type="button"
                  @click="login"
                >
                  <a href="">Login</a>
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, inject } from 'vue'

const auth0: any = inject('auth0')

defineProps({
  msg: String,
})

function login() {
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#loginwithredirect
  auth0.client.loginWithRedirect()
}
function logout() {
  // https://auth0.github.io/auth0-spa-js/interfaces/logoutoptions.html
  auth0.client.logout({ returnTo: window.location.origin })
}
</script>
