import React from 'react';
import { Calculator, Calendar, Heart, ArrowRight } from 'lucide-react';

interface ToolsProps {
  onToolClick: () => void;
}

export function Tools({ onToolClick }: ToolsProps) {
  const tools = [
    {
      icon: Calendar,
      title: 'Kalkulator Menstruasi & Masa Subur',
      description: 'Hitung siklus menstruasimu dan prediksi masa subur dengan akurat',
      color: 'bg-pink-100 text-pink-600',
      onClick: onToolClick
    },
    {
      icon: Heart,
      title: 'Wedding Planner',
      description: 'Rencanakan pernikahan impianmu dengan timeline dan checklist lengkap',
      color: 'bg-purple-100 text-purple-600',
      onClick: () => {} // Placeholder for future feature
    }
  ];

  return (
    <section id="tools" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-sm text-purple-600">Tools & Kalkulator</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Alat Bantu untuk Kesehatanmu
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tools praktis yang membantu kamu lebih memahami tubuh dan merencanakan masa depan
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <button
                key={index}
                onClick={tool.onClick}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all group border border-slate-100 text-left w-full"
              >
                <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl text-slate-800 mb-3">
                  {tool.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {tool.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                  <span>Mulai Gunakan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}