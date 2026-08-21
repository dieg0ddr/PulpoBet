import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const banners = [
  {
    id: 1,
    badge: 'TORNEO',
    badgeColor: 'text-[#bf87ff]',
    title: 'AMIGOS DEL PULPO',
    subtitle: '$3.000.000',
    subtitleGradient: 'from-[#00ffd5] to-[#00b8ff]',
    description: '20 GANADORES • EXCLUSIVO RUBYPLAY',
    buttonText: 'PARTICIPAR AHORA',
    bgGradient: 'from-[#120a2e] to-[#0a0517]',
    blobGradient: 'from-purple-600 to-blue-500',
    image: 'https://cms.pulpobet.club/media/images/backbanners/img_WEB_ES_bebb903b-e3ec-4f0f-9631-fa4fddc61c97.jpg'
  },
  {
    id: 2,
    badge: 'MÁS JUGADOS',
    badgeColor: 'text-yellow-400',
    title: 'LOS MÁS POPULARES',
    subtitle: '$100.000 EN PREMIOS',
    subtitleGradient: 'from-yellow-400 to-orange-500',
    description: 'DESCUBRE LOS JUEGOS FAVORITOS',
    buttonText: 'JUGÁ AHORA',
    bgGradient: 'from-[#1a1205] to-[#0d0902]',
    blobGradient: 'from-yellow-600 to-orange-500',
    image: 'https://cms.pulpobet.club/media/images/backbanners/img_WEB_ES_d835dfda-4fe2-4d79-a66a-55b864a4b7fe.jpg'
  },
  {
    id: 3,
    badge: 'CRASH DESTACADO',
    badgeColor: 'text-pink-400',
    title: 'BALLOON',
    subtitle: 'JACKPOT $1.000.000',
    subtitleGradient: 'from-pink-400 to-rose-500',
    description: 'VIVE LA ADRENALINA',
    buttonText: 'JUGÁ AHORA',
    bgGradient: 'from-[#1a0512] to-[#0d0209]',
    blobGradient: 'from-pink-600 to-rose-500',
    image: 'https://cms.pulpobet.club/media/images/backbanners/img_WEB_ES_9bc75989-6518-4c8e-a2bc-c17cf10e5c9d.jpg'
  }
];

export default function BannerCarousel({ containerClassName = "relative flex-[3.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500 aspect-[430/265] md:aspect-auto md:min-h-[250px] lg:min-h-0", hideText = false, customBanners }: any) {
  const displayBanners = customBanners || banners;
  const [bannerIndex, setBannerIndex] = useState(0);

  const nextBanner = () => setBannerIndex((prev) => (prev + 1) % displayBanners.length);
  const prevBanner = () => setBannerIndex((prev) => (prev - 1 + displayBanners.length) % displayBanners.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${containerClassName} ${displayBanners[bannerIndex].bgGradient}`}>
      <AnimatePresence mode="wait">
        {displayBanners[bannerIndex].image && (
          <motion.div
            key={`bg-${bannerIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${displayBanners[bannerIndex].image})` }}
          />
        )}
      </AnimatePresence>
      {!displayBanners[bannerIndex].image && (
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

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {displayBanners.map((_, idx) => (
          <div 
            key={idx} 
            onClick={(e) => { e.stopPropagation(); setBannerIndex(idx); }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === bannerIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/30 hover:bg-white/50'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
