const fs = require('fs');

const content = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star as StarIcon } from 'lucide-react';

const masJugadosGames = [
  { id: 1, title: 'Fortune Rabbit', provider: 'PGSoft', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
  { id: 2, title: 'Piggy Power Hit the Bonus', provider: 'Playson', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp' },
  { id: 3, title: 'Floating Dragon', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
  { id: 4, title: 'Zeus vs Hades', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' },
  { id: 5, title: 'Auto mega Roulette', provider: 'Evolution', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp' },
  { id: 6, title: 'Yo Dragon', provider: 'PopOK', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp' },
  { id: 7, title: 'Fortune Tiger', provider: 'PGSoft', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp' },
  { id: 8, title: 'Aviator', provider: 'Aviator Studios', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp' },
  { id: 9, title: '4 Pot Riches: Super Wheel', provider: 'Playson', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/009.webp' },
  { id: 10, title: 'Cosmic Clusters!', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/010.webp' },
  { id: 11, title: 'Hot Slot: 777 Cash Out', provider: 'Wazdan', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp' },
  { id: 12, title: "Joker's Jewels", provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
  { id: 13, title: 'Big Bass Splash', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
  { id: 14, title: 'Sweet Bonanza', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp' },
  { id: 15, title: 'Gates of Olympus', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
  { id: 16, title: 'Sugar Rush', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' }
];

export default function MiniMasJugadosCarousel({ onPlayGame }: { onPlayGame?: (game: any) => void }) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(masJugadosGames.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentGames = masJugadosGames.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="flex-1 w-full lg:w-auto bg-[#100d20] border border-[#2a2745] rounded-xl p-4 md:p-5 flex flex-col justify-center shadow-lg min-w-[320px]">
      <div className="flex justify-end items-center w-full mb-3">
        <div className="flex items-center gap-1 text-gray-400">
          <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="hover:text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="hover:text-white transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 h-full content-center"
          >
            {currentGames.map((game, idx) => (
              <div key={game.id} onClick={() => onPlayGame && onPlayGame(game)} className="flex flex-col gap-2 group cursor-pointer">
                <div className="relative aspect-[11/7] rounded-xl border border-[#2a2745] group-hover:border-[#5E2891] group-hover:shadow-[0_0_15px_rgba(94,40,145,0.8)] overflow-hidden bg-gradient-to-br from-[#1a0f2e] to-[#0d071a] flex items-center justify-center transition-all duration-300">
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay opacity-100 transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: \`url("\${game.img}")\` }}></div>
                  
                  {idx === 0 && page === 0 && <div className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">DESTACADO</div>}
                  {idx === 1 && page === 0 && <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">NUEVO</div>}
                  
                  <div className="absolute top-2 right-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity z-10"><StarIcon size={18} fill="currentColor" /></div>
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0">
                    <span className="text-white font-bold text-[13px] leading-tight truncate">
                      {game.title}
                    </span>
                    <span className="text-gray-400 text-[10px]">
                      {game.provider}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', content);
