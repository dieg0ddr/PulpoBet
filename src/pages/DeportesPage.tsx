import React from 'react';
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
      {/* Sportsbook */}
      <div className="w-full">
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
