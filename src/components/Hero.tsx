import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="hero" className="relative bg-blue-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-700">Ruang Aman untuk Gen Z</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl text-slate-800 tracking-tight">
                Partner <span className="text-blue-600">SEHATin</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Teman terdekatmu untuk kesehatan mental, reproduksi, serta kesehatan ibu dan anak. 
                Karena kamu berhak merasa aman, dipahami, dan didukung.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Mulai Konsultasi
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-full hover:bg-slate-50 transition-colors border border-slate-200">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl">10K+</span>
                </div>
                <p className="text-sm text-slate-600">Anggota Komunitas</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-purple-400">
                  <Heart className="w-5 h-5" />
                  <span className="text-2xl">500+</span>
                </div>
                <p className="text-sm text-slate-600">Sesi Konsultasi</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-2xl">50+</span>
                </div>
                <p className="text-sm text-slate-600">Event & Workshop</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758272133786-ee98adcc6837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweY91bmclMjBwZW9wbGUlMjBkaXNjdXNzaW9uJTIwbWVudGFsJTIwaGVhbHRofGVufDF8fHx8MTc2NTY5MTgyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse young people having a supportive discussion"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-slate-700 italic">"Akhirnya ada ruang yang benar-benar memahami dan tidak menghakimi kita."</p>
                <p className="text-sm text-slate-500 mt-2">— Nadia, 22 tahun</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -top-6 -left-6 bg-purple-100 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-700">Safe Space</p>
                  <p className="text-xs text-slate-500">Tanpa Judgement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}