import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Trophy, Gift, Star as StarIcon } from 'lucide-react';
import CasinoEnVivoSection from '../components/CasinoEnVivoSection';

export default function CasinoEnVivoPage() {
  const [bannerIndex, setBannerIndex] = useState(0);
  
  const banners = [
    {
      id: 1,
      badge: 'NUEVO JUEGO EN VIVO',
      badgeColor: 'text-purple-400',
      title: 'MESA VIP',
      subtitle: 'BLACKJACK',
      subtitleGradient: 'from-purple-400 via-pink-400 to-red-400',
      description: 'Crupieres reales las 24hs. Apuestas desde ARS$ 500.',
      buttonText: 'JUGAR AHORA',
      bgGradient: 'from-[#1a0f2e] to-[#0d071a]',
      blobGradient: 'from-purple-600/40 to-pink-600/40',
      image: 'https://salsa-tech.com/wp-content/uploads/pulpo/mesa-vip-blackjack.png'
    },
    {
      id: 2,
      badge: 'RULETA EN VIVO',
      badgeColor: 'text-green-400',
      title: 'RULETA',
      subtitle: 'RELÁMPAGO',
      subtitleGradient: 'from-green-400 via-emerald-400 to-teal-400',
      description: 'Multiplicadores de hasta 500x en cada ronda.',
      buttonText: 'APOSTAR',
      bgGradient: 'from-[#0f2e1a] to-[#071a0d]',
      blobGradient: 'from-green-600/40 to-emerald-600/40',
      image: 'https://salsa-tech.com/wp-content/uploads/pulpo/roleta-relampago-aovivo.png'
    }
  ];

  const nextBanner = () => setBannerIndex((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 w-full lg:h-[320px]">
        {/* TV Banner */}
        <div className={`relative flex-[3.5] aspect-[430/265] md:aspect-auto md:min-h-[250px] lg:min-h-0 bg-gradient-to-br ${banners[bannerIndex].bgGradient} border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500`}>
          <AnimatePresence mode="wait">
            {banners[bannerIndex].image && (
              <motion.div
                key={`bg-${bannerIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${banners[bannerIndex].image})` }}
              />
            )}
          </AnimatePresence>
          {!banners[bannerIndex].image && (
            <>
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-0"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent z-0"></div>
            </>
          )}
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevBanner(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextBanner(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={bannerIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col gap-2 max-w-[85%] md:max-w-[70%]"
            >
              <span className={`${banners[bannerIndex].badgeColor} font-bold text-xs md:text-sm tracking-widest uppercase mb-1`}>{banners[bannerIndex].badge}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">{banners[bannerIndex].title}</h1>
              <div className={`text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${banners[bannerIndex].subtitleGradient} drop-shadow-lg my-1 md:my-2`}>
                {banners[bannerIndex].subtitle}
              </div>
              <p className="text-gray-300 font-medium text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-4">
                {banners[bannerIndex].description}
              </p>
              <button className="w-fit bg-gradient-to-r from-[#6b25e6] to-[#4514a6] hover:from-[#7c37f7] hover:to-[#551fc2] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(107,37,230,0.6)] transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                {banners[bannerIndex].buttonText}
              </button>
            </motion.div>
          </AnimatePresence>

          {!banners[bannerIndex].image && (
            <div className="absolute right-10 bottom-0 top-0 w-[40%] flex items-center justify-center pointer-events-none z-0">
              <div className={`absolute w-[300px] h-[300px] bg-gradient-to-tr ${banners[bannerIndex].blobGradient} rounded-full blur-[80px] transition-colors duration-500 opacity-80 mix-blend-screen`}></div>
            </div>
          )}
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, idx) => (
              <div 
                key={idx} 
                onClick={(e) => { e.stopPropagation(); setBannerIndex(idx); }}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === bannerIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/30 hover:bg-white/50'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Favoritos Container */}
        <div className="flex-[1] bg-[#100d20] border border-[#2a2745] rounded-xl p-5 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-4 h-4 text-purple-400">⚡</div>
            <h3 className="font-bold text-sm tracking-wider">MESAS VIP</h3>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
            <div className="bg-[#181530] border border-[#2a2745] rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#201d3a] hover:border-purple-500/50 transition-all group">
              <Trophy size={32} className="text-yellow-500 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-center">TORNEOS EN VIVO</span>
            </div>
            <div className="bg-[#181530] border border-[#2a2745] rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#201d3a] hover:border-purple-500/50 transition-all group">
              <div className="text-purple-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"><Gift size={32} /></div>
              <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-center">BONOS EXCLUSIVOS</span>
            </div>
            <div className="bg-[#181530] border border-[#2a2745] rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#201d3a] hover:border-purple-500/50 transition-all group">
              <StarIcon size={32} className="text-purple-500 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-center">MIS MESAS</span>
            </div>
            <div className="bg-[#181530] border border-[#2a2745] rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#201d3a] hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center border-2 border-blue-200/30 group-hover:scale-110 transition-transform">
                <span className="font-black text-white">VIP</span>
              </div>
              <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-center">CLUB VIP</span>
            </div>
          </div>
        </div>
      </section>

      <CasinoEnVivoSection />

      <section className="w-full flex flex-col gap-3 mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-[#a8a8b8] font-bold tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
            Recomendados para vos
          </h2>
          <button className="flex items-center gap-1 bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] text-[#a8a8b8] hover:text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all">
            VER MÁS <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div key={idx} className="flex flex-col gap-2 group cursor-pointer">
              <div className="relative aspect-[11/7] rounded-xl border border-[#2a2745] group-hover:border-[#5E2891] group-hover:shadow-[0_0_15px_rgba(94,40,145,0.8)] overflow-hidden bg-gradient-to-br from-[#1a0f2e] to-[#0d071a] flex items-center justify-center transition-all duration-300">
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay opacity-100 transition-transform duration-500 group-hover:scale-110"></div>
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent transition-transform duration-500 group-hover:scale-110"></div>
                 {idx === 0 && <div className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">DESTACADO</div>}
                 {idx === 1 && <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">NUEVO</div>}
                 <div className="absolute top-2 right-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity z-10"><StarIcon size={18} fill="currentColor" /></div>
                 
                 {idx === 0 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/11521.jpg")' }}></div>
                 ) : idx === 1 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/12441.svg?v=2")' }}></div>
                 ) : idx === 2 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/12384.jpg?v=2")' }}></div>
                 ) : idx === 3 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/12035.png?v=2")' }}></div>
                 ) : idx === 4 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/13465.png?v=2")' }}></div>
                 ) : idx === 5 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/13464.png?v=2")' }}></div>
                 ) : idx === 6 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/11557.svg?v=3")' }}></div>
                 ) : idx === 7 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/7261.jpg?v=2")' }}></div>
                 ) : idx === 8 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/12417.svg?v=2")' }}></div>
                 ) : idx === 9 ? (
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url("https://cms.pulpobet.club/media/images/games/15731.jpg?v=1")' }}></div>
                 ) : (
                   <div className="relative z-10 w-16 h-16 rounded-full border-4 border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/50 to-pink-500/50 group-hover:scale-110 transition-transform"></div>
                   </div>
                 )}
                 
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0">
                   <span className="text-white font-bold text-[13px] leading-tight truncate">
                     {idx === 1 ? 'Ultimate Texas Hold Em' : idx === 2 ? 'Roulette' : idx === 3 ? 'Baccarat' : idx === 4 ? 'Poker' : idx === 5 ? 'Baccarat & Sic Bo' : idx === 6 ? 'Speed Roulette' : idx === 7 ? 'one Blackjack' : idx === 8 ? 'Infinite Blackjack' : idx === 9 ? 'Money Time' : `Mesa en Vivo ${idx + 1}`}
                   </span>
                   <span className="text-gray-400 text-[10px]">
                     {idx === 2 || idx === 3 || idx === 8 || idx === 9 ? 'Pragmatic Play' : 'Evolution'}
                   </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
