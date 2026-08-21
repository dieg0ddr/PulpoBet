import React, { useState, useEffect } from 'react';
import { Maximize, Monitor, ChevronLeft, ChevronRight, Star as StarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RecomendadosCarousel from '../components/RecomendadosCarousel';

const recomendados = [
  { id: 1, title: 'Mesa en Vivo 1', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/11521.jpg' },
  { id: 2, title: 'Ultimate Texas Hold Em', img: 'https://cms.pulpobet.club/media/images/games/12441.svg?v=2' },
  { id: 3, title: 'Roulette', img: 'https://cms.pulpobet.club/media/images/games/12384.jpg?v=2' },
  { id: 4, title: 'Baccarat', img: 'https://cms.pulpobet.club/media/images/games/12035.png?v=2' },
  { id: 5, title: 'Poker', img: 'https://cms.pulpobet.club/media/images/games/13465.png?v=2' },
  { id: 6, title: 'Baccarat & Sic Bo', img: 'https://cms.pulpobet.club/media/images/games/13464.png?v=2' },
  { id: 7, title: 'Speed Roulette', img: 'https://cms.pulpobet.club/media/images/games/11557.svg?v=3' },
  { id: 8, title: 'one Blackjack', img: 'https://cms.pulpobet.club/media/images/games/7261.jpg?v=2' },
  { id: 9, title: 'Infinite Blackjack', img: 'https://cms.pulpobet.club/media/images/games/12417.svg?v=2' },
  { id: 10, title: 'Money Time', img: 'https://cms.pulpobet.club/media/images/games/15731.jpg?v=1' },
];

export default function GamePage({ gameUrl = "https://spp.patagoniaentertainment.com/game.do?token=free&type=demo&lang=pt&pn=free" }) {
  const [page, setPage] = useState(0);

    const [winnerIndex, setWinnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinnerIndex(prev => (prev - 1 + winners.length) % winners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    const winners = [
    { id: 1, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
    { id: 2, user: 'maXXXXXXia', prize: 'ARS$ 2.450,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp' },
    { id: 3, user: 'paXXXla', prize: 'ARS$ 1.440,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 4, user: 'roXXXXXXto', prize: 'ARS$ 8.900,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' },
    { id: 5, user: 'juXXXXXXan', prize: 'ARS$ 3.500,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp' },
    { id: 6, user: 'feXXXXXXpe', prize: 'ARS$ 5.220,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp' },
    { id: 7, user: 'caXXXXXXos', prize: 'ARS$ 1.050,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp' },
    { id: 8, user: 'luXXXXXXis', prize: 'ARS$ 4.300,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp' },
    { id: 9, user: 'anXXXXXXna', prize: 'ARS$ 7.890,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/009.webp' },
    { id: 10, user: 'diXXXXXXgo', prize: 'ARS$ 2.100,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/010.webp' },
    { id: 11, user: 'seXXXXXXio', prize: 'ARS$ 9.400,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp' },
    { id: 12, user: 'vaXXXXXXia', prize: 'ARS$ 6.340,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
    { id: 13, user: 'leXXXXXXdo', prize: 'ARS$ 1.800,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
    { id: 14, user: 'gaXXXXXXel', prize: 'ARS$ 3.750,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp' },
    { id: 15, user: 'brXXXXXXno', prize: 'ARS$ 5.990,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 16, user: 'tiXXXXXXgo', prize: 'ARS$ 8.120,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' },
    { id: 17, user: 'raXXXXXXel', prize: 'ARS$ 2.650,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp' },
    { id: 18, user: 'miXXXXXXel', prize: 'ARS$ 4.900,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp' },
    { id: 19, user: 'soXXXXXXia', prize: 'ARS$ 1.250,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp' },
    { id: 20, user: 'peXXXXXXro', prize: 'ARS$ 7.450,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp' },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px]">
        {/* IFrame Container */}
        <div className="flex-[3] bg-black rounded-xl overflow-hidden border border-[#2a2745] flex flex-col shadow-lg relative min-h-[400px]">
          <iframe 
            src={gameUrl}
            className="w-full h-full flex-1 border-none"
            allowFullScreen
          ></iframe>
          <div className="h-12 bg-[#120f21] flex items-center justify-end px-4 gap-4 border-t border-[#2a2745]">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Monitor size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* Ultimos Ganadores Sidebar */}
        <div className="flex-[1] bg-[#120f21] border border-[#2a2745] rounded-xl flex flex-col p-5 overflow-hidden shadow-lg min-w-[280px] h-[400px] lg:h-auto">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            Últimos ganadores
          </h3>
          <div className="flex-1 overflow-hidden relative flex flex-col">
            <div className="absolute inset-0 flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {[
                  ...winners.slice(winnerIndex),
                  ...winners.slice(0, winnerIndex)
                ].slice(0, 9).map((winner) => (
                  <motion.div 
                    key={winner.id}
                    layout
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-center gap-3"
                  >
                    <img src={winner.img} alt="Game" className="w-16 h-10 object-cover rounded-md border border-[#2a2745]" />
                    <div className="flex flex-col">
                      <span className="text-sm text-white font-bold">{winner.user}</span>
                      <span className="text-xs text-purple-400 font-bold">Premio: {winner.prize}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl">
        Prueba nuestra gran selección de Slots, desde juegos de una línea a juegos con 1.024 maneras de ganar. Ciertamente encontrarás un género y estilo de juego a tu medida.
      </div>

      <RecomendadosCarousel title="Recomendados para vos" hideVerMas />
    </div>
  );
}
