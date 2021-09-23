<template>
  <main class="flex min-h-screen">
    <TheSidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <TheHeader />

      <div class="mb-auto">
        <router-view />
      </div>

      <TheFooter />
    </div>
  </main>
</template>
