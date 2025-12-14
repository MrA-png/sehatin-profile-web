<template>
  <section class="bg-gray-50 py-16" id="komunitas">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-primary text-center mb-12">
        Kamu Nggak Sendirian
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
          <span class="text-gray-500">Gambar Komunitas</span>
        </div>
        
        <div>
          <div class="space-y-6 mb-8">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-white text-xl">👥</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary mb-2">Support Groups</h3>
                <p class="text-gray-600">
                  Bergabung dengan kelompok dukungan yang sesuai dengan kebutuhanmu. 
                  Berbagi pengalaman dan mendapatkan dukungan dari teman-teman yang memahami.
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-white text-xl">🤝</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary mb-2">Peer Support</h3>
                <p class="text-gray-600">
                  Dukungan dari teman sebaya yang telah melalui pengalaman serupa. 
                  Kamu tidak perlu menghadapi semuanya sendirian.
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-white text-xl">🎯</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary mb-2">Events & Workshops</h3>
                <p class="text-gray-600">
                  Ikuti berbagai acara dan workshop edukatif yang diselenggarakan secara rutin 
                  untuk meningkatkan pengetahuan kesehatanmu.
                </p>
              </div>
            </div>
          </div>
          
          <Button variant="primary" size="large">Gabung Komunitas</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

