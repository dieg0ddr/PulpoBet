import React, { useState } from 'react';
import {
  Gift,
  Search,
  Settings,
  X,
  Zap,
  Clock,
  LayoutGrid,
  BarChart2,
  Play,
  Home,
  FileText,
  ChevronRight,
  TrendingUp,
  Flame,
} from 'lucide-react';
import { OddSelection, UserAccount } from '../types/sportsbook';
import { BasketballRows } from './BasketballRows';
import {
  FootballIcon,
  TennisIcon,
  BasketballIcon,
  EsportsIcon,
} from './SportIcons';

interface MobileViewProps {
  user: UserAccount;
  onOpenAuth: (mode: 'login' | 'register') => void;
  selectedOdds: OddSelection[];
  onToggleOdd: (selection: OddSelection) => void;
  onOpenDeposit: () => void;
  onOpenBetslip: () => void;
}

interface MobileMatch {
  id: string;
  time: string;
  isLive?: boolean;
  hasStream?: boolean;
  hasSuperOdds?: boolean;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  homeScore?: number;
  awayScore?: number;
  competition: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
}

const MOBILE_MATCHES_LIST: MobileMatch[] = [
  {
    id: 'mob-1',
    time: '05/10 15:45',
    hasSuperOdds: true,
    homeTeam: 'Itália',
    awayTeam: 'Turquia',
    homeFlag: '🇮🇹',
    awayFlag: '🇹🇷',
    competition: 'UEFA - Nations League A',
    odds: { home: 1.42, draw: 5.20, away: 7.50 },
  },
  {
    id: 'mob-2',
    time: '05/10 15:45',
    hasSuperOdds: true,
    homeTeam: 'França',
    awayTeam: 'Bélgica',
    homeFlag: '🇫🇷',
    awayFlag: '🇧🇪',
    competition: 'UEFA - Nations League A',
    odds: { home: 1.52, draw: 4.75, away: 6.40 },
  },
  {
    id: 'mob-3',
    time: '05/10 15:45',
    hasSuperOdds: true,
    homeTeam: 'Romênia',
    awayTeam: 'Suécia',
    homeFlag: '🇷🇴',
    awayFlag: '🇸🇪',
    competition: 'UEFA - Nations League C',
    odds: { home: 4.30, draw: 4.10, away: 1.82 },
  },
  {
    id: 'mob-4',
    time: '05/10 15:45',
    homeTeam: 'Bósnia-Herzegovina',
    awayTeam: 'Polônia',
    homeFlag: '🇧🇦',
    awayFlag: '🇵🇱',
    competition: 'UEFA - Nations League B',
    odds: { home: 2.95, draw: 3.40, away: 2.40 },
  },
  {
    id: 'mob-5',
    time: '05/10 15:45',
    homeTeam: 'Irlanda do Norte',
    awayTeam: 'Geórgia',
    homeFlag: '🇬🇧',
    awayFlag: '🇬🇪',
    competition: 'UEFA - Nations League B',
    odds: { home: 2.42, draw: 3.05, away: 3.25 },
  },
  {
    id: 'mob-6',
    time: '05/10 15:45',
    homeTeam: 'Montenegro',
    awayTeam: 'Armênia',
    homeFlag: '🇲🇪',
    awayFlag: '🇦🇲',
    competition: 'UEFA - Nations League C',
    odds: { home: 1.50, draw: 4.50, away: 6.20 },
  },
  {
    id: 'mob-7',
    time: '05/10 13:00',
    hasSuperOdds: true,
    homeTeam: 'Chipre',
    awayTeam: 'Letônia',
    homeFlag: '🇨🇾',
    awayFlag: '🇱🇻',
    competition: 'UEFA - Nations League C',
    odds: { home: 1.62, draw: 3.90, away: 6.50 },
  },
  {
    id: 'mob-8',
    time: '79:42',
    isLive: true,
    homeTeam: 'Japão',
    awayTeam: 'Nova Zelândia',
    homeFlag: '🇯🇵',
    awayFlag: '🇳🇿',
    homeScore: 2,
    awayScore: 1,
    competition: 'Internacional - Jogos Amistosos',
    odds: { home: 1.04, draw: 9.50, away: 100.00 },
  },
  {
    id: 'mob-9',
    time: '05/10 15:45',
    homeTeam: 'Ucrânia',
    awayTeam: 'Hungria',
    homeFlag: '🇺🇦',
    awayFlag: '🇭🇺',
    competition: 'UEFA - Nations League B',
    odds: { home: 2.65, draw: 3.10, away: 2.87 },
  },
  {
    id: 'mob-10',
    time: '05/10 19:00',
    hasStream: true,
    hasSuperOdds: true,
    homeTeam: 'Velez Sarsfield',
    awayTeam: 'CA Platense',
    homeFlag: '🛡️',
    awayFlag: '🛡️',
    competition: 'Argentina - Liga Profesional',
    odds: { home: 1.95, draw: 3.20, away: 5.10 },
  },
];

// Roulette SVG Wheel Icon for Casino / Roda da Sorte
const RouletteWheelIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#17132b" stroke="#8f4bff" strokeWidth="3.5" />
    {/* Inner segments */}
    <circle cx="50" cy="50" r="42" fill="#120f24" />
    <path d="M50 8 A42 42 0 0 1 80 20 L50 50 Z" fill="#8f4bff" />
    <path d="M80 20 A42 42 0 0 1 92 50 L50 50 Z" fill="#ffffff" />
    <path d="M92 50 A42 42 0 0 1 80 80 L50 50 Z" fill="#490596" />
    <path d="M80 80 A42 42 0 0 1 50 92 L50 50 Z" fill="#ffffff" />
    <path d="M50 92 A42 42 0 0 1 20 80 L50 50 Z" fill="#8f4bff" />
    <path d="M20 80 A42 42 0 0 1 8 50 L50 50 Z" fill="#ffffff" />
    <path d="M8 50 A42 42 0 0 1 20 20 L50 50 Z" fill="#490596" />
    <path d="M20 20 A42 42 0 0 1 50 8 L50 50 Z" fill="#b388ff" />
    {/* Center hub */}
    <circle cx="50" cy="50" r="22" fill="#0f0d17" stroke="#8f4bff" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="10" fill="#8f4bff" />
  </svg>
);

export const MobileView: React.FC<MobileViewProps> = ({
  user,
  onOpenAuth,
  selectedOdds,
  onToggleOdd,
  onOpenDeposit,
  onOpenBetslip,
}) => {
  const [activeActionFilter, setActiveActionFilter] = useState<'aovivo' | 'proximos'>('aovivo');
  const [activeSport, setActiveSport] = useState('futebol');
  const [activeMarketTab, setActiveMarketTab] = useState('populares');
  const [activeBottomNav, setActiveBottomNav] = useState('inicio');

  const isOddSelected = (matchId: string, outcomeName: string) => {
    return selectedOdds.some(
      (s) => s.matchId === matchId && s.outcomeName === outcomeName
    );
  };

  const handleSelectOdd = (
    match: MobileMatch,
    outcomeName: string,
    odds: number
  ) => {
    onToggleOdd({
      id: `${match.id}-${outcomeName}`,
      matchId: match.id,
      matchName: `${match.homeTeam} x ${match.awayTeam}`,
      marketName: 'Resultado Final (1X2)',
      outcomeName,
      odds,
    });
  };

  const sportsList = [
    { id: 'popular', label: 'Popular', icon: <LayoutGrid className="w-5 h-5 text-zinc-300" /> },
    { id: 'futebol', label: 'Futebol', icon: <FootballIcon className="w-5 h-5 text-[#8f4bff]" /> },
    { id: 'tenis', label: 'Tênis', icon: <TennisIcon className="w-5 h-5 text-fuchsia-400" /> },
    { id: 'basquete', label: 'Basquete', icon: <BasketballIcon className="w-5 h-5 text-amber-400" /> },
    { id: 'esports', label: 'Esports', icon: <EsportsIcon className="w-5 h-5 text-purple-400" /> },
  ];

  return (
    <div className="lg:hidden text-white pb-4 select-none font-sans">

      {/* 2. Promo Cards Carousel */}
      <div className="px-3 pt-3">
        <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-1">
          {/* Card 1 */}
          <div className="shrink-0 w-36 h-28 rounded-xl bg-gradient-to-b from-[#18142c] to-[#0f0c1d] border border-[#241e40] p-2.5 flex flex-col justify-between relative overflow-hidden shadow-lg group cursor-pointer hover:border-[#8f4bff]/40 transition-colors">
            <div className="bg-[#8f4bff] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded w-max">
              JOGO RESPONSÁVEL
            </div>
            <div className="text-xs font-black text-white leading-tight z-10">
              Aposte com Consciência
            </div>
            <div className="absolute right-1 bottom-1 text-2xl opacity-60">🛡️</div>
          </div>

          {/* Card 2 */}
          <div className="shrink-0 w-36 h-28 rounded-xl bg-gradient-to-b from-[#18142c] to-[#0f0c1d] border border-[#241e40] p-2.5 flex flex-col justify-between relative overflow-hidden shadow-lg group cursor-pointer hover:border-[#8f4bff]/40 transition-colors">
            <div className="bg-[#8f4bff] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded w-max">
              APP ANDROID
            </div>
            <div className="text-xs font-black text-white leading-tight z-10">
              Baixe para Android!
            </div>
            <div className="absolute right-1 bottom-1 text-2xl opacity-60">📱</div>
          </div>

          {/* Card 3 */}
          <div className="shrink-0 w-36 h-28 rounded-xl bg-gradient-to-b from-[#18142c] to-[#0f0c1d] border border-[#241e40] p-2.5 flex flex-col justify-between relative overflow-hidden shadow-lg group cursor-pointer hover:border-[#8f4bff]/40 transition-colors">
            <div className="bg-[#8f4bff] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded w-max">
              APP APPLE
            </div>
            <div className="text-xs font-black text-white leading-tight z-10">
              Baixe para iOS!
            </div>
            <div className="absolute right-1 bottom-1 text-2xl opacity-60">🍏</div>
          </div>
        </div>
      </div>

      {/* 3. Section Title & Toggle Buttons: JUNTE-SE À AÇÃO */}
      <div className="px-3 pt-5 pb-3 flex items-center justify-between">
        <h2 className="text-lg font-black tracking-wider text-white uppercase italic">
          JUNTE-SE À AÇÃO
        </h2>

        <div className="flex items-center gap-1.5 bg-[#131025] p-0.5 rounded-full border border-[#241e40]">
          <button
            onClick={() => setActiveActionFilter('aovivo')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
              activeActionFilter === 'aovivo'
                ? 'bg-[#1d1838] text-[#8f4bff] border border-[#8f4bff]/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#8f4bff] fill-[#8f4bff]" />
            <span>Ao Vivo</span>
          </button>
          <button
            onClick={() => setActiveActionFilter('proximos')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
              activeActionFilter === 'proximos'
                ? 'bg-[#1d1838] text-[#8f4bff] border border-[#8f4bff]/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Próximos</span>
          </button>
        </div>
      </div>

      {/* 4. Horizontal Sports Bar */}
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {sportsList.map((sport) => {
            const isActive = activeSport === sport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setActiveSport(sport.id)}
                className={`flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 px-2.5 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-[#18142e] border-[#8f4bff] text-white shadow-[0_0_10px_rgba(143,75,255,0.15)]'
                    : 'bg-[#131024] border-[#221d3b] text-zinc-400 hover:text-zinc-200 hover:bg-[#18142e]'
                }`}
              >
                {sport.icon}
                <span className="text-[11px] font-semibold">{sport.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Market Tabs */}
      <div className="px-3 border-b border-[#1d1838] mb-3">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none text-xs">
          <button
            onClick={() => setActiveMarketTab('populares')}
            className={`pb-2.5 font-bold whitespace-nowrap transition-colors border-b-2 ${
              activeMarketTab === 'populares'
                ? 'border-[#8f4bff] text-[#8f4bff]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Mercados populares
          </button>
          <button
            onClick={() => setActiveMarketTab('maismenos')}
            className={`pb-2.5 font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeMarketTab === 'maismenos'
                ? 'border-[#8f4bff] text-[#8f4bff]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Mais/Menos
          </button>
          <button
            onClick={() => setActiveMarketTab('ambos')}
            className={`pb-2.5 font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeMarketTab === 'ambos'
                ? 'border-[#8f4bff] text-[#8f4bff]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Ambos marcam
          </button>
        </div>
      </div>

      {/* 6. Match Cards List */}
      <div className="px-3 space-y-2.5">
        {activeSport === 'basquete' ? (
          <BasketballRows selectedOdds={selectedOdds} onToggleOdd={onToggleOdd} />
        ) : MOBILE_MATCHES_LIST.map((match) => {
          const isHomeSelected = isOddSelected(match.id, match.homeTeam);
          const isDrawSelected = isOddSelected(match.id, 'Empate');
          const isAwaySelected = isOddSelected(match.id, match.awayTeam);

          return (
            <div
              key={match.id}
              className="bg-[#151227] border border-[#241f40] rounded-2xl p-3 shadow-md space-y-2.5 hover:border-[#8f4bff]/30 transition-all"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <div className="flex items-center gap-1.5">
                  {match.isLive ? (
                    <span className="flex items-center gap-1 text-[#8f4bff] font-bold">
                      <Zap className="w-3.5 h-3.5 fill-[#8f4bff]" />
                      {match.time}
                    </span>
                  ) : (
                    <span>{match.time}</span>
                  )}
                  {match.hasStream && (
                    <Play className="w-3.5 h-3.5 fill-zinc-400 text-zinc-400" />
                  )}
                  {match.hasSuperOdds && (
                    <span className="text-[#8f4bff] font-bold flex items-center gap-0.5" title="Super Odds">
                      <Flame className="w-3.5 h-3.5 fill-[#8f4bff]" />
                    </span>
                  )}
                </div>

                <button
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  title="Estatísticas do Jogo"
                >
                  <BarChart2 className="w-4 h-4" />
                </button>
              </div>

              {/* Teams & Score */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{match.homeFlag}</span>
                    <span>{match.homeTeam}</span>
                  </div>
                  {match.homeScore !== undefined && (
                    <span className="font-mono text-sm text-white font-black">{match.homeScore}</span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{match.awayFlag}</span>
                    <span>{match.awayTeam}</span>
                  </div>
                  {match.awayScore !== undefined && (
                    <span className="font-mono text-sm text-white font-black">{match.awayScore}</span>
                  )}
                </div>
              </div>

              {/* Competition subtitle */}
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                <span>⚽</span>
                <span className="truncate">{match.competition}</span>
              </div>

              {/* Odds Row (1 X 2) with Neon Green Numbers */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {/* 1 */}
                <button
                  onClick={() => handleSelectOdd(match, match.homeTeam, match.odds.home)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    isHomeSelected
                      ? 'bg-[#8f4bff] text-white font-black'
                      : 'bg-[#1d1838] hover:bg-[#272048] border border-[#2b244c]'
                  }`}
                >
                  <span className={`text-[11px] font-bold ${isHomeSelected ? 'text-white' : 'text-zinc-400'}`}>
                    1
                  </span>
                  <span className={`text-xs font-black ${isHomeSelected ? 'text-white' : 'text-[#8f4bff]'}`}>
                    {match.odds.home.toFixed(2)}
                  </span>
                </button>

                {/* X */}
                <button
                  onClick={() => handleSelectOdd(match, 'Empate', match.odds.draw)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    isDrawSelected
                      ? 'bg-[#8f4bff] text-white font-black'
                      : 'bg-[#1d1838] hover:bg-[#272048] border border-[#2b244c]'
                  }`}
                >
                  <span className={`text-[11px] font-bold ${isDrawSelected ? 'text-white' : 'text-zinc-400'}`}>
                    X
                  </span>
                  <span className={`text-xs font-black ${isDrawSelected ? 'text-white' : 'text-[#8f4bff]'}`}>
                    {match.odds.draw.toFixed(2)}
                  </span>
                </button>

                {/* 2 */}
                <button
                  onClick={() => handleSelectOdd(match, match.awayTeam, match.odds.away)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    isAwaySelected
                      ? 'bg-[#8f4bff] text-white font-black'
                      : 'bg-[#1d1838] hover:bg-[#272048] border border-[#2b244c]'
                  }`}
                >
                  <span className={`text-[11px] font-bold ${isAwaySelected ? 'text-white' : 'text-zinc-400'}`}>
                    2
                  </span>
                  <span className={`text-xs font-black ${isAwaySelected ? 'text-white' : 'text-[#8f4bff]'}`}>
                    {match.odds.away.toFixed(2)}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 7. MAIS EVENTOS Button */}
      <div className="px-3 pt-4 pb-2">
        <button
          onClick={() => {}}
          className="w-full py-3 bg-[#1b1632] hover:bg-[#221c40] border border-[#2c254e] hover:border-[#8f4bff]/50 rounded-xl text-center font-black text-xs text-zinc-200 tracking-wider uppercase transition-colors shadow-sm"
        >
          MAIS EVENTOS
        </button>
      </div>

      {/* Betslip floating button (PulpoBet already has its own bottom nav) */}
      {selectedOdds.length > 0 && (
        <button
          onClick={onOpenBetslip}
          className="fixed bottom-24 right-4 z-40 flex items-center gap-2 bg-[#8f4bff] hover:bg-[#7c3aed] text-white text-xs font-black uppercase px-4 py-3 rounded-full shadow-[0_0_20px_rgba(143,75,255,0.5)] transition-colors"
        >
          <FileText className="w-4 h-4" />
          Cupom
          <span className="w-5 h-5 rounded-full bg-white text-[#7c3aed] text-[10px] flex items-center justify-center">{selectedOdds.length}</span>
        </button>
      )}
    </div>
  );
};
