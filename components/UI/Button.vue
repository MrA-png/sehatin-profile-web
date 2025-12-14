<template>
  <button
    :class="[
      'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
      variant === 'primary' 
        ? 'bg-primary text-white hover:bg-primary-dark' 
        : 'bg-white text-primary border-2 border-primary hover:bg-gray-50',
      size === 'small' ? 'px-4 py-2 text-sm' : '',
      size === 'large' ? 'px-8 py-4 text-lg' : '',
      className || ''
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
}>()

defineEmits<{
  click: []
}>()
</script>

