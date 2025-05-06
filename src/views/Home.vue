<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <section
    class="relative flex flex-col justify-center items-center h-screen text-white bg-gradient-to-r from-gray-900 to-gray-800"
  >
    <!-- Fade-in and slide-up animation -->
    <div
      class="text-center transition-all duration-1000 ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <h1 class="text-5xl md:text-6xl font-bold animate-text">
        Welcome to <span class="text-red-500">4NIS</span>
      </h1>
      <p class="mt-4 text-lg md:text-xl text-gray-300">
        Discover amazing fashion and electronics.
      </p>
      <a
        href="/products"
        class="mt-6 inline-block bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Start Shopping
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes flicker {
  0% {
    opacity: 0.2;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

.animate-text {
  animation: flicker 2s infinite alternate ease-in-out;
}
</style>
