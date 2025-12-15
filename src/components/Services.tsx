import React from 'react';
import { MessageCircleHeart, HeartHandshake, Calendar, Flower2, ArrowRight, Check, Sparkles, Brain, Baby } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
  const services = [
    {
      id: 'kesehatan-mental',
      icon: Brain,
      title: 'Kesehatan Mental',
      subtitle: 'Ruang aman untuk mental wellbeing',
      description: 'Dukungan profesional untuk anxiety, stress, mood disorders, dan berbagai tantangan kesehatan mental yang kamu hadapi.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBg: 'hover:bg-blue-50',
      image: 'https://images.unsplash.com/photo-1625467860279-8e5a4e5b505e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB5b3VuZyUyMHdvbWFufGVufDF8fHx8MTc2NTY5NDEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Konseling Psikolog', 'Support Groups', 'Self-Care Tools', 'Emergency Support']
    },
    {
      id: 'kesehatan-reproduksi',
      icon: Flower2,
      title: 'Kesehatan Reproduksi',
      subtitle: 'Pahami tubuh & kesehatan reproduksimu',
      description: 'Edukasi dan dukungan lengkap seputar menstruasi, kesuburan, PCOS, endometriosis, dan kesehatan reproduksi.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      hoverBg: 'hover:bg-pink-50',
      image: 'https://images.unsplash.com/photo-1712775221366-06097dd3c6d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zdHJ1YWwlMjBoZWFsdGglMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk0MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Konsultasi Dokter SpOG', 'Tracker Siklus', 'Edukasi Reproduksi', 'Screening Kesehatan']
    },
    {
      id: 'kesehatan-ibu-anak',
      icon: Baby,
      title: 'Kesehatan Ibu & Anak',
      subtitle: 'Perjalanan kehamilan & parenting',
      description: 'Dukungan lengkap dari program hamil, kehamilan, persalinan, hingga tumbuh kembang anak.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBg: 'hover:bg-purple-50',
      image: 'https://images.unsplash.com/photo-1758523419860-0e56fcb8044d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjBwbGFubmluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjU2OTQxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Program Hamil', 'Prenatal Care', 'Konsultasi Laktasi', 'Parenting Support']
    },
    {
      id: 'konsultasi-online',
      icon: MessageCircleHeart,
      title: 'Konsultasi Online',
      subtitle: 'Bicara dengan ahli, kapan saja',
      description: 'Konsultasi privat dengan profesional kesehatan secara online. Fleksibel, aman, dan tanpa judgement.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      hoverBg: 'hover:bg-rose-50',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjb25zdWx0YXRpb24lMjB5b3VuZyUyMGFkdWx0c3xlbnwxfHx8fDE3NjU2OTI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Chat/Video Call', 'Jadwal Fleksibel', 'Data Terenkripsi', 'Multi Spesialisasi']
    }
  ];

  return (
    <>
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">Layanan Kami</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
              Layanan Kesehatan yang Kamu Butuhkan
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Kami hadir dengan layanan lengkap untuk mendukung setiap fase perjalanan kesehatanmu
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-300 cursor-pointer"
                >
                  {/* Image with Icon Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className={`absolute top-6 left-6 w-14 h-14 ${service.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 ${service.borderColor}`}>
                      <Icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl text-slate-800 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-slate-600">{service.subtitle}</p>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => onServiceClick(service.id)}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 border-2 ${service.borderColor} ${service.color} ${service.hoverBg} rounded-full transition-all group-hover:gap-3`}
                    >
                      <span>Pelajari Lebih Lanjut</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl">
                Ada yang Ingin Kamu Tanyakan?
              </h3>
              <p className="text-xl text-blue-50 leading-relaxed">
                Tim kami siap membantu menjawab semua pertanyaanmu tentang layanan kesehatan yang tersedia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  Konsultasi Gratis
                </button>
                <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors">
                  Lihat Semua Layanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}