import React from 'react';
import { Target, Heart, Users2, CheckCircle } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Empatik & Inklusif',
      description: 'Kami mendengarkan tanpa menghakimi dan merangkul setiap individu dengan kehangatan.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Users2,
      title: 'Community-Driven',
      description: 'Membangun komunitas yang saling mendukung dan memberdayakan satu sama lain.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Target,
      title: 'Edukatif & Accessible',
      description: 'Informasi kesehatan yang mudah dipahami dan dapat diakses oleh semua kalangan.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const achievements = [
    'Konsultasi gratis untuk pelajar dan mahasiswa',
    'Program edukasi kesehatan di sekolah dan kampus',
    'Support group mingguan untuk berbagai topik kesehatan',
    'Konten edukatif yang relatable dan science-based'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm text-blue-600">Tentang Kami</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Kenapa Partner SEHATin Ada untuk Kamu?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Kami percaya bahwa setiap Gen Z berhak mendapatkan akses kesehatan yang 
            <span className="text-blue-600"> aman, terpercaya, dan tanpa stigma</span>. 
            Partner SEHATin hadir sebagai teman yang siap menemani perjalanan kesehatanmu.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-blue-50 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-slate-800 mb-6">
                Yang Kami Tawarkan untuk Kamu
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg text-slate-800 mb-2">Misi Kami</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Menciptakan ekosistem kesehatan yang ramah Gen Z, di mana setiap orang 
                    merasa nyaman untuk berbicara tentang kesehatan mental, reproduksi, 
                    serta kesehatan ibu dan anak tanpa rasa takut atau malu.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg text-slate-800 mb-2">Visi Kami</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Menjadi partner kesehatan terpercaya yang memberdayakan Gen Z 
                    untuk mengambil keputusan kesehatan yang tepat dengan penuh percaya diri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}