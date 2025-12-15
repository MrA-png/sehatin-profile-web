import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticlesProps {
  onViewAll: () => void;
  onArticleClick: (articleId: string) => void;
}

export function Articles({ onViewAll, onArticleClick }: ArticlesProps) {
  const articles = [
    {
      id: 'siklus-menstruasi-gen-z',
      title: 'Memahami Siklus Menstruasi: Panduan Lengkap untuk Gen Z',
      excerpt: 'Yuk kenali lebih dalam tentang siklus menstruasimu dan apa yang normal (atau tidak normal) untuk tubuhmu.',
      category: 'Kesehatan Reproduksi',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1758273240631-59d44c8f5b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW4lMjB6JTIwY29uc3VsdGF0aW9uJTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NjU2OTE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 'self-care-kesehatan-mental',
      title: 'Self-Care Bukan Selfish: Tips Jaga Kesehatan Mental',
      excerpt: 'Cara praktis merawat kesehatan mentalmu di tengah kesibukan kuliah, kerja, dan kehidupan sosial.',
      category: 'Kesehatan Mental',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1758874383524-5a22fc2190d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB5b3VuZyUyMGFkdWx0fGVufDF8fHx8MTc2NTY5MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'persiapan-kesehatan-pra-nikah',
      title: 'Persiapan Kesehatan Pra-Nikah yang Perlu Kamu Tahu',
      excerpt: 'Checklist lengkap kesehatan fisik dan mental sebelum memasuki fase pernikahan.',
      category: 'Kesehatan Pra-Nikah',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1758522275018-2751894b49c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbW11bml0eSUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NTY5MTgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const categories = [
    'Semua Artikel',
    'Kesehatan Mental',
    'Kesehatan Reproduksi',
    'Kesehatan Pra-Nikah',
    'Parenting',
    'Lifestyle'
  ];

  return (
    <section id="artikel" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm text-blue-600">Artikel & Edukasi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Belajar dari Konten yang Relatable
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Artikel, tips, dan panduan kesehatan yang science-based tapi tetap mudah dipahami
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
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
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} baca</span>
                </div>
                
                <h3 className="text-xl text-slate-800 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200" onClick={onViewAll}>
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  );
}