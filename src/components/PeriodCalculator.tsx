import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Droplet, Sparkles, TrendingUp, Circle, AlertCircle } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PeriodCalculatorProps {
  onClose: () => void;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  phase: 'menstruation' | 'proliferative' | 'ovulation' | 'secretory' | null;
  isToday: boolean;
  isSelected: boolean;
}

export function PeriodCalculator({ onClose }: PeriodCalculatorProps) {
  const [periodStartDate, setPeriodStartDate] = useState<Date | null>(null);
  const [periodEndDate, setPeriodEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDateClick = (date: Date) => {
    if (!periodStartDate) {
      // First click - set start date
      setPeriodStartDate(date);
      setPeriodEndDate(null);
    } else if (!periodEndDate) {
      // Second click - set end date
      if (date > periodStartDate) {
        setPeriodEndDate(date);
      } else {
        // If clicked date is before start, reset and start over
        setPeriodStartDate(date);
        setPeriodEndDate(null);
      }
    } else {
      // Third click - reset and start over
      setPeriodStartDate(date);
      setPeriodEndDate(null);
    }
  };

  const handleReset = () => {
    setPeriodStartDate(null);
    setPeriodEndDate(null);
  };

  // Calculate cycle phases
  const cycleData = useMemo(() => {
    if (!periodStartDate || !periodEndDate) return null;

    const menstruationDuration = Math.ceil((periodEndDate.getTime() - periodStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    // Standard 28-day cycle calculation
    const cycleLength = 28;
    
    // Menstruation phase: day 1-5 (or based on user selection)
    const menstruationStart = new Date(periodStartDate);
    const menstruationEnd = new Date(periodEndDate);
    
    // Proliferative phase (Follicular/Growing Follicle): after menstruation until ovulation
    const proliferativeStart = new Date(menstruationEnd);
    proliferativeStart.setDate(proliferativeStart.getDate() + 1);
    
    // Ovulation: typically day 14 of a 28-day cycle
    const ovulationDate = new Date(menstruationStart);
    ovulationDate.setDate(ovulationDate.getDate() + 13); // Day 14 (0-indexed = 13)
    
    const proliferativeEnd = new Date(ovulationDate);
    proliferativeEnd.setDate(proliferativeEnd.getDate() - 1);
    
    // Secretory phase (Luteal/Corpus Luteum): after ovulation until next menstruation
    const secretoryStart = new Date(ovulationDate);
    secretoryStart.setDate(secretoryStart.getDate() + 1);
    
    const nextMenstruationStart = new Date(menstruationStart);
    nextMenstruationStart.setDate(nextMenstruationStart.getDate() + cycleLength);
    
    const secretoryEnd = new Date(nextMenstruationStart);
    secretoryEnd.setDate(secretoryEnd.getDate() - 1);

    // Next cycles
    const nextPeriodStart = new Date(nextMenstruationStart);
    const nextPeriodEnd = new Date(nextPeriodStart);
    nextPeriodEnd.setDate(nextPeriodEnd.getDate() + menstruationDuration - 1);

    const secondPeriodStart = new Date(nextPeriodStart);
    secondPeriodStart.setDate(secondPeriodStart.getDate() + cycleLength);

    const thirdPeriodStart = new Date(secondPeriodStart);
    thirdPeriodStart.setDate(thirdPeriodStart.getDate() + cycleLength);

    return {
      menstruationStart,
      menstruationEnd,
      menstruationDuration,
      proliferativeStart,
      proliferativeEnd,
      ovulationDate,
      secretoryStart,
      secretoryEnd,
      cycleLength,
      nextPeriodStart,
      nextPeriodEnd,
      secondPeriodStart,
      thirdPeriodStart
    };
  }, [periodStartDate, periodEndDate]);

  // Determine phase for a given date
  const getPhaseForDate = (date: Date): 'menstruation' | 'proliferative' | 'ovulation' | 'secretory' | null => {
    if (!cycleData) return null;

    const time = date.getTime();
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

    // Check current cycle
    const menstruationStart = new Date(cycleData.menstruationStart.getFullYear(), cycleData.menstruationStart.getMonth(), cycleData.menstruationStart.getDate()).getTime();
    const menstruationEnd = new Date(cycleData.menstruationEnd.getFullYear(), cycleData.menstruationEnd.getMonth(), cycleData.menstruationEnd.getDate()).getTime();
    const proliferativeStart = new Date(cycleData.proliferativeStart.getFullYear(), cycleData.proliferativeStart.getMonth(), cycleData.proliferativeStart.getDate()).getTime();
    const proliferativeEnd = new Date(cycleData.proliferativeEnd.getFullYear(), cycleData.proliferativeEnd.getMonth(), cycleData.proliferativeEnd.getDate()).getTime();
    const ovulationDate = new Date(cycleData.ovulationDate.getFullYear(), cycleData.ovulationDate.getMonth(), cycleData.ovulationDate.getDate()).getTime();
    const secretoryStart = new Date(cycleData.secretoryStart.getFullYear(), cycleData.secretoryStart.getMonth(), cycleData.secretoryStart.getDate()).getTime();
    const secretoryEnd = new Date(cycleData.secretoryEnd.getFullYear(), cycleData.secretoryEnd.getMonth(), cycleData.secretoryEnd.getDate()).getTime();

    if (dateOnly >= menstruationStart && dateOnly <= menstruationEnd) return 'menstruation';
    if (dateOnly === ovulationDate) return 'ovulation';
    if (dateOnly >= proliferativeStart && dateOnly <= proliferativeEnd) return 'proliferative';
    if (dateOnly >= secretoryStart && dateOnly <= secretoryEnd) return 'secretory';

    // Check next cycles (menstruation only for visualization)
    const nextPeriodStart = new Date(cycleData.nextPeriodStart.getFullYear(), cycleData.nextPeriodStart.getMonth(), cycleData.nextPeriodStart.getDate()).getTime();
    const nextPeriodEnd = new Date(cycleData.nextPeriodEnd.getFullYear(), cycleData.nextPeriodEnd.getMonth(), cycleData.nextPeriodEnd.getDate()).getTime();
    
    if (dateOnly >= nextPeriodStart && dateOnly <= nextPeriodEnd) return 'menstruation';

    const secondPeriodStart = new Date(cycleData.secondPeriodStart.getFullYear(), cycleData.secondPeriodStart.getMonth(), cycleData.secondPeriodStart.getDate()).getTime();
    const secondPeriodEnd = secondPeriodStart + (cycleData.menstruationDuration - 1) * 24 * 60 * 60 * 1000;
    
    if (dateOnly >= secondPeriodStart && dateOnly <= secondPeriodEnd) return 'menstruation';

    const thirdPeriodStart = new Date(cycleData.thirdPeriodStart.getFullYear(), cycleData.thirdPeriodStart.getMonth(), cycleData.thirdPeriodStart.getDate()).getTime();
    const thirdPeriodEnd = thirdPeriodStart + (cycleData.menstruationDuration - 1) * 24 * 60 * 60 * 1000;
    
    if (dateOnly >= thirdPeriodStart && dateOnly <= thirdPeriodEnd) return 'menstruation';

    return null;
  };

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const startingDayOfWeek = firstDay.getDay();
    const days: CalendarDay[] = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthDays - i);
      days.push({
        date,
        isCurrentMonth: false,
        phase: null,
        isToday: false,
        isSelected: false
      });
    }
    
    // Current month days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      date.setHours(0, 0, 0, 0);
      
      const phase = getPhaseForDate(date);
      
      // Check if selected
      let isSelected = false;
      if (periodStartDate && periodEndDate) {
        const startTime = new Date(periodStartDate.getFullYear(), periodStartDate.getMonth(), periodStartDate.getDate()).getTime();
        const endTime = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth(), periodEndDate.getDate()).getTime();
        const dateTime = date.getTime();
        isSelected = dateTime >= startTime && dateTime <= endTime;
      } else if (periodStartDate) {
        const startTime = new Date(periodStartDate.getFullYear(), periodStartDate.getMonth(), periodStartDate.getDate()).getTime();
        isSelected = date.getTime() === startTime;
      }
      
      days.push({
        date,
        isCurrentMonth: true,
        phase,
        isToday: date.getTime() === today.getTime(),
        isSelected
      });
    }
    
    // Next month days to fill grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        isCurrentMonth: false,
        phase: null,
        isToday: false,
        isSelected: false
      });
    }
    
    return days;
  }, [currentMonth, cycleData, periodStartDate, periodEndDate]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthName = currentMonth.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={() => onClose()} />
      
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-pink-600" />
            <span className="text-sm text-pink-600">Tools Kesehatan</span>
          </div>
          <h1 className="text-4xl lg:text-5xl text-slate-800 mb-6">
            Kalkulator Menstruasi & Masa Subur
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Pilih tanggal mulai dan selesai menstruasi di kalender untuk melihat prediksi siklus lengkapmu
          </p>
          
          {/* Instructions */}
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center">1</div>
              <span>Klik tanggal mulai haid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center">2</div>
              <span>Klik tanggal selesai haid</span>
            </div>
          </div>

          {periodStartDate && !periodEndDate && (
            <p className="text-sm text-pink-600">
              Mulai: {formatDate(periodStartDate)} - Sekarang pilih tanggal selesai menstruasi
            </p>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 mb-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-slate-800">{monthName}</h3>
            <div className="flex gap-2">
              <button
                onClick={goToPreviousMonth}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={goToNextMonth}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
              {(periodStartDate || periodEndDate) && (
                <button
                  onClick={handleReset}
                  className="ml-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
              <div key={day} className="text-center text-sm text-slate-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => {
              let dayClass = 'aspect-square flex items-center justify-center rounded-lg relative transition-all cursor-pointer';
              
              if (!day.isCurrentMonth) {
                dayClass += ' text-slate-300';
              } else {
                dayClass += ' text-slate-800 hover:ring-2 hover:ring-blue-300';
              }

              // Phase styling
              if (day.phase === 'menstruation') {
                dayClass += ' bg-pink-500 text-white font-semibold';
              } else if (day.phase === 'ovulation') {
                dayClass += ' bg-purple-500 text-white font-semibold';
              } else if (day.phase === 'proliferative') {
                dayClass += ' bg-blue-100 border-2 border-blue-400';
              } else if (day.phase === 'secretory') {
                dayClass += ' bg-amber-100 border-2 border-amber-400';
              }

              // Today styling
              if (day.isToday && !day.phase) {
                dayClass += ' ring-2 ring-blue-500';
              }

              // Selected styling (during selection)
              if (day.isSelected && !cycleData) {
                dayClass += ' bg-pink-200 border-2 border-pink-600';
              }

              return (
                <button
                  key={index}
                  className={dayClass}
                  onClick={() => day.isCurrentMonth && handleDateClick(day.date)}
                  disabled={!day.isCurrentMonth}
                >
                  <span className="text-sm">{day.date.getDate()}</span>
                  {day.phase === 'ovulation' && (
                    <Sparkles className="w-3 h-3 absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-8">
          <h4 className="text-sm text-slate-700 mb-4">Keterangan Fase Siklus:</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-800">Menstruasi</p>
                <p className="text-xs text-slate-500">Hari 1-5</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 border-2 border-blue-400 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-800">Proliferative Phase</p>
                <p className="text-xs text-slate-500">Growing Follicle</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-800">Ovulation</p>
                <p className="text-xs text-slate-500">Oocyte (Day 14)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 border-2 border-amber-400 rounded-lg flex items-center justify-center">
                <Circle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-slate-800">Secretory Phase</p>
                <p className="text-xs text-slate-500">Corpus Luteum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis & Predictions */}
        {cycleData ? (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                    <Droplet className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-slate-800">Durasi Menstruasi</h4>
                </div>
                <p className="text-2xl text-slate-800 mb-1">{cycleData.menstruationDuration} hari</p>
                <p className="text-sm text-slate-600">
                  {formatDate(cycleData.menstruationStart)} - {formatDate(cycleData.menstruationEnd)}
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-slate-800">Ovulasi</h4>
                </div>
                <p className="text-xl text-slate-800 mb-1">{formatDate(cycleData.ovulationDate)}</p>
                <p className="text-sm text-slate-600">Puncak kesuburan</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-slate-800">Menstruasi Berikutnya</h4>
                </div>
                <p className="text-xl text-slate-800 mb-1">{formatDate(cycleData.nextPeriodStart)}</p>
                <p className="text-sm text-slate-600">Prediksi periode berikutnya</p>
              </div>
            </div>

            {/* Detailed Phase Information */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200">
              <h3 className="text-2xl text-slate-800 mb-6">Detail Fase Siklus Menstruasi</h3>
              
              <div className="space-y-6">
                {/* Menstruation Phase */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800 mb-2">Fase Menstruasi (Hari 1-{cycleData.menstruationDuration})</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      {formatDate(cycleData.menstruationStart)} - {formatDate(cycleData.menstruationEnd)}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Fase ketika lapisan dinding rahim (endometrium) meluruh dan keluar dari tubuh dalam bentuk darah menstruasi. 
                      Hormon estrogen dan progesteron berada di level terendah. Kamu mungkin merasakan kram, lelah, atau mood swing.
                    </p>
                  </div>
                </div>

                {/* Proliferative Phase */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 border-2 border-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800 mb-2">Proliferative Phase / Growing Follicle (Hari {cycleData.menstruationDuration + 1}-13)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      {formatDate(cycleData.proliferativeStart)} - {formatDate(cycleData.proliferativeEnd)}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Setelah menstruasi, estrogen mulai meningkat dan merangsang pertumbuhan folikel di ovarium. 
                      Lapisan rahim mulai menebal kembali untuk persiapan kemungkinan kehamilan. Ini adalah masa di mana energi dan mood biasanya membaik.
                    </p>
                  </div>
                </div>

                {/* Ovulation Phase */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800 mb-2">Ovulation / Oocyte (Hari 14)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      {formatDate(cycleData.ovulationDate)}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Sel telur matang dilepaskan dari ovarium dan siap untuk dibuahi. Ini adalah puncak masa subur dan waktu terbaik untuk konsepsi. 
                      Lonjakan hormon LH (Luteinizing Hormone) memicu pelepasan sel telur. Beberapa wanita merasakan nyeri ringan di salah satu sisi perut.
                    </p>
                  </div>
                </div>

                {/* Secretory Phase */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 border-2 border-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Circle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800 mb-2">Secretory Phase / Corpus Luteum (Hari 15-28)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      {formatDate(cycleData.secretoryStart)} - {formatDate(cycleData.secretoryEnd)}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Setelah ovulasi, folikel yang kosong berubah menjadi corpus luteum yang memproduksi progesteron. 
                      Hormon ini mempersiapkan rahim untuk implantasi jika terjadi pembuahan. Jika tidak ada pembuahan, 
                      corpus luteum akan luruh, hormon turun, dan siklus baru dimulai dengan menstruasi. Fase ini sering dikaitkan dengan PMS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-lg text-slate-800 mb-3">💡 Tips Sehat Setiap Fase</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-pink-600">•</span>
                  <span><strong>Menstruasi:</strong> Istirahat cukup, kompres hangat untuk kram, konsumsi makanan kaya zat besi</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Proliferative:</strong> Waktu terbaik untuk olahraga intens, produktivitas tinggi</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span><strong>Ovulasi:</strong> Masa subur, perhatikan perubahan lendir serviks yang lebih jernih dan elastis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Secretory:</strong> Kelola stress, hindari makanan tinggi garam, lakukan relaksasi untuk mengurangi PMS</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-500 mb-2">Pilih tanggal menstruasi di kalender untuk melihat analisa lengkap</p>
            <p className="text-sm text-slate-400">Klik tanggal mulai, lalu klik tanggal selesai menstruasimu</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
