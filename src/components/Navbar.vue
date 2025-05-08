<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const isHovered = ref(false);
</script>

<template>
  <nav
    class="fixed w-full z-50 shadow-lg p-4 transition-opacity duration-300"
    :class="isHovered ? 'bg-gray-900 opacity-100' : 'bg-gray-900/50 opacity-60'"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-white">4NIS</a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-white text-lg">
        <li><a href="/About" class="hover:text-red-400">About</a></li>
        <li><a href="/contact" class="hover:text-red-400">Contact</a></li>
        <li><a href="/settings" class="hover:text-red-400">Settings</a></li>
      </ul>

      <!-- Hamburger (mobile only) -->
      <button
        @click="isOpen = !isOpen"
        class="text-white focus:outline-none md:hidden"
      >
        <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
        <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      </button>
    </div>

    <!-- Mobile Sidebar Menu -->
    <div
      class="fixed top-0 right-0 h-[85vh] w-56 bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-lg transition-transform duration-300 md:hidden"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="isOpen = false" class="absolute top-4 right-4 text-white">
        <XMarkIcon class="w-8 h-8" />
      </button>
      <ul class="mt-16 space-y-4 text-lg text-white text-center">
        <li><a href="/About" class="block py-2">About</a></li>
        <li><a href="/contact" class="block py-2">Contact</a></li>
        <li><a href="/settings" class="block py-2">Settings</a></li>
      </ul>
    </div>
  </nav>
</template>
