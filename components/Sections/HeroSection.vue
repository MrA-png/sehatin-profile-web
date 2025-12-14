<template>
  <section class="container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl font-bold text-primary mb-6">PartnerSEHATin</h1>
        <p class="text-gray-600 text-lg mb-8">
          Platform kesehatan yang empatik dan inklusif untuk mendukung perjalanan kesehatanmu. 
          Kami hadir untuk memberikan layanan kesehatan yang mudah diakses dan terpercaya.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="large">Daftar Sekarang</Button>
          <Button variant="outline" size="large">Pelajari Lebih Lanjut</Button>
        </div>
        
        <div class="flex gap-8 mt-12">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">4.3/5</div>
            <div class="text-sm text-gray-600">Rating</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">10K+</div>
            <div class="text-sm text-gray-600">Users</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">500+</div>
            <div class="text-sm text-gray-600">Partners</div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="bg-gray-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
          <div class="text-gray-400 text-center">
            <div class="text-6xl mb-4">👥</div>
            <p class="text-sm">Gambar Komunitas</p>
          </div>
        </div>
        <div class="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
          100+ Partner
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

