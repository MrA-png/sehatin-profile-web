import React from 'react';
import { Heart, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Layanan': [
      'Kesehatan Mental',
      'Kesehatan Reproduksi',
      'Kesehatan Ibu & Anak',
      'Konsultasi Online'
    ],
    'Komunitas': [
      'Support Groups',
      'Event & Workshop',
      'Volunteer Program',
      'Artikel & Resources'
    ],
    'Tentang': [
      'Tentang Partner SEHATin',
      'Tim Kami',
      'Mitra & Partner',
      'Karir'
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-2xl">Partner SEHATin</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Ruang aman untuk Gen Z dalam membahas kesehatan mental, reproduksi, 
              serta kesehatan ibu dan anak. Karena kesehatanmu adalah prioritas kami.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-300 mb-1">Email Kami</p>
                <a href="mailto:hello@partnersehatin.id" className="text-slate-400 hover:text-blue-400 transition-colors">
                  hello@partnersehatin.id
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-300 mb-1">Lokasi</p>
                <p className="text-slate-400">
                  Surabaya, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 Partner SEHATin. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}