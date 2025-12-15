import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah layanan Partner SEHATin benar-benar gratis?',
      answer: 'Ya! Kami menyediakan konsultasi gratis untuk pelajar dan mahasiswa. Untuk layanan tertentu yang membutuhkan konsultasi lebih mendalam dengan profesional, ada pilihan paket berbayar yang terjangkau.'
    },
    {
      question: 'Apakah data dan privasi saya aman?',
      answer: 'Privasi kamu adalah prioritas kami. Semua informasi yang kamu bagikan dijaga kerahasiaannya dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan kamu. Kami menggunakan enkripsi untuk melindungi data pribadi.'
    },
    {
      question: 'Siapa saja yang bisa mengakses layanan Partner SEHATin?',
      answer: 'Layanan kami terbuka untuk semua orang, terutama Gen Z (remaja dan dewasa muda usia 15-30 tahun). Kami inklusif dan menerima siapa saja tanpa memandang gender, orientasi seksual, atau latar belakang.'
    },
    {
      question: 'Bagaimana cara memulai konsultasi?',
      answer: 'Mudah! Klik tombol "Konsultasi" di website kami, isi form singkat, dan pilih jadwal yang sesuai. Kamu akan terhubung dengan konselor profesional yang ramah dan tidak menghakimi.'
    },
    {
      question: 'Apakah saya bisa konsultasi secara anonim?',
      answer: 'Ya, kamu bisa menggunakan nama samaran jika merasa lebih nyaman. Yang penting adalah kamu merasa aman untuk berbagi dan mendapatkan bantuan yang kamu butuhkan.'
    },
    {
      question: 'Apa bedanya support group dengan konsultasi pribadi?',
      answer: 'Support group adalah sesi kelompok di mana kamu bisa berbagi pengalaman dan belajar dari teman sebaya yang mengalami hal serupa. Konsultasi pribadi adalah sesi one-on-one dengan konselor untuk membahas masalah personal secara lebih mendalam.'
    },
    {
      question: 'Bagaimana jika kondisi saya memerlukan penanganan medis lebih lanjut?',
      answer: 'Konselor kami akan membantu kamu mengenali kondisi yang membutuhkan penanganan profesional lebih lanjut dan memberikan rujukan ke dokter atau psikolog yang tepat.'
    },
    {
      question: 'Apakah Partner SEHATin menggantikan konsultasi dengan dokter?',
      answer: 'Tidak. Kami adalah layanan pendukung yang memberikan edukasi, konseling, dan dukungan komunitas. Untuk kondisi medis serius, kami akan merekomendasikan kamu untuk berkonsultasi dengan dokter berlisensi.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm text-blue-600">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Punya pertanyaan? Kami punya jawabannya
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <span className="text-lg text-slate-800 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl text-slate-800 mb-3">
            Masih Punya Pertanyaan?
          </h3>
          <p className="text-slate-600 mb-6">
            Tim kami siap membantu menjawab pertanyaan kamu
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
