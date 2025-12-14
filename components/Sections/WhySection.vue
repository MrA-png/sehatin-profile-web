<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary mb-4">Kenapa Partner SEHATin Ada untuk Kamu?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Kami memahami bahwa perjalanan kesehatan setiap orang unik. 
          Itulah mengapa kami hadir dengan pendekatan yang berbeda.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card hover>
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">💗</span>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Empatik & Inklusif</h3>
            <p class="text-gray-600 text-sm">
              Kami memahami kebutuhan setiap individu dengan pendekatan yang penuh empati dan inklusif.
            </p>
          </div>
        </Card>
        
        <Card hover>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">🤝</span>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Community-Driven</h3>
            <p class="text-gray-600 text-sm">
              Dibangun oleh komunitas, untuk komunitas. Setiap suara penting dan didengar.
            </p>
          </div>
        </Card>
        
        <Card hover>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">📚</span>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Edukatif & Accessible</h3>
            <p class="text-gray-600 text-sm">
              Informasi kesehatan yang mudah dipahami dan dapat diakses oleh semua kalangan.
            </p>
          </div>
        </Card>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-primary mb-4">Yang Kami Tawarkan untuk Kamu</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span>Layanan kesehatan yang mudah diakses</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span>Komunitas yang supportif dan inklusif</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span>Konten edukatif yang relatable</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span>Alat bantu untuk kesehatanmu</span>
            </li>
          </ul>
        </div>
        
        <Card>
          <div>
            <h3 class="text-xl font-bold text-primary mb-4">MISI KAMI</h3>
            <p class="text-gray-600 mb-6">
              Memberikan akses kesehatan yang mudah, terjangkau, dan berkualitas untuk semua kalangan.
            </p>
            <h3 class="text-xl font-bold text-primary mb-4">VISI KAMI</h3>
            <p class="text-gray-600">
              Menjadi platform kesehatan terdepan yang mengedepankan empati, inklusivitas, dan edukasi.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

