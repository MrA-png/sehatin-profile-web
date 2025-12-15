import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Nadia Putri',
      age: 22,
      role: 'Mahasiswa',
      rating: 5,
      text: 'Partner SEHATin bener-bener jadi safe space buat aku. Konselor-konselornya ramah banget, nggak judgmental, dan bikin aku merasa didengar. Sekarang aku lebih paham cara nge-handle anxiety dan lebih care sama mental health.',
      color: 'bg-blue-50'
    },
    {
      name: 'Rina Safitri',
      age: 20,
      role: 'Member Komunitas',
      rating: 5,
      text: 'Support group-nya life changing! Aku ngerasa nggak sendirian lagi. Ketemu temen-temen sebaya yang punya struggle serupa tuh bikin aku lebih kuat dan lebih PD buat ngadepin masalah kesehatan reproduksi.',
      color: 'bg-pink-50'
    },
    {
      name: 'Dimas Prasetyo',
      age: 23,
      role: 'Peserta Workshop',
      rating: 5,
      text: 'Workshop kesehatan pra-nikah yang aku ikutin bareng pasangan sangat informatif. Materi disampaikan dengan fun, nggak awkward, dan banyak hal baru yang kami pelajari. Highly recommended!',
      color: 'bg-purple-50'
    },
    {
      name: 'Maya Kartika',
      age: 24,
      role: 'Young Parent',
      rating: 5,
      text: 'Sebagai ibu muda, aku butuh support system yang beneran paham struggle aku. Di Partner SEHATin, aku nemuin komunitas yang supportive dan konselor yang expertise. Parenting jadi nggak overwhelming lagi.',
      color: 'bg-blue-50'
    },
    {
      name: 'Arif Rahman',
      age: 21,
      role: 'Pengguna Tools',
      rating: 5,
      text: 'Kalkulator menstruasi dan masa subur-nya helpful banget buat aku dan pacar. Jadi lebih aware dan bisa planning lebih baik. Interface-nya juga user-friendly dan mudah digunakan.',
      color: 'bg-pink-50'
    },
    {
      name: 'Sari Indah',
      age: 25,
      role: 'Pembaca Artikel',
      rating: 5,
      text: 'Artikel-artikelnya sangat relatable dan easy to digest. Bahasanya santai tapi tetap science-based. Jadi nggak bosen baca dan beneran nambah knowledge tentang kesehatan.',
      color: 'bg-purple-50'
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm text-blue-600">Testimoni</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Cerita dari Teman-Teman Kami
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Dengar langsung pengalaman mereka yang sudah merasakan manfaat Partner SEHATin
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`${testimonial.color} rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-400 opacity-50" />
              
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-300">
                <p className="text-slate-800">{testimonial.name}, {testimonial.age}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">4.9/5</div>
            <p className="text-slate-600">Rating Rata-rata</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">10K+</div>
            <p className="text-slate-600">Pengguna Aktif</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">500+</div>
            <p className="text-slate-600">Testimoni Positif</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-2">95%</div>
            <p className="text-slate-600">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
