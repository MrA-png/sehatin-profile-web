import React, { useEffect } from 'react';
import { Clock, Calendar, User, Share2, BookmarkPlus, ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { articlesData } from './ArticleList';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ArticleDetailProps {
  articleId: string;
  onClose: () => void;
  onBackToList: () => void;
  onViewAllArticles?: () => void;
  onNavigate?: (section: string) => void;
}

export function ArticleDetail({ articleId, onClose, onBackToList, onViewAllArticles, onNavigate }: ArticleDetailProps) {
  const article = articlesData.find(a => a.id === articleId);
  
  // Scroll to top when component mounts or articleId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [articleId]);
  
  if (!article) return null;

  // Get related articles (same category, exclude current)
  const relatedArticles = articlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={onNavigate || onClose} onViewAllArticles={onViewAllArticles} />
      
      {/* Back Button & Actions */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBackToList}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Artikel</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" title="Share">
              <Share2 className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" title="Bookmark">
              <BookmarkPlus className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <div className={`inline-block px-4 py-2 ${article.color} rounded-full mb-6`}>
          {article.category}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl text-slate-800 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{article.readTime} baca</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
          <ImageWithFallback 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-slate-800 
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:text-slate-600 prose-ul:my-6
            prose-li:my-2
            prose-strong:text-slate-800
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author Box */}
        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-slate-800 mb-2">Tentang Penulis</h4>
              <p className="text-slate-600 mb-2">{article.author}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Profesional kesehatan berpengalaman yang berkomitmen untuk memberikan edukasi kesehatan yang mudah dipahami dan relatable untuk generasi muda.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-blue-50 rounded-3xl text-center">
          <h3 className="text-2xl text-slate-800 mb-3">
            Punya Pertanyaan Seputar Topik Ini?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Konsultasikan dengan profesional kesehatan kami. Privat, aman, dan tanpa judgement.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#kontak');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }
            }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            Konsultasi Sekarang
          </button>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl text-slate-800 mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <article 
                  key={relatedArticle.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                  onClick={() => {
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // This will update the article shown
                    const element = document.querySelector(`[data-article-id="${relatedArticle.id}"]`);
                    if (element) {
                      (element as HTMLElement).click();
                    }
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 ${relatedArticle.color} rounded-full text-sm`}>
                      {relatedArticle.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{relatedArticle.readTime} baca</span>
                    </div>
                    
                    <h3 className="text-lg text-slate-800 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                      <span className="text-sm">Baca Artikel</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}