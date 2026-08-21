import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Crown } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  provider: string;
  img: string;
}

interface MasJugadosSectionProps {
  title: string;
  games: Game[];
  onPlayGame?: (game: Game) => void;
}

export default function MasJugadosSection({ title, games, onPlayGame }: MasJugadosSectionProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % games.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [games.length]);

  return (
    <section className="w-full flex flex-col gap-3 mt-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h2 className="text-white font-bold tracking-wider flex items-center gap-2 text-lg uppercase">
            <Crown className="text-yellow-500" size={20} />
            {title}
          </h2>
          <div className="flex items-center gap-1 text-gray-400">
            <button 
              className="hover:text-white transition-colors"
              onClick={() => setIndex(prev => (prev - 1 + games.length) % games.length)}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="hover:text-white transition-colors"
              onClick={() => setIndex(prev => (prev + 1) % games.length)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-transparent border border-white text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold transition-all">
          Ver todos
        </button>
      </div>
      
      <div className="relative w-full h-[135px] md:h-[192px]">
        <div className="absolute inset-0 flex items-center gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {[
              ...games.slice(index),
              ...games.slice(0, index)
            ].slice(0, 8).map((game) => (
                <motion.div 
                  key={game.id}
                  onClick={() => onPlayGame && onPlayGame(game)}
                  layout
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-[110px] h-[135px] md:w-[165px] md:h-[192px] shrink-0 rounded-xl border border-[#2a2745] hover:border-purple-500/50 overflow-hidden relative cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${game.img}")` }}></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 flex flex-col items-center justify-end z-20 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white font-bold text-[11px] md:text-[13px] uppercase tracking-tight leading-tight line-clamp-2 drop-shadow-md">{game.title}</span>
                    <span className="text-gray-300 text-[8px] md:text-[9px] uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
                      {game.provider}
                    </span>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
