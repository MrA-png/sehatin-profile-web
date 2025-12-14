<template>
  <div
    :class="[
      'bg-white rounded-lg shadow-md p-6 transition-all duration-200',
      hover ? 'hover:shadow-lg hover:scale-105' : '',
      className
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hover?: boolean
  className?: string
}>()
</script>

