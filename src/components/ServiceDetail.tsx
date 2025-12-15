import React, { useEffect } from 'react';
import { X, Check, Clock, Shield, Heart, Users, MessageCircle, Calendar, ArrowRight, ChevronRight, Brain, Baby, Flower2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
  onServiceClick?: (serviceId: string) => void;
}

const serviceDetails = {
  'kesehatan-mental': {
    title: 'Kesehatan Mental',
    subtitle: 'Ruang aman untuk mental wellbeing',
    description: 'Dukungan profesional untuk anxiety, stress, mood disorders, dan berbagai tantangan kesehatan mental yang kamu hadapi.',
    color: 'blue',
    icon: Brain,
    hero: {
      title: 'Kesehatan Mental adalah Prioritas',
      description: 'Ruang aman dan judgment-free untuk berbicara, didengar, dan mendapat dukungan profesional. Karena kesehatan mentalmu sama pentingnya dengan kesehatan fisikmu.'
    },
    features: [
      {
        icon: Users,
        title: 'Psikolog Bersertifikat',
        description: 'Konseling dengan psikolog profesional yang berpengalaman'
      },
      {
        icon: Shield,
        title: 'Privasi Terjamin',
        description: 'Kerahasiaan percakapan dijaga dengan standar tertinggi'
      },
      {
        icon: Heart,
        title: 'Support Groups',
        description: 'Komunitas suportif untuk sharing dan saling mendukung'
      },
      {
        icon: Clock,
        title: 'Akses Fleksibel',
        description: 'Konseling kapan saja yang kamu butuhkan, online atau offline'
      }
    ],
    topics: [
      'Anxiety & Panic Disorder',
      'Depresi & Mood Disorders',
      'Stress Management',
      'Self-Esteem & Confidence',
      'Relationship Issues',
      'Trauma & PTSD',
      'Burnout & Work Stress',
      'Body Image & Eating Disorders'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Assessment Awal',
        description: 'Isi kuesioner untuk memahami kondisi dan kebutuhanmu'
      },
      {
        step: '2',
        title: 'Matching dengan Psikolog',
        description: 'Sistem akan merekomendasikan psikolog yang cocok untukmu'
      },
      {
        step: '3',
        title: 'Sesi Konseling',
        description: 'Mulai sesi konseling via chat, voice, atau video call'
      },
      {
        step: '4',
        title: 'Progress Tracking',
        description: 'Monitor perkembangan dan dapat dukungan berkelanjutan'
      }
    ],
    benefits: [
      'Konseling profesional dengan psikolog bersertifikat',
      'Akses support group dan peer counseling',
      'Self-care tools dan mood tracker',
      'Emergency support 24/7 untuk krisis',
      'Artikel dan konten edukasi kesehatan mental',
      'Catatan sesi tersimpan aman'
    ],
    pricing: {
      title: 'Paket Kesehatan Mental',
      options: [
        {
          name: 'Basic Counseling',
          price: 'Rp 150.000',
          duration: '45 menit',
          features: ['1 sesi dengan psikolog', 'Chat follow-up 7 hari', 'Mood tracker akses', 'Catatan sesi']
        },
        {
          name: 'Mental Wellness Package',
          price: 'Rp 500.000',
          duration: 'Per bulan',
          features: ['4 sesi konseling', 'Support group akses', 'Unlimited chat support', 'Self-care tools premium', 'Emergency hotline']
        }
      ]
    }
  },
  'kesehatan-reproduksi': {
    title: 'Kesehatan Reproduksi',
    subtitle: 'Pahami tubuh & kesehatan reproduksimu',
    description: 'Edukasi dan dukungan lengkap seputar menstruasi, kesuburan, PCOS, endometriosis, dan kesehatan reproduksi.',
    color: 'pink',
    icon: Flower2,
    hero: {
      title: 'Kenali dan Rawat Kesehatan Reproduksimu',
      description: 'Dari menstruasi, kesuburan, hingga masalah kesehatan reproduksi. Dapatkan informasi akurat dan dukungan profesional untuk setiap fase kehidupanmu.'
    },
    features: [
      {
        icon: Calendar,
        title: 'Period & Cycle Tracker',
        description: 'Catat dan prediksi siklus menstruasi dengan akurat'
      },
      {
        icon: Users,
        title: 'Konsultasi Dokter SpOG',
        description: 'Tanya jawab langsung dengan dokter spesialis kandungan'
      },
      {
        icon: Heart,
        title: 'Edukasi Komprehensif',
        description: 'Artikel, video, dan panduan tentang kesehatan reproduksi'
      },
      {
        icon: Shield,
        title: 'Screening Kesehatan',
        description: 'Program deteksi dini masalah kesehatan reproduksi'
      }
    ],
    topics: [
      'Siklus Menstruasi & PMS',
      'Nyeri Haid (Dismenore)',
      'PCOS & Endometriosis',
      'Keputihan & Infeksi Vagina',
      'Masa Subur & Ovulasi',
      'Kontrasepsi & KB',
      'Kista Ovarium',
      'Miom & Gangguan Rahim'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Tracking Siklus',
        description: 'Mulai catat siklus menstruasi dan gejala yang dialami'
      },
      {
        step: '2',
        title: 'Analisis & Insight',
        description: 'Sistem menganalisis pola dan memberikan rekomendasi'
      },
      {
        step: '3',
        title: 'Konsultasi Ahli',
        description: 'Tanya langsung ke dokter SpOG jika ada keluhan'
      },
      {
        step: '4',
        title: 'Monitor Kesehatan',
        description: 'Pantau kesehatan reproduksi secara berkelanjutan'
      }
    ],
    benefits: [
      'Period tracker dengan prediksi akurat',
      'Konsultasi unlimited dengan dokter SpOG',
      'Reminder menstruasi dan masa subur',
      'Tips personal untuk kelola PMS',
      'Screening & deteksi dini masalah',
      'Riwayat kesehatan tersimpan digital'
    ],
    pricing: {
      title: 'Paket Kesehatan Reproduksi',
      options: [
        {
          name: 'Basic Tracker',
          price: 'Gratis',
          duration: 'Selamanya',
          features: ['Period tracker', 'Prediksi siklus dasar', 'Artikel edukasi', 'Reminder notifikasi']
        },
        {
          name: 'Premium Care',
          price: 'Rp 99.000',
          duration: 'Per bulan',
          features: ['Analisis mendalam', '2x konsultasi dokter', 'Screening program', 'Support group', 'Export data lengkap']
        }
      ]
    }
  },
  'kesehatan-ibu-anak': {
    title: 'Kesehatan Ibu & Anak',
    subtitle: 'Perjalanan kehamilan & parenting',
    description: 'Dukungan lengkap dari program hamil, kehamilan, persalinan, hingga tumbuh kembang anak.',
    color: 'purple',
    icon: Baby,
    hero: {
      title: 'Dampingi Perjalanan Menjadi Orang Tua',
      description: 'Dari merencanakan kehamilan, menjalani kehamilan yang sehat, hingga merawat dan mengasuh buah hati. Kami siap mendampingi setiap langkahmu.'
    },
    features: [
      {
        icon: Heart,
        title: 'Program Hamil',
        description: 'Panduan lengkap persiapan dan optimasi kehamilan'
      },
      {
        icon: Users,
        title: 'Prenatal Care',
        description: 'Monitoring kehamilan dan konsultasi dokter kandungan'
      },
      {
        icon: Baby,
        title: 'Konsultasi Laktasi',
        description: 'Dukungan menyusui dari konselor laktasi bersertifikat'
      },
      {
        icon: Shield,
        title: 'Parenting Support',
        description: 'Tips dan konseling untuk tumbuh kembang anak'
      }
    ],
    topics: [
      'Program & Persiapan Kehamilan',
      'Prenatal Care & Monitoring',
      'Nutrisi Ibu Hamil',
      'Persiapan Persalinan',
      'Breastfeeding & Laktasi',
      'Tumbuh Kembang Bayi',
      'Baby-Led Weaning (MPASI)',
      'Parenting & Pola Asuh'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Fase Planning',
        description: 'Persiapan pra-kehamilan dan optimasi kesehatan'
      },
      {
        step: '2',
        title: 'Fase Kehamilan',
        description: 'Monitoring rutin dan konsultasi dokter kandungan'
      },
      {
        step: '3',
        title: 'Fase Persalinan',
        description: 'Persiapan melahirkan dan birthing plan'
      },
      {
        step: '4',
        title: 'Fase Parenting',
        description: 'Dukungan menyusui dan tumbuh kembang anak'
      }
    ],
    benefits: [
      'Konsultasi dengan dokter SpOG & dokter anak',
      'Pregnancy tracker & milestone monitoring',
      'Konsultasi laktasi & breastfeeding support',
      'Kelas prenatal & parenting online',
      'Support group ibu hamil & new moms',
      'Meal plan untuk ibu hamil & menyusui'
    ],
    pricing: {
      title: 'Paket Ibu & Anak',
      options: [
        {
          name: 'Pregnancy Essentials',
          price: 'Rp 250.000',
          duration: 'Per bulan',
          features: ['Pregnancy tracker', '1x konsultasi dokter', 'Artikel & tips harian', 'Support group']
        },
        {
          name: 'Complete Care',
          price: 'Rp 500.000',
          duration: 'Per bulan',
          features: ['Unlimited konsultasi', 'Prenatal class akses', 'Laktasi consultant', 'Meal plan personal', 'Emergency support']
        }
      ]
    }
  },
  'konsultasi-online': {
    title: 'Konsultasi Online',
    subtitle: 'Bicara dengan ahli, kapan saja',
    description: 'Konsultasi privat dengan profesional kesehatan secara online. Fleksibel, aman, dan tanpa judgement.',
    color: 'rose',
    icon: MessageCircle,
    hero: {
      title: 'Konsultasi Kesehatan, Kapan dan Di Mana Saja',
      description: 'Akses mudah ke dokter, psikolog, dan ahli kesehatan lainnya melalui chat, voice call, atau video call. Privat, aman, dan profesional.'
    },
    features: [
      {
        icon: MessageCircle,
        title: 'Chat/Video/Voice',
        description: 'Pilih metode konsultasi yang paling nyaman untukmu'
      },
      {
        icon: Clock,
        title: 'Jadwal Fleksibel',
        description: 'Booking kapan saja, bahkan same-day appointment'
      },
      {
        icon: Shield,
        title: 'Data Terenkripsi',
        description: 'Privasi dan keamanan data dijamin dengan enkripsi end-to-end'
      },
      {
        icon: Users,
        title: 'Multi Spesialisasi',
        description: 'Akses ke berbagai dokter spesialis dan ahli kesehatan'
      }
    ],
    topics: [
      'Konsultasi Dokter Umum',
      'Psikolog & Kesehatan Mental',
      'Dokter Kandungan (SpOG)',
      'Dokter Anak (SpA)',
      'Nutritionist & Dietitian',
      'Konselor Laktasi',
      'Bidan & Maternal Care',
      'Konsultasi Seksualitas'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Pilih Spesialis',
        description: 'Browse profil dokter dan ahli kesehatan yang tersedia'
      },
      {
        step: '2',
        title: 'Booking Jadwal',
        description: 'Pilih waktu konsultasi yang sesuai dengan jadwalmu'
      },
      {
        step: '3',
        title: 'Konsultasi Dimulai',
        description: 'Mulai sesi via chat, voice call, atau video call'
      },
      {
        step: '4',
        title: 'Follow-up',
        description: 'Dapatkan resep digital, catatan, dan follow-up support'
      }
    ],
    benefits: [
      'Akses 24/7 ke profesional kesehatan',
      'Tanpa antrian, hemat waktu',
      'Harga lebih terjangkau dari klinik',
      'Rekam medis digital tersimpan',
      'Resep digital & reminder obat',
      'Follow-up chat gratis 7 hari'
    ],
    pricing: {
      title: 'Paket Konsultasi Online',
      options: [
        {
          name: 'Chat Consultation',
          price: 'Rp 50.000',
          duration: '30 menit',
          features: ['Chat dengan dokter/ahli', 'Respon dalam 2 jam', 'Catatan konsultasi', 'Follow-up 3 hari']
        },
        {
          name: 'Video/Voice Call',
          price: 'Rp 150.000',
          duration: '30 menit',
          features: ['Live consultation', 'Lebih personal & detail', 'Recording session', 'Resep digital', 'Follow-up 7 hari']
        }
      ]
    }
  }
};

export function ServiceDetail({ serviceId, onClose, onServiceClick }: ServiceDetailProps) {
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  
  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);
  
  if (!service) return null;

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200'
    },
    pink: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      border: 'border-pink-200'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200'
    }
  };

  const colors = colorClasses[service.color as keyof typeof colorClasses];
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar onNavigate={() => onClose()} onServiceClick={onServiceClick} />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className={`${colors.bg} rounded-3xl p-12 mb-16 text-center relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl`} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
              <IconComponent className={`w-5 h-5 ${colors.text}`} />
              <span className={`text-sm ${colors.text}`}>Layanan Premium</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-slate-800 mb-6">
              {service.hero.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {service.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
                Mulai Konsultasi
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-full hover:bg-slate-50 transition-colors border border-slate-200">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-800 mb-4">Fitur Unggulan</h2>
            <p className="text-lg text-slate-600">Dirancang khusus untuk kebutuhanmu</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <FeatureIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mb-16 bg-slate-50 rounded-3xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-slate-800 mb-4">Yang Bisa Kamu Konsultasikan</h2>
            <p className="text-lg text-slate-600">Kami siap membantu berbagai kebutuhan kesehatanmu</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.topics.map((topic, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <div className={`flex-shrink-0 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center mt-0.5`}>
                  <Check className={`w-4 h-4 ${colors.text}`} />
                </div>
                <span className="text-slate-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-800 mb-4">Cara Kerjanya</h2>
            <p className="text-lg text-slate-600">Mudah dan simpel, hanya 4 langkah</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
                    <span className={`text-xl ${colors.text}`}>{step.step}</span>
                  </div>
                  <h4 className="text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < service.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16 bg-white rounded-3xl p-12 border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-slate-800 mb-4">Keuntungan untuk Kamu</h2>
            <p className="text-lg text-slate-600">Lebih dari sekedar layanan kesehatan</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center mt-0.5`}>
                  <Check className={`w-4 h-4 ${colors.text}`} />
                </div>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-800 mb-4">{service.pricing.title}</h2>
            <p className="text-lg text-slate-600">Pilih paket yang sesuai dengan kebutuhanmu</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.pricing.options.map((option, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-3xl p-8 border-2 ${index === 1 ? `${colors.border} shadow-xl` : 'border-slate-200'} relative`}
              >
                {index === 1 && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
                    Recommended
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl text-slate-800 mb-2">{option.name}</h4>
                  <div className="mb-1">
                    <span className="text-4xl text-slate-800">{option.price}</span>
                  </div>
                  <p className="text-sm text-slate-500">{option.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center mt-0.5`}>
                        <Check className={`w-3 h-3 ${colors.text}`} />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#kontak');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      onClose();
                    }
                  }}
                  className={`w-full py-3 rounded-full transition-colors ${
                    index === 1 
                      ? `bg-blue-600 text-white hover:bg-blue-700` 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`${colors.bg} rounded-3xl p-12 text-center`}>
          <h2 className="text-3xl text-slate-800 mb-4">
            Siap Memulai?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Tim profesional kami siap membantu perjalanan kesehatanmu. Konsultasi pertama gratis!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.querySelector('#kontak');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-full hover:bg-slate-50 transition-colors border border-slate-200">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}