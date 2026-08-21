import React from 'react';
import { Trophy, Gift, Star as StarIcon, ChevronRight } from 'lucide-react';
import ProvedoresSlots from '../components/ProvedoresSlots';
import BannerCarousel from '../components/BannerCarousel';
import MiniMasJugadosCarousel from '../components/MiniMasJugadosCarousel';

const jokersBanners = [
  { id: 1, image: 'https://salsa-tech.com/wp-content/uploads/pulpo/-ESTRENOS.png' },
  { id: 2, image: 'https://salsa-tech.com/wp-content/uploads/pulpo/-LOS_MAS_JUGADOS.png' }
];

export default function JokersPage({ onPlayGame }: { onPlayGame?: (game: any) => void }) {
  return (
    <>
      {/* Banner Carousel */}
      <div className="w-full">
        <BannerCarousel containerClassName="relative w-full h-[200px] md:h-[320px] bg-gradient-to-br overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer transition-colors duration-500 rounded-xl" />
      </div>

      <ProvedoresSlots />

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
                     {idx === 1 ? 'Ultimate Texas Hold Em' : idx === 2 ? 'Roulette' : idx === 3 ? 'Baccarat' : idx === 4 ? 'Poker' : idx === 5 ? 'Baccarat & Sic Bo' : idx === 6 ? 'Speed Roulette' : idx === 7 ? 'one Blackjack' : idx === 8 ? 'Infinite Blackjack' : idx === 9 ? 'Money Time' : `Juego ${idx + 1}`}
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
