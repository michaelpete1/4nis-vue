<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    question: "How do I buy items on 4NIS?",
    answer: "Browse through the shop, add items to cart, and follow the checkout process.",
  },
  {
    question: "Can I sell items on 4NIS?",
    answer: "Yes, sign up and click on 'Sell' in your dashboard to list your items.",
  },
  {
    question: "How can I contact support?",
    answer: "Use the Contact page or email us at support@4nis.com.",
  },
];

const activeIndex = ref<number | null>(null);

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="max-w-4xl mx-auto py-16 px-4 font-['Roboto']">
    <h1 class="text-4xl font-bold mb-10 text-center text-[#2c7a7b] font-['Montserrat'] drop-shadow">
      Frequently Asked Questions
    </h1>
    <div class="space-y-5">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        @click="toggleFaq(index)"
        class="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ease-in-out rounded-2xl overflow-hidden"
      >
        <div class="p-6 flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">
            {{ faq.question }}
          </h2>
          <span
            class="text-[#2c7a7b] text-2xl transition-transform duration-300"
            :class="activeIndex === index ? 'rotate-45' : ''"
          >
            +
          </span>
        </div>
        <transition name="fade">
          <p
            v-if="activeIndex === index"
            class="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
          >
            {{ faq.answer }}
          </p>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f9fafb;
}

/* Fade toggle animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
