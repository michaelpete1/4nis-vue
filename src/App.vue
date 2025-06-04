<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar is fixed, so not in normal layout flow -->
    <Navbar />

    <!-- This padding-top matches the navbar height (adjust if needed) -->
    <main class="flex-grow pt-20">
      <RouterView />
    </main>

    <!-- Footer: stays at bottom if content is short -->
    <footer class="bg-gray-800 text-center py-4">
      <p class="text-gray-300 text-sm">© 2025 4NIS Marketplace</p>
    </footer>
  </div>
</template>
