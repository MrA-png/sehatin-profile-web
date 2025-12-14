<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-primary mb-4">Error {{ error.statusCode }}</h1>
      <p class="text-gray-600 mb-8">{{ error.message }}</p>
      <a href="/" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
        Kembali ke Beranda
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>

