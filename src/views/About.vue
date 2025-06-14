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

      <!-- Animated Quote Bar -->
      <div class="mt-12 bg-gray-700 py-6 px-4 rounded-lg text-center animate-fade-in-up">
        <p class="text-lg text-white font-medium animate-fade-text">
          {{ currentMessage }}
        </p>
      </div>
    </div>
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
</style>
