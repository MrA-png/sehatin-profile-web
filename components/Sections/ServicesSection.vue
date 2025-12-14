<template>
  <section class="py-16" id="layanan">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-primary text-center mb-12">
        Layanan Kesehatan yang Kamu Butuhkan
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Kesehatan Mental</span>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-2">Kesehatan Mental</h3>
          <p class="text-gray-600 mb-4">
            Dukungan profesional untuk kesehatan mentalmu dengan pendekatan yang empatik dan inklusif.
          </p>
          <ul class="space-y-2 mb-4 text-sm text-gray-600">
            <li>• Konsultasi Online</li>
            <li>• Webinar</li>
            <li>• Support Groups</li>
          </ul>
          <Button variant="outline">Lihat Detail</Button>
        </Card>
        
        <Card hover>
          <div class="h-48 bg-orange-200 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-600">Gambar Kesehatan Reproduksi</span>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-2">Kesehatan Reproduksi</h3>
          <p class="text-gray-600 mb-4">
            Informasi dan layanan kesehatan reproduksi yang komprehensif dan mudah diakses.
          </p>
          <ul class="space-y-2 mb-4 text-sm text-gray-600">
            <li>• Konsultasi Online</li>
            <li>• Edukasi</li>
            <li>• Alat Bantu</li>
          </ul>
          <Button variant="outline">Lihat Detail</Button>
        </Card>
        
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Kesehatan Ibu & Anak</span>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-2">Kesehatan Ibu & Anak</h3>
          <p class="text-gray-600 mb-4">
            Dukungan lengkap untuk kesehatan ibu dan anak dari masa kehamilan hingga tumbuh kembang.
          </p>
          <ul class="space-y-2 mb-4 text-sm text-gray-600">
            <li>• Konsultasi Online</li>
            <li>• Program Edukasi</li>
            <li>• Komunitas</li>
          </ul>
          <Button variant="outline">Lihat Detail</Button>
        </Card>
        
        <Card hover>
          <div class="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-500">Gambar Konsultasi Online</span>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-2">Konsultasi Online</h3>
          <p class="text-gray-600 mb-4">
            Konsultasi kesehatan online dengan profesional yang berpengalaman dan terpercaya.
          </p>
          <ul class="space-y-2 mb-4 text-sm text-gray-600">
            <li>• Video Call</li>
            <li>• Chat</li>
            <li>• Follow-up</li>
          </ul>
          <Button variant="outline">Lihat Detail</Button>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

