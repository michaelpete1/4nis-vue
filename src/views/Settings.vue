<template>
  <div class="min-h-screen bg-gray-900 text-white p-5 pt-24">
    <div class="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 animate-fade-slide-in">
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-400 tracking-wide">
        Account Settings
      </h2>

      <!-- Profile Picture Upload -->
      <div class="flex flex-col items-center mb-6 transition-all">
        <div class="relative group">
          <img
            :src="previewImage || '/default-profile.png'"
            alt="Profile"
            class="w-24 h-24 rounded-full object-cover mb-2 shadow-lg ring-2 ring-blue-500 group-hover:ring-4 transition duration-300"
          />
          <div
            class="absolute inset-0 bg-black/30 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <span class="text-xs text-white">Change</span>
          </div>
        </div>
        <input type="file" @change="handleImageUpload" class="mt-2 text-sm text-gray-300" />
      </div>

      <!-- Form Fields -->
      <form @submit.prevent="saveSettings" class="space-y-4">
        <div>
          <label class="block text-sm text-gray-400 mb-1">Full Name</label>
          <input v-model="form.fullName" type="text" class="input" />
        </div>

        <div>
          <label class="block text-sm text-gray-400 mb-1">Email</label>
          <input v-model="form.email" type="email" class="input" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Gender</label>
            <select v-model="form.gender" class="input">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">Country</label>
            <input v-model="form.country" type="text" class="input" />
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">Age</label>
            <input v-model="form.age" type="number" class="input" />
          </div>
        </div>

        <!-- Save Button -->
        <div class="text-center mt-6">
          <button
            type="submit"
            :disabled="loading"
            class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow hover:shadow-lg disabled:opacity-50"
          >
            {{ loading ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>

      <!-- Notification -->
      <transition name="fade">
        <div
          v-if="notification.message"
          :class="`mt-4 text-center p-3 rounded-lg font-medium ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`"
        >
          {{ notification.message }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  fullName: '',
  email: '',
  gender: '',
  country: '',
  age: '',
})

const previewImage = ref<string | null>(null)
const notification = ref<{ message: string; type: 'success' | 'error' | '' }>({
  message: '',
  type: '',
})
const loading = ref(false)

function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      previewImage.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

async function saveSettings() {
  loading.value = true
  notification.value = { message: '', type: '' }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(form.value),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) throw new Error('Failed to save')

    notification.value = {
      message: 'Settings saved successfully!',
      type: 'success',
    }
  } catch (error) {
    notification.value = {
      message: 'Something went wrong. Please try again.',
      type: 'error',
    }
  } finally {
    loading.value = false

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      notification.value = { message: '', type: '' }
    }, 3000)
  }
}
</script>

<style scoped>
.input {
  @apply w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400;
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-slide-in {
  animation: fadeSlideIn 0.8s ease-out forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
