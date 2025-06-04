<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const isHovered = ref(false);
</script>

<template>
  <nav
    class="fixed w-full z-50 shadow-lg p-4 transition-opacity duration-300 animate-slide-down"
    :class="isHovered ? 'bg-gray-900 opacity-100' : 'bg-gray-900/50 opacity-60'"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Animated Logo -->
      <a
        href="/"
        class="text-3xl font-extrabold text-white tracking-wide animate-pulse-once hover:animate-bounce"
      >
        <span class="text-teal-400">4</span>NIS
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-white text-lg">
        <li><a href="/About" class="hover:text-red-400 transition-colors">About</a></li>
        <li><a href="/Contact" class="hover:text-red-400 transition-colors">Contact</a></li>
        <li><a href="/Faq" class="hover:text-red-400 transition-colors">Faq</a></li>
      </ul>

      <!-- Hamburger Icon -->
      <button
        @click="isOpen = !isOpen"
        class="text-white focus:outline-none md:hidden transition-transform duration-300"
        :class="isOpen ? 'rotate-90' : 'rotate-0'"
      >
        <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
        <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      </button>
    </div>

    <!-- Mobile Sidebar Menu -->
    <div
      class="fixed top-0 right-0 h-[85vh] w-56 bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-l-lg transition-transform duration-300 md:hidden z-50"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="isOpen = false" class="absolute top-4 right-4 text-white">
        <XMarkIcon class="w-8 h-8" />
      </button>
      <ul class="mt-16 space-y-4 text-lg text-white text-center">
        <li><a href="/About" class="block py-2 hover:text-red-400">About</a></li>
        <li><a href="/Contact" class="block py-2 hover:text-red-400">Contact</a></li>
        <li><a href="/Faq" class="block py-2 hover:text-red-400">Faq</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-down {
  animation: slideDown 0.8s ease-out;
}

@keyframes pulseOnce {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}
.animate-pulse-once {
  animation: pulseOnce 1s ease-out 1;
}
</style>
