<template>
  <section class="bg-gray-50 py-16" id="blog">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-primary text-center mb-12">
        Belajar dari Konten yang Relatable
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Artikel</span>
          </div>
          <h3 class="text-xl font-bold text-primary mb-2">Memahami Siklus Menstruasi</h3>
          <p class="text-gray-600 text-sm mb-4">
            Pelajari tentang siklus menstruasi dan bagaimana memahami tubuhmu dengan lebih baik.
          </p>
          <Button variant="outline" size="small">Baca Selengkapnya</Button>
        </Card>
        
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Artikel</span>
          </div>
          <h3 class="text-xl font-bold text-primary mb-2">Self-Care Bukan Selfish: Tips Jaga...</h3>
          <p class="text-gray-600 text-sm mb-4">
            Self-care adalah kebutuhan, bukan kemewahan. Pelajari cara menjaga kesehatan mentalmu.
          </p>
          <Button variant="outline" size="small">Baca Selengkapnya</Button>
        </Card>
        
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Artikel</span>
          </div>
          <h3 class="text-xl font-bold text-primary mb-2">Persiapan Kesehatan Pra-Nikah yang Pent...</h3>
          <p class="text-gray-600 text-sm mb-4">
            Persiapan kesehatan yang penting sebelum menikah untuk memulai kehidupan baru yang sehat.
          </p>
          <Button variant="outline" size="small">Baca Selengkapnya</Button>
        </Card>
      </div>
      
      <div class="text-center">
        <Button variant="primary">Lihat Semua Artikel</Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

