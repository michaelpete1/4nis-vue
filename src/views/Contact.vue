<template>
  <div class="bg-gray-900 text-white py-10 pt-24 min-h-screen"> 
   
    <div class="text-center pt-8 animate-fade-in">
      <h1 class="text-3xl font-bold">Contact Me</h1>
    </div>

    <!-- Logo moved lower -->
    <div class="flex items-center px-5 mt-6 animate-fade-in-up">
      <img
        src="/4nis logo.jpg"
        alt="Company Logo"
        class="w-20 h-20 rounded-full object-cover shadow-lg"
      />
    </div>

    <div class="max-w-5xl mx-auto px-5 py-10 flex-grow animate-fade-in-up">
      <!-- Introduction Text -->
      <p class="text-lg text-gray-300 mb-6 text-center">
        If you have any questions or want to reach out, feel free to contact me through the options below.
      </p>

      <!-- Contact Options -->
      <div class="space-y-12">
        <!-- WhatsApp Section -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">WhatsApp</h3>
          <p class="text-lg text-gray-300 mb-4">
            Click the number below to start a conversation with me on WhatsApp.
          </p>
          <a
            href="https://wa.me/2347062438815"
            target="_blank"
            class="text-blue-400 hover:underline text-lg transition-transform hover:scale-105"
          >
            +234 706 243 8815
          </a>
        </div>

        <!-- Email Section -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">Email</h3>
          <p class="text-lg text-gray-300 mb-4">
            You can also reach me via email by clicking below.
          </p>
          <a
            href="mailto:michaelpet40@gmail.com"
            class="text-blue-400 hover:underline text-lg transition-transform hover:scale-105"
          >
            michaelpet40@gmail.com
          </a>
        </div>

        <!-- Social Media Section -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">Social Media</h3>
          <p class="text-lg text-gray-300 mb-4">
            You can also follow me on my social media platforms for updates and news.
          </p>
          <div class="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              class="text-blue-400 hover:text-blue-600 transition-transform hover:scale-125"
            >
              <Facebook :size="28" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              class="text-blue-400 hover:text-blue-600 transition-transform hover:scale-125"
            >
              <Twitter :size="28" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              class="text-blue-400 hover:text-pink-500 transition-transform hover:scale-125"
            >
              <Instagram :size="28" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-center py-4 mt-10">
      <p class="text-gray-300 text-sm">© 2025 4NIS Marketplace</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram } from 'lucide-vue-next';
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
</style>
