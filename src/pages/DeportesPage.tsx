import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import MasJugadosSection from '../components/MasJugadosSection';
import Sportsbook from '../sportsbook/Sportsbook';
import { t } from '../i18n';

interface DeportesPageProps {
  games: any[];
  onPlayGame: (game: any) => void;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
}

export default function DeportesPage({ games, onPlayGame, isLoggedIn, onOpenLogin }: DeportesPageProps) {
  return (
    <div className="flex flex-col w-full pb-8">
      {/* Banner Carousel */}
      <div className="w-full">
        <BannerCarousel containerClassName="relative w-full h-[200px] md:h-[320px] bg-gradient-to-br overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer transition-colors duration-500 rounded-xl" />
      </div>

      {/* Sportsbook */}
      <div className="w-full mt-6">
        <Sportsbook isLoggedIn={isLoggedIn} onOpenLogin={onOpenLogin} />
      </div>

      {/* Carousels */}
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto mt-6">
        <MasJugadosSection title={t("MÁS JUGADOS")} games={games} onPlayGame={onPlayGame} />
        <MasJugadosSection title={t("SLOTS")} games={games} onPlayGame={onPlayGame} />
        <MasJugadosSection title={t("AO VIVO")} games={games} onPlayGame={onPlayGame} />
      </div>
    </div>
  );
}
