<template>
  <div class="bg-gray-900 text-white py-10">
    <div class="max-w-5xl mx-auto p-5">
      <h2 class="text-3xl font-bold text-center mb-6">Our Products</h2>
      <Swiper
        :modules="[Pagination, Navigation]"
        :pagination="{ clickable: true }"
        :navigation="true"
        :slidesPerView="2"
        spaceBetween="20"
        class="w-full h-[400px]"
      >
        <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="flex justify-center items-center"
        >
          <div
            class="bg-gray-800 p-5 rounded-lg shadow-lg relative"
            @click="createBubble($event, product.id)"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-64 h-64 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold text-center">{{ product.name }}</h3>
          </div>

          <!-- Bubble effects -->
          <div v-for="(bubble, index) in bubbles[product.id] || []" :key="index"
            :style="{
              position: 'absolute',
              top: `${bubble.y}px`,
              left: `${bubble.x}px`,
              width: '24px',
              height: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              animation: 'bubble 0.6s ease-out'
            }"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Laptops & Accessories -->
    <div class="max-w-5xl mx-auto p-5 mt-10 text-center bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-4 text-red-400">Laptops & Accessories</h2>
      <p class="text-lg text-gray-300">
        Whether you're a student, professional, or gamer, having a powerful and reliable laptop is essential.
        We offer the latest laptops, accessories, and gadgets to enhance your productivity and entertainment.
        Browse our collection to find high-performance laptops, durable bags, cooling pads, and external storage devices.
      </p>
    </div>

    <!-- Featured Categories -->
    <div class="max-w-5xl mx-auto p-5 mt-10">
      <h2 class="text-3xl font-bold text-center mb-6">Featured Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Electronics</h3>
          <p class="text-gray-300">Latest gadgets and accessories.</p>
        </div>
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Fashion</h3>
          <p class="text-gray-300">Trendy clothing and accessories.</p>
        </div>
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Home & Kitchen</h3>
          <p class="text-gray-300">Essentials for your home.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { ref } from 'vue'  // Added ref for reactive state
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const products = [
  { id: 1, image: '/babyimage.jpg', name: 'Product 1' },
  { id: 2, image: '/pc2.jpg', name: 'Product 2' },
  { id: 3, image: '/kitchen ut1.jpg', name: 'Product 3' },
  { id: 4, image: '/kitchen ut.jpg', name: 'Product 4' },
  { id: 5, image: '/babyimage1.jpg', name: 'Product 5' },
  { id: 6, image: '/pc3.jpg', name: 'Product 6' },
]

const bubbles = ref<{ [key: number]: { x: number, y: number }[] }>({})

// Function to create bubble effect on click
function createBubble(e: MouseEvent, productId: number) {
  const target = e.target as HTMLElement // TypeScript assertion to HTMLElement
  const rect = target.getBoundingClientRect()
  if (!rect) return

  const x = e.clientX - rect.left - 12 // Center bubble
  const y = e.clientY - rect.top - 12

  if (!bubbles.value[productId]) {
    bubbles.value[productId] = []
  }

  bubbles.value[productId].push({ x, y })

  // Remove bubble after animation
  setTimeout(() => {
    bubbles.value[productId].shift()
  }, 600)
}
</script>

<style scoped>
@keyframes bubble {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.bg-gray-800 {
  background-color: #2d3748;
}

.w-full {
  width: 100%;
}

.w-64 {
  width: 16rem;
}

.h-64 {
  height: 16rem;
}

@keyframes bubble {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
