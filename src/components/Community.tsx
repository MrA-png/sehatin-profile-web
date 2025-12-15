import { Users, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function Community() {
  const testimonials = [
    {
      quote: "Partner SEHATin bikin aku ngerasa nggak sendirian. Bisa cerita tanpa takut di-judge, dan dapet support dari temen-temen yang ngalamin hal serupa.",
      author: "Rina, 20 tahun",
      role: "Member Komunitas",
      color: 'bg-blue-100'
    },
    {
      quote: "Workshop tentang kesehatan mental bener-bener eye-opening. Akhirnya aku paham kalau self-care itu bukan selfish.",
      author: "Dimas, 23 tahun",
      role: "Peserta Workshop",
      color: 'bg-purple-100'
    },
    {
      quote: "Sebagai ibu muda, aku butuh support system yang paham struggle aku. Di sini aku nemuin itu semua.",
      author: "Maya, 24 tahun",
      role: "Young Parent Support Group",
      color: 'bg-pink-100'
    }
  ];

  const communityImages = [
    {
      url: 'https://images.unsplash.com/photo-1758522275018-2751894b49c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbW11bml0eSUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NTY5MTgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Youth community workshop'
    },
    {
      url: 'https://images.unsplash.com/photo-1758274533800-6a5fe97f53f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMHdlbGxuZXNzJTIwc3VwcG9ydCUyMGdyb3VwfGVufDF8fHx8MTc2NTY5MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Wellness support group'
    }
  ];

  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-pink-50 rounded-full mb-6">
            <span className="text-sm text-pink-600">Komunitas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Kamu Nggak Sendirian
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Bergabung dengan ribuan Gen Z lainnya yang saling mendukung dalam perjalanan kesehatan mereka
          </p>
        </div>

        {/* Community Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {communityImages.map((image, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
              >
                <ImageWithFallback 
                  src={image.url}
                  alt={image.alt}
                  className={`w-full object-cover ${index === 0 ? 'h-[300px]' : 'h-[250px]'}`}
                />
              </div>
            ))}
          </div>

          {/* Community Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Support Groups</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Grup diskusi mingguan dengan tema berbeda: mental health, reproductive health, parenting, dan banyak lagi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Peer Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Terhubung dengan teman sebaya yang memiliki pengalaman serupa dan saling memberikan dukungan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Events & Workshops</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kegiatan bulanan dengan narasumber profesional dan sesi interaktif yang fun dan edukatif.
                  </p>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
              <span>Gabung Komunitas</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h3 className="text-3xl text-slate-800 text-center mb-12">
            Cerita dari Teman-Teman Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`${testimonial.color} rounded-2xl p-8 space-y-4`}
              >
                <div className="text-slate-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </div>
                <div className="pt-4 border-t border-slate-300">
                  <p className="text-slate-800">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-4xl">
              Siap Memulai Perjalanan Kesehatanmu?
            </h3>
            <p className="text-xl text-blue-50 leading-relaxed">
              Partner SEHATin siap menjadi teman terbaikmu. Mulai konsultasi gratis atau bergabung dengan komunitas kami hari ini.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                Konsultasi Gratis
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors border border-white/40">
                Lihat Event Terdekat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}