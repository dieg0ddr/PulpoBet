import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import MasJugadosSection from '../components/MasJugadosSection';

interface DeportesPageProps {
  games: any[];
  onPlayGame: (game: any) => void;
}

export default function DeportesPage({ games, onPlayGame }: DeportesPageProps) {
  return (
    <div className="flex flex-col w-full pb-8">
      {/* Banner Carousel */}
      <div className="w-full">
        <BannerCarousel containerClassName="relative w-full h-[200px] md:h-[320px] bg-gradient-to-br overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer transition-colors duration-500 rounded-xl" />
      </div>

      {/* Static Alternar Image */}
      <div className="w-full flex justify-center py-6 mt-4">
        {/* Desktop Image */}
        <img 
          src="http://salsa-tech.com/wp-content/uploads/pulpo/alternar-desktop.jpg" 
          alt="Alternar Desktop" 
          className="hidden md:block w-full max-w-7xl mx-auto rounded-xl object-cover shadow-lg"
        />
        {/* Mobile Image */}
        <img 
          src="http://salsa-tech.com/wp-content/uploads/pulpo/alternar-mobile.png" 
          alt="Alternar Mobile" 
          className="block md:hidden w-full object-cover rounded-xl"
        />
      </div>

      {/* Carousels */}
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto mt-6">
        <MasJugadosSection title="MÁS JUGADOS" games={games} onPlayGame={onPlayGame} />
        <MasJugadosSection title="SLOTS" games={games} onPlayGame={onPlayGame} />
        <MasJugadosSection title="AO VIVO" games={games} onPlayGame={onPlayGame} />
      </div>
    </div>
  );
}
