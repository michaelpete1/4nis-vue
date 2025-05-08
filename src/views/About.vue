<template>
  <div class="bg-gray-900 text-white py-10 pt-24 min-h-screen"> 
    <!-- Header -->
    <div class="text-center mb-6 animate-fade-in">
      <h2 class="text-3xl font-bold">About Us</h2>
    </div>

    <!-- Logo Section -->
    <div class="flex items-center px-5 mt-6 animate-fade-in-up">
      <img
        src="/4nis logo.jpg"
        alt="4NIS Marketplace Logo"
        class="w-20 h-20 rounded-full object-cover shadow-lg"
        loading="lazy"
      />
    </div>

    <!-- About Content -->
    <div class="max-w-5xl mx-auto p-5 animate-fade-in-up">
      <p class="text-lg text-gray-300 mb-6">
        Welcome to our marketplace, where we offer a wide variety of products ranging from electronics to fashion and home essentials.
        Our mission is to provide high-quality products at affordable prices, ensuring a seamless shopping experience for all our customers.
      </p>

      <p class="text-lg text-gray-300 mb-6">
        Our team is dedicated to curating the best selection of items, sourced from trusted manufacturers and suppliers.
        Whether you're looking for the latest tech gadgets or stylish clothing, we've got you covered.
      </p>

      <!-- Image with animated text overlay and bubble click effect -->
      <div
        class="relative w-full mt-10 rounded-xl overflow-hidden shadow-xl group transform transition duration-500 hover:scale-105 animate-fade-in-up"
        @click="createBubble"
        ref="imageContainer"
      >
        <img
          src="/portbcgnd2.jpg"
          alt="Team working together"
          class="w-full h-auto object-cover transform transition duration-700 ease-in-out hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
          <p
            class="text-xl text-white font-semibold text-center animate-fade-text transition-opacity duration-1000 ease-in-out"
            aria-live="polite"
          >
            {{ currentMessage }}
          </p>
        </div>
        <!-- Bubble container -->
        <span
          v-for="(bubble, index) in bubbles"
          :key="index"
          class="absolute w-6 h-6 bg-white opacity-20 rounded-full pointer-events-none bubble"
          :style="{
            top: bubble.y + 'px',
            left: bubble.x + 'px'
          }"
        />
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-center py-4 mt-10">
      <p class="text-gray-300 text-sm">© 2025 4NIS Marketplace</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const messages = [
  'We deliver quality products.',
  'Customer satisfaction is our priority.',
  'Fast and reliable service.',
  'Shop with confidence at 4NIS.',
]

const currentMessage = ref(messages[0])
let index = 0
let intervalId: number

onMounted(() => {
  intervalId = window.setInterval(() => {
    index = (index + 1) % messages.length
    currentMessage.value = messages[index]
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

// Bubble animation state
const bubbles = ref<{ x: number; y: number }[]>([])
const imageContainer = ref<HTMLElement | null>(null)

function createBubble(e: MouseEvent) {
  const rect = imageContainer.value?.getBoundingClientRect()
  if (!rect) return

  const x = e.clientX - rect.left - 12 // Center bubble
  const y = e.clientY - rect.top - 12

  bubbles.value.push({ x, y })

  // Remove bubble after animation
  setTimeout(() => {
    bubbles.value.shift()
  }, 600)
}
</script>

<style scoped>
@keyframes fadeText {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
}
.animate-fade-text {
  animation: fadeText 3s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

/* Bubble animation */
@keyframes bubble-pop {
  0% {
    transform: scale(0.5);
    opacity: 0.3;
  }
  50% {
    transform: scale(3);
    opacity: 0.15;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
}
.bubble {
  animation: bubble-pop 0.6s ease-out forwards;
}
</style>
