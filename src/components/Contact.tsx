import React from 'react';
import { Mail, MapPin, Phone, Send, Instagram, Twitter, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-sm text-purple-600">Kontak Kami</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Mari Terhubung dengan Kami
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Punya pertanyaan atau butuh bantuan? Kami siap mendengarkan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-slate-800 mb-6">
                Hubungi Kami
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Tim kami siap membantu kamu. Jangan ragu untuk menghubungi kami melalui channel yang paling nyaman buat kamu.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-800 mb-1">Email</p>
                  <a href="mailto:hello@partnersehatin.id" className="text-blue-600 hover:underline">
                    hello@partnersehatin.id
                  </a>
                  <p className="text-sm text-slate-600 mt-1">Respon dalam 1x24 jam</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-slate-800 mb-1">WhatsApp</p>
                  <a href="https://wa.me/6281234567890" className="text-purple-600 hover:underline">
                    +62 812-3456-7890
                  </a>
                  <p className="text-sm text-slate-600 mt-1">Chat langsung dengan tim kami</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-slate-800 mb-1">Alamat</p>
                  <p className="text-slate-600">
                    Surabaya, Indonesia
                  </p>
                  <p className="text-sm text-slate-600 mt-1">Kunjungi kantor kami (by appointment)</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-slate-800 mb-4">Ikuti Kami</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-2xl text-slate-800 mb-6">
              Kirim Pesan
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama kamu"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Topik yang ingin dibicarakan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Ceritakan ke kami..."
                />
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
