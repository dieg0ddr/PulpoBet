import React, { useState } from 'react';
import { UserAccount, OddSelection } from './types/sportsbook';
import { INITIAL_BETSLIP_SELECTIONS, POPULAR_MULTIPLES } from './data/mockSportsData';
import { Sidebar } from './components/Sidebar';
import { HeroBanner } from './components/HeroBanner';
import { PopularMultiples } from './components/PopularMultiples';
import { MatchesList } from './components/MatchesList';
import { BasketballRows } from './components/BasketballRows';
import { PitchTracker } from './components/PitchTracker';
import { BetSlip } from './components/BetSlip';
import { MobileView } from './components/MobileView';
import { PromoModal } from './components/PromoModal';
import { t } from '../i18n';

interface SportsbookProps {
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
}

/**
 * Sportsbook front adapted from dieg0ddr/Front-Sportsbook, recolored to the PulpoBet palette.
 * PulpoBet's own header, footer, login and bottom nav are reused, so those parts were left out.
 */
export default function Sportsbook({ isLoggedIn = false, onOpenLogin }: SportsbookProps) {
  const [balance, setBalance] = useState(250);
  const user: UserAccount = { isLoggedIn, name: '', email: '', balance };

  const [selections, setSelections] = useState<OddSelection[]>(INITIAL_BETSLIP_SELECTIONS);
  const [selectedSport, setSelectedSport] = useState<string>('futebol');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<string>('Hoje');
  const [selectedCategory, setSelectedCategory] = useState<string>('Futebol');
  const [promoModalTitle, setPromoModalTitle] = useState<string | null>(null);
  const [isMobileBetslipOpen, setIsMobileBetslipOpen] = useState(false);

  const handleToggleOdd = (odd: OddSelection) => {
    setSelections((prev) => {
      const exists = prev.find((s) => s.matchId === odd.matchId && s.outcomeName === odd.outcomeName);
      if (exists) return prev.filter((s) => s.id !== exists.id);
      return [...prev.filter((s) => s.matchId !== odd.matchId), odd];
    });
  };
  const handleRemoveSelection = (id: string) => setSelections((prev) => prev.filter((s) => s.id !== id));
  const handleClearAll = () => setSelections([]);
  const handleOpenAuth = () => onOpenLogin?.();
  const handlePlaceBetSuccess = (stake: number) => setBalance((b) => Math.max(0, b - stake));

  const betSlip = (onSuccess: (stake: number, win: number) => void) => (
    <BetSlip
      selections={selections}
      onRemoveSelection={handleRemoveSelection}
      onClearAll={handleClearAll}
      user={user}
      onOpenAuth={handleOpenAuth}
      onPlaceBetSuccess={onSuccess}
    />
  );

  return (
    <div className="w-full text-[#e1e7ec] font-sans">
      {/* Mobile */}
      <div className="block lg:hidden w-full">
        <MobileView
          user={user}
          onOpenAuth={handleOpenAuth}
          selectedOdds={selections}
          onToggleOdd={handleToggleOdd}
          onOpenDeposit={() => {}}
          onOpenBetslip={() => setIsMobileBetslipOpen(true)}
        />
        {isMobileBetslipOpen && (
          <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xs flex flex-col justify-end">
            <div className="bg-[#100d20] border-t border-[#2a2745] rounded-t-2xl max-h-[85vh] overflow-y-auto p-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#2a2745]">
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  {t("Cupom de Apostas (")}{t(selections.length)})
                </h3>
                <button
                  onClick={() => setIsMobileBetslipOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#1a1733] flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              {t(betSlip((stake, win) => {
                handlePlaceBetSuccess(stake);
                setIsMobileBetslipOpen(false);
              }))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex w-full gap-4 items-start">
        <Sidebar
          selectedTimeFilter={selectedTimeFilter}
          setSelectedTimeFilter={setSelectedTimeFilter}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenPromo={(title) => setPromoModalTitle(title)}
        />

        <div className="flex-1 min-w-0 space-y-5 w-full">
          <HeroBanner onLearnMore={() => setPromoModalTitle('A LIGA DAS NAÇÕES COMEÇOU - Regras & Super Cotações')} />
          <PopularMultiples
            items={POPULAR_MULTIPLES}
            selectedOdds={selections}
            onToggleOdd={handleToggleOdd}
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            showCards={selectedSport !== 'basquete'}
          />
          {selectedSport === 'basquete' ? (
            <BasketballRows selectedOdds={selections} onToggleOdd={handleToggleOdd} />
          ) : (
            <MatchesList selectedOdds={selections} onToggleOdd={handleToggleOdd} />
          )}
        </div>

        <div className="w-[300px] xl:w-[320px] shrink-0 space-y-4">
          <PitchTracker />
          {t(betSlip((stake) => handlePlaceBetSuccess(stake)))}
        </div>
      </div>

      <PromoModal isOpen={!!promoModalTitle} onClose={() => setPromoModalTitle(null)} title={t(promoModalTitle || '')} />
    </div>
  );
}
