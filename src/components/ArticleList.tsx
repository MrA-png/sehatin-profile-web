import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navbar } from './Navbar';

interface ArticleListProps {
  onClose: () => void;
  onArticleClick: (articleId: string) => void;
  onViewAllArticles?: () => void;
}

export const articlesData = [
  {
    id: 'siklus-menstruasi-gen-z',
    title: 'Memahami Siklus Menstruasi: Panduan Lengkap untuk Gen Z',
    excerpt: 'Yuk kenali lebih dalam tentang siklus menstruasimu dan apa yang normal (atau tidak normal) untuk tubuhmu.',
    category: 'Kesehatan Reproduksi',
    readTime: '5 min',
    date: '10 Des 2024',
    author: 'Dr. Sarah Wijaya, SpOG',
    image: 'https://images.unsplash.com/photo-1712775221366-06097dd3c6d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zdHJ1YWwlMjBoZWFsdGglMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk0MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-pink-100 text-pink-600',
    content: `
<p>Menstruasi adalah hal yang natural dan penting untuk dipahami. Tapi kenyataannya, banyak dari kita yang masih bingung atau malu untuk ngobrolin soal ini. Padahal, memahami siklus menstruasi itu kunci banget untuk menjaga kesehatan reproduksi kita!</p>

<h3>Apa Itu Siklus Menstruasi?</h3>
<p>Siklus menstruasi adalah perubahan hormonal yang terjadi setiap bulan untuk mempersiapkan tubuh menghadapi kemungkinan kehamilan. Rata-rata siklusnya 28 hari, tapi normalnya bisa berkisar antara 21-35 hari.</p>

<h3>Fase-Fase dalam Siklus Menstruasi</h3>

<h4>1. Fase Menstruasi (Hari 1-5)</h4>
<p>Ini adalah hari pertama kamu mengeluarkan darah. Fase ini terjadi karena lapisan rahim (endometrium) yang tidak terpakai luruh dan keluar.</p>
<ul>
  <li>Biasanya berlangsung 3-7 hari</li>
  <li>Bisa disertai kram, mood swing, dan kelelahan</li>
  <li>Volume darah normal: 30-40 ml per siklus</li>
</ul>

<h4>2. Fase Folikular (Hari 1-13)</h4>
<p>Mulai dari hari pertama menstruasi hingga ovulasi. Hormon FSH merangsang ovarium untuk memproduksi folikel.</p>

<h4>3. Fase Ovulasi (Hari 14)</h4>
<p>Ini adalah "window period" atau masa subur kamu! Sel telur matang dilepaskan dari ovarium.</p>
<ul>
  <li>Tanda-tanda: suhu tubuh naik sedikit, lendir serviks jernih dan elastis</li>
  <li>Masa paling subur untuk hamil</li>
  <li>Beberapa perempuan merasakan nyeri di satu sisi perut</li>
</ul>

<h4>4. Fase Luteal (Hari 15-28)</h4>
<p>Setelah ovulasi, tubuh mempersiapkan diri untuk kemungkinan kehamilan. Jika tidak terjadi pembuahan, hormon turun dan menstruasi dimulai lagi.</p>

<h3>Yang Normal vs Perlu Diwaspadai</h3>

<h4>✅ Normal:</h4>
<ul>
  <li>Siklus bervariasi 21-35 hari</li>
  <li>Menstruasi 3-7 hari</li>
  <li>Kram ringan hingga sedang</li>
  <li>Mood swing menjelang menstruasi (PMS)</li>
  <li>Darah berwarna merah tua hingga kecoklatan</li>
</ul>

<h4>⚠️ Perlu Konsultasi:</h4>
<ul>
  <li>Siklus sangat tidak teratur (misalnya, kadang 20 hari kadang 60 hari)</li>
  <li>Darah sangat banyak (ganti pembalut setiap 1-2 jam)</li>
  <li>Kram sangat parah sampai mengganggu aktivitas</li>
  <li>Tidak menstruasi selama 3 bulan berturut-turut (tanpa hamil)</li>
  <li>Perdarahan di luar jadwal menstruasi</li>
</ul>

<h3>Tips Merawat Tubuh Selama Siklus Menstruasi</h3>

<p><strong>Saat Menstruasi:</strong></p>
<ul>
  <li>Kompres hangat untuk mengurangi kram</li>
  <li>Olahraga ringan seperti yoga atau jalan santai</li>
  <li>Istirahat cukup</li>
  <li>Hindari makanan tinggi garam dan kafein berlebih</li>
</ul>

<p><strong>Saat Ovulasi:</strong></p>
<ul>
  <li>Waktu yang tepat jika kamu merencanakan kehamilan</li>
  <li>Atau sebaliknya, extra hati-hati jika belum mau hamil</li>
  <li>Energi biasanya lebih tinggi, manfaatkan untuk produktif!</li>
</ul>

<p><strong>Fase Luteal (Sebelum Menstruasi):</strong></p>
<ul>
  <li>Mungkin merasa lebih lapar - it's okay, dengarkan tubuhmu</li>
  <li>Mood bisa lebih sensitif - self-care is important!</li>
  <li>Kurangi konsumsi gula dan garam untuk minimalisir PMS</li>
</ul>

<h3>Kesimpulan</h3>
<p>Memahami siklus menstruasimu adalah bentuk self-love dan self-care. Dengan mengenali polanya, kamu bisa lebih aware terhadap tubuh dan tahu kapan harus konsultasi dengan profesional. Remember, setiap tubuh itu unik - yang penting adalah memahami apa yang normal untukmu!</p>

<p>Kalau kamu punya pertanyaan atau kekhawatiran tentang siklus menstruasimu, jangan ragu untuk konsultasi dengan dokter atau ahli kesehatan ya. Your health matters! 💜</p>
    `
  },
  {
    id: 'self-care-kesehatan-mental',
    title: 'Self-Care Bukan Selfish: Tips Jaga Kesehatan Mental',
    excerpt: 'Cara praktis merawat kesehatan mentalmu di tengah kesibukan kuliah, kerja, dan kehidupan sosial.',
    category: 'Kesehatan Mental',
    readTime: '7 min',
    date: '8 Des 2024',
    author: 'Psikolog Amelia Putri, M.Psi',
    image: 'https://images.unsplash.com/photo-1625467860279-8e5a4e5b505e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB5b3VuZyUyMHdvbWFufGVufDF8fHx8MTc2NTY5NDEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-blue-100 text-blue-600',
    content: `<p>Di era hustle culture ini, kita sering merasa guilty kalau "istirahat" atau fokus ke diri sendiri. Padahal, self-care itu bukan selfish - justru ini adalah investasi penting untuk kesehatan mental dan produktivitas jangka panjang kita!</p>

<h3>Mengapa Self-Care Itu Penting?</h3>
<p>Bayangkan tubuh dan pikiranmu seperti smartphone. Kalau terus dipake tanpa di-charge, pasti bakal mati kan? Sama halnya dengan diri kita. Self-care adalah cara kita "mengisi ulang baterai" supaya bisa berfungsi optimal.</p>

<h3>Tanda-Tanda Kamu Butuh Self-Care</h3>
<ul>
  <li>Mudah lelah meski sudah tidur cukup</li>
  <li>Lebih mudah marah atau emosional</li>
  <li>Sulit fokus atau konsentrasi menurun</li>
  <li>Merasa overwhelmed dengan hal-hal kecil</li>
  <li>Kehilangan minat pada hal yang biasanya kamu sukai</li>
  <li>Gangguan tidur atau pola makan</li>
</ul>

<p>Your mental health matters. Take care of yourself! 💙</p>`
  },
  {
    id: 'persiapan-kesehatan-pra-nikah',
    title: 'Persiapan Kesehatan Pra-Nikah yang Perlu Kamu Tahu',
    excerpt: 'Checklist lengkap kesehatan fisik dan mental sebelum memasuki fase pernikahan.',
    category: 'Kesehatan Pra-Nikah',
    readTime: '6 min',
    date: '5 Des 2024',
    author: 'Dr. Budi Santoso, SpOG',
    image: 'https://images.unsplash.com/photo-1758523419860-0e56fcb8044d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjBwbGFubmluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjU2OTQxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-purple-100 text-purple-600',
    content: `<p>Menikah adalah milestone penting dalam hidup. Selain persiapan acara dan administrasi, kesehatan - baik fisik maupun mental - juga super penting untuk diperhatikan. Yuk, kita bahas apa aja yang perlu kamu prepare!</p>

<h3>Mengapa Persiapan Kesehatan Pra-Nikah Penting?</h3>
<p>Persiapan kesehatan pra-nikah bukan cuma formalitas atau syarat administratif. Ini adalah investasi untuk kehidupan bersama yang sehat dan bahagia.</p>

<p>Here's to a healthy and happy marriage! 💜</p>`
  },
  {
    id: 'pcos-apa-yang-perlu-diketahui',
    title: 'PCOS: Apa yang Perlu Kamu Ketahui tentang Sindrom Ovarium Polikistik',
    excerpt: 'Memahami PCOS, gejala, diagnosis, dan cara mengelolanya untuk kesehatan jangka panjang.',
    category: 'Kesehatan Reproduksi',
    readTime: '8 min',
    date: '3 Des 2024',
    author: 'Dr. Linda Kusuma, SpOG',
    image: 'https://images.unsplash.com/photo-1758577342471-1c15720f9d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXByb2R1Y3RpdmUlMjBoZWFsdGglMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk0MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-pink-100 text-pink-600',
    content: `<p>PCOS atau Polycystic Ovary Syndrome adalah kondisi hormonal yang cukup umum dialami perempuan usia reproduktif. Tapi sayangnya, masih banyak yang belum paham tentang kondisi ini. Let's break it down!</p>

<h3>Apa Itu PCOS?</h3>
<p>PCOS adalah gangguan hormonal yang menyebabkan ovarium memproduksi hormon androgen (hormon pria) dalam jumlah berlebihan.</p>

<p>Your health journey is unique to you. Be patient and kind to yourself! 💕</p>`
  },
  {
    id: 'managing-anxiety-gen-z',
    title: 'Managing Anxiety di Era Digital: Guide untuk Gen Z',
    excerpt: 'Strategi praktis mengatasi kecemasan yang sering dialami generasi digital native.',
    category: 'Kesehatan Mental',
    readTime: '6 min',
    date: '1 Des 2024',
    author: 'Psikolog Rani Pratama, M.Psi',
    image: 'https://images.unsplash.com/photo-1535007829477-d13662ffb714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwY2FyZSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NTY1OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-blue-100 text-blue-600',
    content: `<p>Anxiety atau kecemasan adalah salah satu mental health issue yang paling umum dialami Gen Z. Dengan constant connectivity, social media, dan pressure untuk "sukses cepat", wajar banget kalau sometimes kita merasa overwhelmed. Let's talk about it!</p>

<h3>Kenali Anxiety-mu</h3>
<p>Anxiety doesn't define you. It's a part of your experience, but not your identity.</p>

<p>Your mental health matters. Take care of yourself! 💙</p>`
  },
  {
    id: 'nutrisi-kesehatan-reproduksi',
    title: 'Nutrisi untuk Kesehatan Reproduksi: What You Eat Matters',
    excerpt: 'Panduan nutrisi yang mendukung kesehatan reproduksi, kesuburan, dan hormon balance.',
    category: 'Lifestyle',
    readTime: '7 min',
    date: '28 Nov 2024',
    author: 'Nutritionist Maya Sari, S.Gz',
    image: 'https://images.unsplash.com/photo-1759476530865-15f7411b4a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIweW91bmclMjBhZHVsdHxlbnwxfHx8fDE3NjU2OTQxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-purple-100 text-purple-600',
    content: `<p>What you eat has a huge impact on kesehatan reproduksimu - from menstrual health, fertility, hormone balance, hingga sexual health. Let's dive into nutrition yang support reproductive wellness!</p>

<h3>Why Nutrition Matters untuk Kesehatan Reproduksi</h3>
<p>Your body butuh nutrisi yang tepat untuk memproduksi hormon secara optimal dan maintain regular menstrual cycles.</p>

<p>Nourish your body, support your hormones, invest in your health! 🥗💜</p>`
  }
];

export function ArticleList({ onClose, onArticleClick }: ArticleListProps) {
  const [selectedCategory, setSelectedCategory] = useState('Semua Artikel');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = [
    'Semua Artikel',
    'Kesehatan Mental',
    'Kesehatan Reproduksi',
    'Kesehatan Pra-Nikah',
    'Lifestyle'
  ];

  const filteredArticles = selectedCategory === 'Semua Artikel'
    ? articlesData
    : articlesData.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={onClose} onViewAllArticles={onViewAllArticles} />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Artikel & Panduan Kesehatan
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Konten edukatif yang science-based tapi tetap mudah dipahami dan relatable untuk kamu
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full border transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => onArticleClick(article.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 ${article.color} rounded-full text-sm`}>
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} baca</span>
                  </div>
                </div>
                
                <h3 className="text-xl text-slate-800 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                
                <div className="inline-flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Belum ada artikel untuk kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
}
