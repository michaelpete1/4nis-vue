<template>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col">
    <!-- Logo Section -->
    <div class="text-center mb-10 flex-grow">
      <img src="/4nis logo.jpg" alt="Company Logo" class="w-32 mx-auto" />
    </div>

    <div class="max-w-5xl mx-auto p-5 flex-grow">
      <h2 class="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <!-- Introduction Text -->
      <p class="text-lg text-gray-300 mb-6 text-center">
        If you have any questions or want to reach out, feel free to contact me through the options below.
      </p>

      <!-- Contact Options -->
      <div class="space-y-8">
        <!-- WhatsApp Section -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">WhatsApp</h3>
          <p class="text-lg text-gray-300 mb-4">
            Click the number below to start a conversation with me on WhatsApp.
          </p>
          <a
            href="https://wa.me/2347062438815"
            target="_blank"
            class="text-blue-400 hover:underline text-lg"
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
            class="text-blue-400 hover:underline text-lg"
          >
            michaelpet40@gmail.com
          </a>
        </div>

        <!-- Social Media Section with Icons -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">Social Media</h3>
          <p class="text-lg text-gray-300 mb-4">
            You can also follow me on my social media platforms for updates and news.
          </p>
          <div class="flex justify-center gap-6">
            <!-- Facebook Icon -->
            <a
              href="https://facebook.com"
              target="_blank"
              class="text-blue-400 hover:text-blue-600"
            >
              <Facebook :size="24" />
            </a>

            <!-- Twitter Icon -->
            <a
              href="https://twitter.com"
              target="_blank"
              class="text-blue-400 hover:text-blue-600"
            >
              <Twitter :size="24" />
            </a>

            <!-- Instagram Icon -->
            <a
              href="https://instagram.com"
              target="_blank"
              class="text-blue-400 hover:text-blue-600"
            >
              <Instagram :size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section (optional) -->
    <footer class="bg-gray-800 text-center py-4 mt-10">
      <p class="text-gray-300 text-sm">© 2025 4NIS Marketplace</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram } from 'lucide-vue-next'; // Importing individual icons
</script>

<style scoped>
/* Add any specific styles for the Contact page here */
</style>
