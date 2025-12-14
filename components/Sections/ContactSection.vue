<template>
  <section class="py-16" id="tentang">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-primary text-center mb-12">
        Mari Terhubung dengan Kami
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold text-primary mb-6">Hubungi Kami</h3>
          
          <div class="space-y-4 mb-8">
            <Card>
              <div class="flex items-start">
                <span class="text-2xl mr-4">📍</span>
                <div>
                  <h4 class="font-semibold text-primary mb-2">Kantor</h4>
                  <p class="text-gray-600 text-sm">
                    Jl. Kesehatan No. 123<br>
                    Jakarta Pusat, 10110<br>
                    Indonesia
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div class="flex items-start">
                <span class="text-2xl mr-4">✉️</span>
                <div>
                  <h4 class="font-semibold text-primary mb-2">Email</h4>
                  <p class="text-gray-600 text-sm">info@partnersehatin.com</p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div class="flex items-start">
                <span class="text-2xl mr-4">🕐</span>
                <div>
                  <h4 class="font-semibold text-primary mb-2">Jam Kerja</h4>
                  <p class="text-gray-600 text-sm">
                    Senin - Jumat: 09:00 - 17:00 WIB<br>
                    Sabtu: 09:00 - 13:00 WIB
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div class="flex space-x-4">
            <a href="#" class="text-primary hover:text-primary-dark transition">Instagram</a>
            <a href="#" class="text-primary hover:text-primary-dark transition">Facebook</a>
            <a href="#" class="text-primary hover:text-primary-dark transition">Twitter</a>
            <a href="#" class="text-primary hover:text-primary-dark transition">LinkedIn</a>
          </div>
        </div>
        
        <Card>
          <h3 class="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
          <form class="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nama"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Nomor Telepon"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Pesan"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button class="w-full px-8 py-4 text-lg rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark transition">
              Kirim Pesan
            </button>
          </form>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

