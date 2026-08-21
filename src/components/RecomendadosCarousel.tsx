import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star as StarIcon } from 'lucide-react';

interface GameHorizontal {
  id: number;
  title: string;
  provider: string;
  img: string;
  badge?: string;
  badgeColor?: string;
  gradient?: string;
}

interface RecomendadosCarouselProps {
  title: string;
  onPlayGame?: (game: any) => void;
  hideVerMas?: boolean;
}

const defaultGames: GameHorizontal[] = [
  { id: 1, title: 'Cosmic Clusters!', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cosmic_clusters.png', badge: 'DESTACADO', badgeColor: 'bg-pink-600', gradient: 'from-green-900/40' },
  { id: 2, title: 'Ronaldinho da Sorte', provider: 'PopOK', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/ronaldinho_da-sorte.png', badge: 'NUEVO', badgeColor: 'bg-green-600', gradient: 'from-yellow-900/40' },
  { id: 3, title: 'Halloween Groove', provider: 'Salsa Studio', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/halloween_Grove.png', badge: 'ON FIRE', badgeColor: 'bg-orange-600', gradient: 'from-red-900/40' },
  { id: 4, title: 'Fortune Tiger', provider: 'PGSoft', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/fortune%20tiger.png', badge: 'DESTACADO', badgeColor: 'bg-pink-600', gradient: 'from-pink-900/40' },
  { id: 5, title: 'Fortune Monkey', provider: 'Banana Games', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/fortune_monkey.png', badge: 'NUEVO', badgeColor: 'bg-green-600', gradient: 'from-blue-900/40' },
  { id: 6, title: 'Zeus vs Hades', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp', badge: 'HOT', badgeColor: 'bg-red-600', gradient: 'from-purple-900/40' },
  { id: 7, title: 'Devil Fire 2', provider: 'Tada Gaming', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp', badge: 'DESTACADO', badgeColor: 'bg-pink-600', gradient: 'from-orange-900/40' },
  { id: 8, title: 'Sweet Bonanza', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp', badge: 'HOT', badgeColor: 'bg-red-600', gradient: 'from-pink-900/40' },
  { id: 9, title: 'Gates of Olympus', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp', badge: '', gradient: 'from-blue-900/40' },
  { id: 10, title: 'Sugar Rush', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp', badge: 'NUEVO', badgeColor: 'bg-green-600', gradient: 'from-purple-900/40' },
  { id: 11, title: 'Big Bass Splash', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp', badge: 'DESTACADO', badgeColor: 'bg-pink-600', gradient: 'from-green-900/40' },
  { id: 12, title: 'Starlight Princess', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp', badge: '', gradient: 'from-yellow-900/40' },
];

export default function RecomendadosCarousel({ title, onPlayGame, hideVerMas = false }: RecomendadosCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex(prev => (prev + 1) % defaultGames.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex(prev => (prev - 1 + defaultGames.length) % defaultGames.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = (arr: GameHorizontal[], currIndex: number, count: number) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(arr[(currIndex + i) % arr.length]);
    }
    return result;
  };

  // Splitting into 2 rows specifically for the mobile 2x2 grid logic (6 items per row)
  const half = Math.ceil(defaultGames.length / 2);
  const row1 = defaultGames.slice(0, half);
  const row2 = defaultGames.slice(half);

  const animationVariants = {
    initial: (dir: number) => ({ opacity: 0, x: dir === 1 ? 100 : -100, scale: 0.95 }),
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir === 1 ? -100 : 100, scale: 0.95 })
  };

  const renderGameCard = (game: GameHorizontal, widthClass: string) => (
    <motion.div 
      key={game.id}
      layout
      custom={direction}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
      className={`${widthClass} shrink-0 aspect-[11/7] relative rounded-xl border border-[#2a2745] hover:border-[#5E2891] hover:shadow-[0_0_15px_rgba(94,40,145,0.8)] transition-all duration-300 overflow-hidden bg-gradient-to-br ${game.gradient || 'from-purple-900/40'} to-black group cursor-pointer`}
      onClick={() => onPlayGame && onPlayGame(game)}
    >
      {game.badge && (
        <div className={`absolute top-2 left-2 ${game.badgeColor} text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md`}>
          {game.badge}
        </div>
      )}
      <div className="absolute top-2 right-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <StarIcon size={18} fill="currentColor" />
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" 
        style={{ backgroundImage: `url("${game.img}")` }}
      ></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0">
        <span className="text-white font-bold text-[13px] leading-tight truncate">{game.title}</span>
        <span className="text-gray-400 text-[10px]">{game.provider}</span>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full flex flex-col gap-3 mt-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h2 className="text-[#a8a8b8] font-bold tracking-wider flex items-center gap-2">
            {title}
          </h2>
          <div className="flex items-center gap-1 text-gray-400">
            <button 
              className="hover:text-white transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="hover:text-white transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        {!hideVerMas && (
          <button className="flex items-center gap-1 bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] text-[#a8a8b8] hover:text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all">
            VER MÁS <ChevronRight size={14} />
          </button>
        )}
      </div>
      
      <div className="relative w-full overflow-hidden py-1">
        {isMobile ? (
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 w-full">
              <AnimatePresence mode="popLayout" custom={direction}>
                {getVisibleItems(row1, index % row1.length, 2).map(game => renderGameCard(game, 'w-[calc(50%-4px)]'))}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 w-full">
              <AnimatePresence mode="popLayout" custom={direction}>
                {getVisibleItems(row2, index % row2.length, 2).map(game => renderGameCard(game, 'w-[calc(50%-4px)]'))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 w-full">
            <AnimatePresence mode="popLayout" custom={direction}>
              {getVisibleItems(defaultGames, index, 5).map(game => renderGameCard(game, 'lg:w-[calc(20%-13px)] md:w-[240px]'))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
