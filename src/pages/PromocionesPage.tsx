import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Trophy, Gift, Ticket, Calendar, ChevronDown, Crown, Goal } from 'lucide-react';
import BannerCarousel from '../components/BannerCarousel';
import { promotionsData } from '../data/promotions';

export default function PromocionesPage() {
  const [activeFilter, setActiveFilter] = useState('todas');
  const [selectedPromoIndex, setSelectedPromoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedPromoIndex !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPromoIndex]);

  if (selectedPromoIndex !== null) {
    const promo = promotionsData[selectedPromoIndex];

    const handlePrev = () => {
      setSelectedPromoIndex(prev => prev === null ? null : (prev - 1 + promotionsData.length) % promotionsData.length);
    };

    const handleNext = () => {
      setSelectedPromoIndex(prev => prev === null ? null : (prev + 1) % promotionsData.length);
    };

    return (
      <div className="flex flex-col gap-6 w-full mt-4">
        <button 
          onClick={() => setSelectedPromoIndex(null)}
          className="flex items-center gap-2 text-gray-400 hover:text-white w-fit transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="font-bold text-sm uppercase tracking-wider">Volver a Promociones</span>
        </button>

        {/* Detail Banner */}
        <div className={`relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[#2a2745] flex items-center justify-between px-4 md:px-8 bg-cover bg-center ${promo.bgClass}`}>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url('${promo.image}')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <button 
            onClick={handlePrev}
            className="z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="z-10 flex flex-col items-center justify-center text-center gap-2 pointer-events-none w-full max-w-2xl mx-auto">
            <span className={`px-3 py-1 rounded-sm text-white text-xs font-black uppercase tracking-wider shadow-md ${promo.tagColor}`}>{promo.tag}</span>
            <h1 className={promo.titleClasses}>{promo.title}</h1>
            {promo.subtitle && <h2 className={promo.subtitleClasses}>{promo.subtitle}</h2>}
            <div className="flex items-center gap-1.5 text-sm text-gray-300 mt-2 font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              <Calendar size={14} /> {promo.validUntil === 'Todos los lunes' ? promo.validUntil : `Válida hasta ${promo.validUntil}`}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center w-full mt-2">
           <button className="bg-[#5b21b6] hover:bg-[#6d28d9] text-white px-12 py-3 rounded-lg font-bold text-sm transition-colors w-full md:w-auto shadow-[0_0_15px_rgba(91,33,182,0.4)]">
              PARTICIPAR AHORA
           </button>
        </div>

        {/* Rules */}
        <div className="flex flex-col gap-6 bg-[#100d20] border border-[#2a2745] rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
              Reglamento de la promoción
            </h3>
            <p className="text-gray-300 font-medium text-lg mt-2">{promo.description}</p>
          </div>
          
          <ul className="flex flex-col gap-3">
            {promo.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-1 w-full mb-2 mt-4">
        <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
          <div className="w-3 h-3 rotate-45 bg-purple-500"></div>
          Promociones
        </h1>
        <p className="text-gray-400 text-sm tracking-wider">Beneficios y experiencias pensadas para vos</p>
      </div>

      <section className="flex flex-col lg:flex-row gap-4 w-full lg:h-[320px]">
        {/* Banner Carousel */}
        <BannerCarousel />
        
        {/* Beneficios Destacados Container */}
        <div className="flex-[1.5] bg-[#100d20] border border-[#2a2745] rounded-xl p-5 flex flex-col gap-4 shadow-lg">
          <h3 className="font-bold text-white text-base tracking-wider mb-2">Beneficios destacados</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-[#181530] border border-[#2a2745] flex items-center justify-center group-hover:border-purple-500/50 transition-colors shrink-0">
                <Ticket size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Free Bet</span>
                <span className="text-xs text-gray-500 leading-tight">Jugá sin riesgo con nuestras free bets exclusivas.</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-[#181530] border border-[#2a2745] flex items-center justify-center group-hover:border-purple-500/50 transition-colors shrink-0">
                <Trophy size={24} className="text-yellow-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Torneos semanales</span>
                <span className="text-xs text-gray-500 leading-tight">Competí y ganá increíbles premios cada semana.</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-[#181530] border border-[#2a2745] flex items-center justify-center group-hover:border-purple-500/50 transition-colors shrink-0">
                <Gift size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Premios exclusivos</span>
                <span className="text-xs text-gray-500 leading-tight">Accedé a sorteos y recompensas sólo por jugar.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="w-full flex justify-between items-center mt-4 mb-2">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <button 
            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeFilter === 'todas' ? 'bg-[#5b21b6] text-white border border-[#7c3aed]' : 'bg-[#141226] text-gray-400 border border-[#2a2745] hover:bg-[#1a1733] hover:text-white'}`}
            onClick={() => setActiveFilter('todas')}
          >
            Todas
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeFilter === 'casino' ? 'bg-[#5b21b6] text-white border border-[#7c3aed]' : 'bg-[#141226] text-gray-400 border border-[#2a2745] hover:bg-[#1a1733] hover:text-white'}`}
            onClick={() => setActiveFilter('casino')}
          >
            <Crown size={16} className={activeFilter === 'casino' ? 'text-white' : 'text-purple-400'} /> Casino
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeFilter === 'deportes' ? 'bg-[#5b21b6] text-white border border-[#7c3aed]' : 'bg-[#141226] text-gray-400 border border-[#2a2745] hover:bg-[#1a1733] hover:text-white'}`}
            onClick={() => setActiveFilter('deportes')}
          >
            <Goal size={16} className={activeFilter === 'deportes' ? 'text-white' : 'text-gray-300'} /> Deportes
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeFilter === 'torneos' ? 'bg-[#5b21b6] text-white border border-[#7c3aed]' : 'bg-[#141226] text-gray-400 border border-[#2a2745] hover:bg-[#1a1733] hover:text-white'}`}
            onClick={() => setActiveFilter('torneos')}
          >
            <Trophy size={16} className={activeFilter === 'torneos' ? 'text-white' : 'text-yellow-500'} /> Torneos
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeFilter === 'bonos' ? 'bg-[#5b21b6] text-white border border-[#7c3aed]' : 'bg-[#141226] text-gray-400 border border-[#2a2745] hover:bg-[#1a1733] hover:text-white'}`}
            onClick={() => setActiveFilter('bonos')}
          >
            <Gift size={16} className={activeFilter === 'bonos' ? 'text-white' : 'text-pink-400'} /> Bonos
          </button>
        </div>
        
      </section>

      {/* Promociones Activas */}
      <section className="w-full flex flex-col gap-3">
        <h2 className="text-white font-bold text-lg">Promociones activas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {promotionsData.map((promo, idx) => (
            <div 
              key={promo.id} 
              onClick={() => setSelectedPromoIndex(idx)}
              className={`group relative rounded-xl border border-[#2a2745] overflow-hidden ${promo.bgClass} flex flex-col cursor-pointer transition-transform hover:scale-[1.02]`}
            >
              <div className={`absolute top-3 left-3 ${promo.tagColor} text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md`}>
                {promo.tag}
              </div>
              <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url('${promo.image}')` }}></div>
              <div className={`absolute inset-0 bg-gradient-to-t ${promo.gradientFrom} ${promo.gradientVia} to-transparent`}></div>
              
              <div className="relative z-10 p-5 flex flex-col h-[180px] justify-between">
                <div className={`flex flex-col justify-center mt-2 ${promo.width}`}>
                  {promo.tag === 'SORTEO' || promo.tag === 'TORNEO' ? (
                     <>
                        {promo.tag === 'TORNEO' && <span className="text-yellow-400 font-bold tracking-widest text-sm">TORNEO</span>}
                        <h3 className={promo.titleClasses}>{promo.title}</h3>
                        <h3 className={promo.subtitleClasses}>{promo.subtitle}</h3>
                     </>
                  ) : (
                     <>
                        <h3 className={promo.titleClasses}>{promo.title}</h3>
                     </>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <p className="text-gray-300 text-xs font-medium">{promo.description}</p>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                      <Calendar size={12} /> {promo.validUntil === 'Todos los lunes' ? promo.validUntil : `Válida hasta ${promo.validUntil}`}
                    </div>
                    <button className="bg-[#5b21b6] hover:bg-[#6d28d9] text-white px-4 py-1.5 rounded-md font-bold text-xs flex items-center gap-1 transition-colors">
                      VER MÁS <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
