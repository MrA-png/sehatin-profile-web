<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-4xl font-bold text-primary text-center mb-12">
        Pertanyaan yang Sering Ditanyakan
      </h2>
      
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span class="font-semibold text-primary">{{ faq.question }}</span>
            <span class="text-primary">{{ activeIndex === index ? '−' : '+' }}</span>
          </button>
          <div
            v-show="activeIndex === index"
            class="px-6 pb-4 text-gray-600"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <h3 class="text-2xl font-bold text-primary mb-4">Masih Punya Pertanyaan?</h3>
        <Button variant="primary">Hubungi Kami</Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const faqs = [
  {
    question: 'Apa itu Partner SEHATin?',
    answer: 'Partner SEHATin adalah platform kesehatan yang empatik dan inklusif untuk mendukung perjalanan kesehatanmu dengan berbagai layanan dan dukungan komunitas.'
  },
  {
    question: 'Bagaimana cara bergabung dengan Partner SEHATin?',
    answer: 'Kamu bisa bergabung dengan mendaftar melalui tombol "Daftar Sekarang" di halaman ini atau menghubungi tim kami untuk informasi lebih lanjut.'
  },
  {
    question: 'Apakah layanan Partner SEHATin berbayar?',
    answer: 'Kami menyediakan berbagai layanan dengan pilihan berbayar dan gratis. Beberapa layanan dasar tersedia secara gratis, sementara layanan konsultasi profesional tersedia dengan biaya yang terjangkau.'
  },
  {
    question: 'Apakah informasi yang diberikan aman dan privasi terjaga?',
    answer: 'Ya, kami sangat menjaga privasi dan keamanan data pengguna. Semua informasi yang kamu berikan akan dijaga kerahasiaannya sesuai dengan kebijakan privasi kami.'
  },
  {
    question: 'Bagaimana cara mengakses layanan konsultasi online?',
    answer: 'Setelah mendaftar, kamu bisa memilih layanan konsultasi yang diinginkan, pilih jadwal yang tersedia, dan lakukan konsultasi melalui video call atau chat sesuai preferensimu.'
  }
]

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

