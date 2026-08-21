/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Globe,
  Trophy,
  Dices,
  Star,
  Crown,
  Flame,
  Goal,
  Spade,
  Rocket,
  CircleDashed,
  Flag,
  Gift,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  StarIcon,
  MessageSquare,
  Instagram,
  Send,
  X,
  ShieldCheck,
  Award,
  MonitorPlay,
  Gamepad2,
  Sparkles,
  Club,
  Diamond,
  Heart,
  Circle,
  Eye,
  EyeOff,
  Lock,
  Wallet,
  Menu,
  Home,
  User,
  LogOut,
  KeyRound,
  Cherry,
  Volleyball,
  Bell,
  Sliders
} from 'lucide-react';
import CasinoEnVivoPage from './pages/CasinoEnVivoPage';
import PromocionesPage from './pages/PromocionesPage';
import SlotsPage from './pages/SlotsPage';
import JokersPage from './pages/JokersPage';
import GamePage from './pages/GamePage';
import DeportesPage from './pages/DeportesPage';
import { ProfilePage } from './pages/ProfilePage';
import BannerCarousel from './components/BannerCarousel';
import RecomendadosCarousel from './components/RecomendadosCarousel';
import MasJugadosSection from './components/MasJugadosSection';
import MobileMenu from './components/MobileMenu';

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [winnerIndex, setWinnerIndex] = useState(0);
  const [activeGame, setActiveGame] = useState<any>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [isLimitsModalOpen, setIsLimitsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isFooterLanguageMenuOpen, setIsFooterLanguageMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const languages = [
    { code: 'ES', flag: 'https://salsa-tech.com/wp-content/uploads/pulpo/espanha_flag.png' },
    { code: 'BR', flag: 'https://salsa-tech.com/wp-content/uploads/pulpo/brasil_flag.png' },
    { code: 'EN', flag: 'https://salsa-tech.com/wp-content/uploads/pulpo/Reino_unido.png' }
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const verticaisContainerRef = useRef<HTMLDivElement>(null);
  
    

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
    { id: 11, title: 'Devil Fire 2', provider: 'Tada Gaming', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp' },
    { id: 12, title: 'Ratinho Sortudo', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
  ];

  const winners = [
    { id: 1, user: '***999', game: 'Aviator', amount: '228.600', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/aviator.png' },
    { id: 2, user: '***831', game: 'Sweet Bonanza', amount: '124.500', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/sweet%20bonanzaq.png' },
    { id: 3, user: '***402', game: 'Roulette Live', amount: '89.200', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/roulette%20live.png' },
    { id: 4, user: '***717', game: 'Gates of Olympus', amount: '65.400', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/gates%20of%20olympus.png' },
    { id: 5, user: '***155', game: 'Spaceman', amount: '45.800', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/spaceman.png' },
    { id: 6, user: '***293', game: 'Blackjack', amount: '32.100', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/pragmatic.png' }
  ];

useEffect(() => {
    const interval = setInterval(() => {
      setWinnerIndex(prev => (prev + 1) % winners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [winners.length]);

  useEffect(() => {
    const handleWheel = (container: HTMLDivElement | null) => (e: WheelEvent) => {
      if (!container) return;
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const verticaisContainer = verticaisContainerRef.current;

    let verticaisWheelHandler: ((e: WheelEvent) => void) | null = null;
    
    if (verticaisContainer) {
      verticaisWheelHandler = handleWheel(verticaisContainer);
      verticaisContainer.addEventListener('wheel', verticaisWheelHandler, { passive: false });
    }

    return () => {
      if (verticaisContainer && verticaisWheelHandler) verticaisContainer.removeEventListener('wheel', verticaisWheelHandler);
    };
  }, []);

  const renderUltimosGanhadores = () => (
    <section className="w-full md:h-[80px] bg-[#120f21] border border-[#2a2745] mt-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-4 md:p-0 md:px-6 gap-4 md:gap-6 overflow-hidden relative shadow-lg">
      <div className="flex items-center gap-3 md:pr-6 border-b md:border-b-0 border-[#2a2745] pb-3 md:pb-0 md:border-r z-10 bg-[#120f21] w-full md:w-auto h-auto md:h-full">
        <Trophy className="text-purple-500" size={24} />
        <div className="flex flex-col">
          <span className="text-[#a8a8b8] text-xs font-bold uppercase tracking-wider leading-none">ÚLTIMOS</span>
          <span className="text-white font-black uppercase tracking-wider">GANADORES</span>
        </div>
      </div>
      
      {/* Carousel list - Desktop */}
      <div className="hidden md:block flex-1 overflow-hidden relative h-full ml-6">
        <div className="absolute inset-0 flex items-center gap-8">
          <AnimatePresence mode="popLayout">
            {[
              ...winners.slice(winnerIndex),
              ...winners.slice(0, winnerIndex)
            ].slice(0, 5).map((winner) => (
              <motion.div 
                key={winner.id}
                layout
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center gap-3 min-w-[200px]"
              >
                <img src={winner.img} alt={winner.game} className="w-12 h-12 rounded-lg object-cover border border-[#2a2745]" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium">{winner.user}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider truncate w-24">{winner.game}</span>
                  <span className="text-[#3ee2c6] font-bold text-sm">{winner.amount}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel list - Mobile */}
      <div className="md:hidden w-full h-[210px] overflow-hidden relative">
        <div className="w-full flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {[
              ...winners.slice(winnerIndex),
              ...winners.slice(0, winnerIndex)
            ].slice(0, 3).map((winner) => (
              <motion.div 
                key={winner.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center justify-between gap-3 bg-[#1a1730] p-2.5 rounded-lg border border-[#2a2745] w-full"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <img src={winner.img} alt={winner.game} className="w-10 h-10 rounded-md object-cover border border-[#2a2745] shrink-0" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm text-white font-bold truncate">{winner.user}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider truncate max-w-[100px]">{winner.game}</span>
                  </div>
                </div>
                <span className="text-[#3ee2c6] font-bold text-xs sm:text-sm whitespace-nowrap">Premio: {winner.amount}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#070514] p-4 font-sans text-white flex flex-col gap-5 max-w-[1440px] mx-auto pb-24">
      {/* Header Group */}
      <header className="flex flex-col w-full gap-4 h-auto min-h-[100px] sticky top-0 z-40 bg-[#070514] pt-4 -mt-4 pb-2">
        <div className="flex flex-col w-full gap-[10px] sm:gap-3 md:gap-4">
          {/* Login Container */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[10px] sm:gap-3 md:gap-4 h-auto md:h-[40px] w-full">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div 
                className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <img 
                src="https://salsa-tech.com/wp-content/uploads/pulpo/Pulpo%20logo.png" 
                alt="Pulpo Logo" 
                className="h-[26px] sm:h-8 md:h-12 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Mobile Only Login/User */}
            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={() => setIsSearchModalOpen(true)}
                className="border border-[#2a2745] bg-[#0f0c29] hover:bg-[#1a1733] w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors shrink-0"
              >
                <Search size={16} className="text-gray-300" />
              </button>
              <button 
                className="border border-[#2a2745] bg-[#0f0c29] hover:bg-[#1a1733] w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 relative"
              >
                <Bell size={16} className="text-gray-300" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#8f4bff] rounded-full"></span>
              </button>
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="bg-[#141226] border border-[#2a2745] rounded-lg w-8 h-8 sm:w-[34px] sm:h-[34px] flex items-center justify-center text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-medium text-xs sm:text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all shrink-0"
                >
                  Ingresar
                </button>
              )}
            </div>
          </div>

          {/* Mobile Only Balances */}
          {isLoggedIn && (
            <div className="flex md:hidden w-full gap-2">
              <div className="flex-1 flex items-center gap-2 bg-[#141226] border border-[#3ee2c6]/30 shadow-[0_0_10px_rgba(62,226,198,0.1)] rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                  <Wallet size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 1.620,20' : '***'}</span>
              </div>
              <div className="flex-1 flex items-center gap-2 bg-[#141226] border border-[#bf87ff]/30 shadow-[0_0_10px_rgba(191,135,255,0.1)] rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                  <Gift size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 0,00' : '***'}</span>
              </div>
            </div>
          )}
            <div className="hidden md:block relative w-full md:w-[260px] md:mr-auto md:ml-4">
              <Search size={16} className="absolute left-3 md:left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar juego" 
                className="w-full bg-[#141226] md:bg-[#141226] border border-[#2a2745] rounded-full py-2.5 md:py-1.5 pl-10 md:pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#5f2eed] transition-colors shadow-inner md:shadow-none"
              />
            </div>
            <div className="hidden md:flex items-center gap-4 shrink-0">
              {isLoggedIn ? (
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-[#141226] border border-[#3ee2c6]/30 shadow-[0_0_10px_rgba(62,226,198,0.1)] rounded-xl px-3 h-[34px] min-w-[140px]">
                    <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                      <Wallet size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 1.620,20' : '***'}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-[#141226] border border-[#bf87ff]/30 shadow-[0_0_10px_rgba(191,135,255,0.1)] rounded-xl px-3 h-[34px] min-w-[140px]">
                    <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                      <Gift size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 0,00' : '***'}</span>
                  </div>

                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="bg-[#141226] border border-[#2a2745] rounded-xl w-[34px] h-[34px] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1733] transition-colors shrink-0"
                  >
                    {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>

                  <button className="bg-[#141226] border border-[#2a2745] rounded-xl w-[34px] h-[34px] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1733] transition-colors shrink-0 relative">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8f4bff] rounded-full border border-[#141226]"></span>
                  </button>

                  <div className="w-[1px] h-8 bg-[#2a2745] mx-1"></div>

                  <div className="relative">
                    <div 
                      className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded-lg transition-colors"
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                      <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                        <User size={14} className="text-gray-300" />
                      </div>
                      <span className="text-sm font-medium">usr00</span>
                      <ChevronDown size={14} className="text-gray-400" />
                    </div>

                    <AnimatePresence>
                      {isUserMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full right-0 mt-2 bg-[#141226] border border-[#2a2745] rounded-xl shadow-xl overflow-hidden z-50 min-w-[200px]"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1733] cursor-pointer transition-colors border-b border-[#2a2745]">
                              <User size={16} className="text-gray-400" />
                              <span className="text-white font-medium text-sm">Mi cuenta</span>
                            </div>
                            <div 
                              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1733] cursor-pointer transition-colors border-b border-[#2a2745]"
                              onClick={() => {
                                setIsUserMenuOpen(false);
                                setIsLimitsModalOpen(true);
                              }}
                            >
                              <Sliders size={16} className="text-gray-400" />
                              <span className="text-white font-medium text-sm">Límites por apuestas</span>
                            </div>
                            <div 
                              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1733] cursor-pointer transition-colors"
                              onClick={() => {
                                setIsLoggedIn(false);
                                setIsUserMenuOpen(false);
                              }}
                            >
                              <LogOut size={16} className="text-red-400" />
                              <span className="text-red-400 font-medium text-sm">Salir</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-gradient-to-r from-[#6b25e6] to-[#4514a6] hover:from-[#7c37f7] hover:to-[#551fc2] text-white px-6 py-1.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(107,37,230,0.5)] transition-all"
                >
                  INGRESAR
                </button>
              )}
              <div className="relative hidden md:block border-l border-[#2a2745] pl-4">
                <div 
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/5 py-1.5 px-2 rounded-lg transition-colors h-full"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                  <span className="text-white font-medium text-sm">{selectedLanguage.code}</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
                
                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 bg-[#141226] border border-[#2a2745] rounded-xl shadow-xl overflow-hidden z-50 min-w-[120px]"
                    >
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1733] cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLanguageMenuOpen(false);
                          }}
                        >
                          <img src={lang.flag} alt={lang.code} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                          <span className="text-white font-medium text-sm">{lang.code}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Verticais Container */}
          <div 
            ref={verticaisContainerRef}
            className="hidden md:flex items-start gap-4 md:justify-between overflow-x-auto pb-2 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {([
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/01.png', label: 'SLOTS', color: 'text-purple-400', page: 'slots' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/03.png', label: 'SPECIAL SLOTS', color: 'text-yellow-500' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/04.png', label: 'JOKERS', color: 'text-red-500', page: 'jokers' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/05.png', label: 'TOP 50', color: 'text-yellow-400' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/06.png', label: 'DEPORTES', color: 'text-gray-300', page: 'deportes' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/07.png', label: 'CASINO EN VIVO', color: 'text-red-400', page: 'casino-en-vivo' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/08.png', label: 'TORNEOS', color: 'text-yellow-600' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/09.png', label: 'CRASH GAMES', color: 'text-blue-300' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/11.png', label: 'BINGO', color: 'text-purple-300' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/10.png', label: 'HÍPICAS', color: 'text-green-400' },
              { image: 'https://salsa-tech.com/wp-content/uploads/pulpo/verticais/12.png', label: 'PROMOCIONES', color: 'text-pink-400', page: 'promociones' }
            ] as any[]).map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center gap-1.5 min-w-[70px] cursor-pointer group px-2 pb-1 relative ${currentPage === item.page ? 'opacity-100' : ''}`}
                onClick={() => {
                  if (item.page) setCurrentPage(item.page);
                  else setCurrentPage('home');
                }}
              >
                {item.image ? (
                  <div className="w-[38px] h-[38px] flex items-center justify-center transition-transform group-hover:scale-110">
                    <img src={item.image} alt={item.label} className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                ) : (
                  <div className={`p-2 rounded-lg bg-[#141226] border border-[#2a2745] group-hover:bg-[#201d3a] transition-all ${item.color}`}>
                    {item.icon && <item.icon size={20} strokeWidth={2.5} />}
                  </div>
                )}
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-[#59258D] transition-colors uppercase tracking-wider text-center">
                  {item.label}
                </span>
                <div 
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#59258D] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: '0 0 4px rgba(89, 37, 141, 0.5)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <div className="w-full">
            <BannerCarousel containerClassName="relative w-full h-[200px] md:h-[320px] bg-gradient-to-br overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer transition-colors duration-500 rounded-xl" />
          </div>

      {/* Explorá Section */}
      {currentPage === 'home' && (
      <section className="w-full flex flex-col gap-3">
        <h2 className="text-[#a8a8b8] font-bold tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
          Explorá PulpoBet
        </h2>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 h-auto lg:h-[220px]">
          {/* Card Grande */}
          <div 
            className="lg:col-span-2 relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#0d0a1b] group cursor-pointer min-h-[220px]"
            onClick={() => setCurrentPage('slots')}
          >
             <div className="absolute inset-0 bg-cover bg-right opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS_.png")' }}></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a1b]/80 via-transparent to-transparent w-2/3"></div>
             
             <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 w-2/3">
                <div>
                  <h3 className="text-4xl font-black text-white drop-shadow-md mt-2 mb-2 group-hover:scale-105 origin-left transition-transform">SLOTS</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Los mejores slots<br />con jackpots increíbles
                  </p>
                </div>
                <button className="w-fit bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/10 text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm mt-auto">
                  EXPLORAR
                </button>
             </div>
             
             {/* Right side decorative elements */}
             <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-orange-900/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Card Medio 1 */}
          <div 
            onClick={() => setCurrentPage('casino-en-vivo')}
            className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#10081c] group cursor-pointer min-h-[220px]"
          >
             <div className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/RULETA.png")' }}></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#10081c]/80 via-transparent to-transparent w-3/4"></div>
             <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <h3 className="text-2xl font-black text-white drop-shadow-md leading-tight mt-2 w-3/4 group-hover:-translate-y-1 transition-transform">CASINO<br />EN VIVO</h3>
                <button className="w-fit bg-[#5b21b6]/80 hover:bg-[#6d28d9] border border-[#7c3aed]/50 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm mt-auto shadow-[0_0_15px_rgba(91,33,182,0.4)]">
                  JUGAR AHORA
                </button>
             </div>
          </div>

          {/* Card Medio 2 */}
          <div className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#071115] group cursor-pointer min-h-[220px]">
             <div className="absolute inset-0 bg-cover bg-right opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/DEPORTES.png")' }}></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#071115]/80 via-transparent to-transparent w-3/4"></div>
             <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <h3 className="text-2xl font-black text-white drop-shadow-md leading-tight mt-2 group-hover:-translate-y-1 transition-transform">APUESTAS<br />DEPORTIVAS</h3>
                <button className="w-fit bg-[#065f46]/80 hover:bg-[#047857] border border-[#059669]/50 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm mt-auto shadow-[0_0_15px_rgba(6,95,70,0.4)]">
                  APOSTAR
                </button>
             </div>
          </div>

          {/* Card Pequeno Stack (Hidden on some small screens, or spanning) */}
          <div className="flex flex-col gap-3 h-[220px]">
            <div className="flex-1 relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#130f25] group cursor-pointer p-4 flex items-center justify-between">
              <div className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/hipicas.png")' }}></div>
              <h4 className="font-bold text-white tracking-wide z-10 drop-shadow-md">HÍPICAS</h4>
            </div>
            <div className="flex-1 flex gap-3">
               <div className="flex-1 relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#160d1f] group cursor-pointer p-3 flex flex-col justify-end">
                 <div className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/bingo.png")' }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#160d1f]/90 via-[#160d1f]/40 to-transparent"></div>
                 <h4 className="font-bold text-white text-sm z-10 drop-shadow-md">BINGO</h4>
               </div>
               <div className="flex-1 relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#0d122b] group cursor-pointer p-3 flex flex-col justify-end border-b-2 border-b-purple-500">
                 <div className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/crash_spaceman.png")' }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d122b]/90 via-[#0d122b]/40 to-transparent"></div>
                 <h4 className="font-bold text-white text-sm z-10 leading-tight drop-shadow-md">CRASH<br/>GAMES</h4>
               </div>
            </div>
          </div>
        </div>

        {/* Mobile Only Grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          <div onClick={() => setCurrentPage('slots')} className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#0d0a1b] group cursor-pointer h-24 flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS_.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1b]/90 via-[#0d0a1b]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 drop-shadow-md">SLOTS</h4>
          </div>

          <div onClick={() => setCurrentPage('casino-en-vivo')} className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#10081c] group cursor-pointer h-24 flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/RULETA.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#10081c]/90 via-[#10081c]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 drop-shadow-md">CASINO<br/>EN VIVO</h4>
          </div>

          <div className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#071115] group cursor-pointer h-24 flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/DEPORTES.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#071115]/90 via-[#071115]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 drop-shadow-md leading-tight">APUESTAS<br/>DEPORTIVAS</h4>
          </div>

          <div className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#130f25] group cursor-pointer h-24 flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/hipicas.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#130f25]/90 via-[#130f25]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 drop-shadow-md">HÍPICAS</h4>
          </div>

          <div className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#160d1f] group cursor-pointer h-24 flex flex-col justify-end p-3">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/bingo.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#160d1f]/90 via-[#160d1f]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 drop-shadow-md">BINGO</h4>
          </div>

          <div className="relative rounded-xl border border-[#2a2745] overflow-hidden bg-[#0d122b] group cursor-pointer h-24 flex flex-col justify-end p-3 border-b-2 border-b-purple-500">
            <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/crash_spaceman.png")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d122b]/90 via-[#0d122b]/40 to-transparent"></div>
            <h4 className="font-bold text-white text-sm z-10 leading-tight drop-shadow-md">CRASH<br/>GAMES</h4>
          </div>
        </div>
      </section>
      )}

      {/* Recomendados Sections */}
      {currentPage === 'home' && (
        <>
          <RecomendadosCarousel title="Recomendados para vos" onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
          <RecomendadosCarousel title="Pragmatic play" onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
          <RecomendadosCarousel title="Salsa Studio" onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
          <RecomendadosCarousel title="Popok" onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
        </>
      )}

      {/* Ultimos Ganhadores */}
      {currentPage === 'home' && renderUltimosGanhadores()}
        </>
      ) : currentPage === 'casino-en-vivo' ? (
        <CasinoEnVivoPage />
      ) : currentPage === 'slots' ? (
        <SlotsPage onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
      ) : currentPage === 'jokers' ? (
        <JokersPage onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
      ) : currentPage === 'game' ? (
        <GamePage />
      ) : currentPage === 'promociones' ? (
        <PromocionesPage />
      ) : currentPage === 'deportes' ? (
        <DeportesPage games={masJugadosGames} onPlayGame={(game) => { setActiveGame(game); setCurrentPage('game'); }} />
      ) : null}

      <ProfilePage 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
        onOpenLimits={() => {
          setIsProfileModalOpen(false);
          setIsLimitsModalOpen(true);
        }}
      />

      {/* Floating Chat Button (from visual) */}
      <button className="hidden md:flex fixed bottom-6 left-6 w-14 h-14 bg-[#6b25e6] hover:bg-[#7c37f7] rounded-full items-center justify-center shadow-[0_0_20px_rgba(107,37,230,0.5)] z-50 transition-transform hover:scale-110 active:scale-95">
        <MessageSquare className="text-white" size={24} />
      </button>

      {/* Rodapé */}
      <footer className="w-full mt-12 border-t border-[#1c1936] pt-10 pb-6 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Sobre nosotros</h4>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Quiénes somos</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Política de Seguridad y Privacidad</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Reglamento</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Reglamento para Promociones</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Experiencia</h4>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Testimonios</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Casino</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Slots</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Bingo</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Deportes Virtuales</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Apuestas Deportivas</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Ayuda</h4>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Preguntas frecuentes</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Juego Responsable</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contacto</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Política de Cookies</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-1">Idioma</h4>
            <div className="relative">
              <div 
                className="flex items-center gap-2 bg-[#141226] px-4 py-2 w-fit rounded-lg border border-[#2a2745] cursor-pointer hover:bg-[#1a1733] transition-colors"
                onClick={() => setIsFooterLanguageMenuOpen(!isFooterLanguageMenuOpen)}
              >
                <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                <span className="text-white font-bold text-sm">{selectedLanguage.code}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              
              <AnimatePresence>
                {isFooterLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-0 mb-2 bg-[#141226] border border-[#2a2745] rounded-xl shadow-xl overflow-hidden z-50 min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1733] cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsFooterLanguageMenuOpen(false);
                        }}
                      >
                        <img src={lang.flag} alt={lang.code} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        <span className="text-white font-medium text-sm">{lang.code}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <h4 className="text-white font-bold mt-2">¡Síguenos!</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <Instagram size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <Send size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-black border border-[#2a2745] flex items-center justify-center cursor-pointer hover:bg-[#1a1733] transition-colors">
                <X size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#1c1936] pt-6 px-4 gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <span className="font-bold text-gray-400">18+</span>
            <span>|</span>
            <span className="font-bold uppercase tracking-wider">JUGÁ RESPONSABLEMENTE</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-gray-400" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-400">CONEXIÓN SEGURA</span>
                <span>SSL 256-BIT</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-gray-400" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-400">LICENCIA</span>
                <span>N° 8048/JAZ</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p>Copyright © 2026 PulpoBet.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Limites Modal */}
      <AnimatePresence>
        {isLimitsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsLimitsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[280px] bg-[#222336] border-[1.5px] border-[#a855f7] rounded-3xl flex flex-col p-5 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5 px-1">
                <h3 className="text-white font-bold text-[15px] tracking-wide">Límites por apuesta</h3>
                <button onClick={() => setIsLimitsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex flex-col gap-3.5 text-[14px] font-bold px-1 pb-1">
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">General:</span> <span className="text-[#ffcca5]">ARS$ 500.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Casino:</span> <span className="text-[#ffcca5]">ARS$ 500.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Bingo:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Instant Games:</span> <span className="text-[#ffcca5]">ARS$ 500.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Deportes:</span> <span className="text-[#ffcca5]">ARS$ 500.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Slots:</span> <span className="text-[#ffcca5]">ARS$ 25.000,00</span></div>
                
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Poker:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
                
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Video Bingo:</span> <span className="text-[#ffcca5]">ARS$ 5.000,00</span></div>
                
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Mini Slots:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Lotto:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Raspaditas:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
                <div className="flex gap-1.5"><span className="text-[#cbd5e1]">Caballos:</span> <span className="text-[#ffcca5]">ARS$ 100.000,00</span></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isForgotPasswordModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsForgotPasswordModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[260px] rounded-[24px] p-[2px] bg-gradient-to-br from-[#9333ea] via-[#3b82f6] to-[#06b6d4] shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#070b1a] rounded-[22px] flex flex-col items-center w-full p-6 relative">
                <button
                  onClick={() => setIsForgotPasswordModalOpen(false)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors z-20"
                >
                  <X size={14} />
                </button>
                
                <h2 className="text-white font-bold text-sm text-center mt-5 tracking-wide">
                  RESTABLECER CONTRASEÑA
                </h2>
                <p className="text-gray-300 text-[13px] text-center mt-3 leading-snug">
                  Para recuperar tu contraseña,<br/>comunicate con tu agente.
                </p>

                <img 
                  src="https://www.pulpobet.club/es/assets/images/help/pulpo-security.png" 
                  alt="Security Pulpo" 
                  className="w-full max-w-[170px] h-auto object-contain mt-2 scale-[1.05]"
                />

                <button 
                  onClick={() => setIsForgotPasswordModalOpen(false)}
                  className="w-full bg-[#5b21b6] hover:bg-[#6d28d9] text-white py-2.5 rounded-xl font-bold text-xs tracking-wider mt-4 shadow-[0_0_15px_rgba(91,33,182,0.5)] transition-all"
                >
                  VOLVER
                </button>

                <div className="flex items-center gap-3 mt-6 w-full px-4">
                  <div className="h-[1px] flex-1 bg-[#2a2745]"></div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Lock size={12} />
                    <span>Conexión segura</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-[#2a2745]"></div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-5 text-gray-500 text-[10px] tracking-wider mb-2">
                  <span>18+</span>
                  <div className="w-[1px] h-3 bg-[#2a2745]"></div>
                  <span>JUGÁ RESPONSABLEMENTE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start pt-[8vh] md:pt-0 md:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsLoginModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[280px] aspect-[1/1.9] md:max-w-none md:w-[37vh] md:h-[72vh] md:aspect-auto bg-transparent flex flex-col items-center pt-[54%] md:pt-[20.4vh] px-6 md:px-[3.6vh] -translate-y-[10px] md:translate-y-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Image Container */}
              <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: 'url("https://salsa-tech.com/wp-content/uploads/pulpo/LOGIN_BG.png")',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Form Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className="text-[19px] md:text-[2.6vh] font-black tracking-tight text-white mb-1 md:mb-[0.6vh] leading-none">INGRESAR</h2>
                <p className="text-[10px] md:text-[1.4vh] text-gray-300 mb-4 md:mb-[1.8vh]">Accedé a tu cuenta</p>

                <div className="w-full flex flex-col gap-2 md:gap-[1.8vh]">
                  <div className="flex flex-col gap-1 md:gap-[0.6vh]">
                    <label className="text-white text-[10px] md:text-[1.3vh] font-medium pl-1 md:pl-[0.6vh]">Usuario</label>
                    <input 
                      type="text"
                      placeholder="Ingresá tu usuario"
                      className="w-full bg-transparent border border-[#2a2745] rounded-xl md:rounded-[1.2vh] px-2.5 md:px-[1.4vh] py-2 md:py-[1.2vh] text-[10px] md:text-[1.3vh] text-white placeholder-gray-500 focus:outline-none focus:border-[#5f2eed] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1 md:gap-[0.6vh] relative">
                    <label className="text-white text-[10px] md:text-[1.3vh] font-medium pl-1 md:pl-[0.6vh]">Contraseña</label>
                    <div className="relative">
                      <input 
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        className="w-full bg-transparent border border-[#2a2745] rounded-xl md:rounded-[1.2vh] pl-2.5 md:pl-[1.4vh] pr-8 md:pr-[3.6vh] py-2 md:py-[1.2vh] text-[10px] md:text-[1.3vh] text-white placeholder-gray-500 focus:outline-none focus:border-[#5f2eed] transition-colors"
                      />
                      <button className="absolute right-2.5 md:right-[1.2vh] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                        <Eye size={14} className="w-[14px] h-[14px] md:w-[1.8vh] md:h-[1.8vh]" />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsLoginModalOpen(false);
                    }}
                    className="w-full bg-[#5f2eed] hover:bg-[#6e3df0] text-white rounded-xl md:rounded-[1.2vh] py-2 md:py-[1.4vh] font-bold mt-1.5 md:mt-[1.2vh] shadow-[0_0_15px_rgba(95,46,237,0.4)] transition-all text-xs md:text-[1.4vh]"
                  >
                    INGRESAR
                  </button>
                </div>

                <a 
                  href="#" 
                  className="text-[#a47ff6] hover:text-[#b89cff] text-[10px] md:text-[1.3vh] mt-3 md:mt-[1.8vh] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginModalOpen(false);
                    setIsForgotPasswordModalOpen(true);
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </a>

                <div className="w-full flex items-center gap-3 md:gap-[1.2vh] mt-4 md:mt-[2.4vh]">
                  <div className="h-[1px] md:h-[0.1vh] flex-1 bg-gradient-to-r from-transparent to-gray-700/50"></div>
                  <div className="flex items-center gap-2 md:gap-[0.6vh] text-gray-400 text-[10px] md:text-[1.2vh]">
                    <Lock size={10} className="w-[10px] h-[10px] md:w-[1.2vh] md:h-[1.2vh]" />
                    <span>Conexión segura</span>
                  </div>
                  <div className="h-[1px] md:h-[0.1vh] flex-1 bg-gradient-to-l from-transparent to-gray-700/50"></div>
                </div>

                <div className="flex items-center gap-2 md:gap-[1.2vh] mt-4 md:mt-[2.4vh] text-[8px] md:text-[1.1vh] text-gray-500">
                  <span>18+</span>
                  <div className="w-[1px] md:w-[0.1vh] h-2.5 md:h-[1.2vh] bg-gray-700"></div>
                  <span className="uppercase tracking-wider">JUGÁ RESPONSABLEMENTE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#070514]/90 backdrop-blur-sm z-[100] flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0f0c29] border border-[#2a2745] w-full max-w-lg rounded-2xl p-6 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-medium">Buscar juegos</h2>
                <button 
                  onClick={() => setIsSearchModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="relative mb-6">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={1.5} />
                <input 
                  type="text" 
                  placeholder="Nombre del juego o proveedor"
                  className="w-full bg-[#141226] border border-[#2a2745] rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#5f2eed] transition-colors"
                  autoFocus
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-gray-300 text-sm font-medium mb-1">Búsquedas recientes</h3>
                <div className="flex flex-wrap gap-3">
                  {['Sugar Rush 1000', 'Gates of Olympus 1000', 'Sweet Bonanza 1000', 'Wanted Dead or a Wild', 'Roulette'].map((term, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#141226] border border-[#2a2745] hover:border-[#3a3755] rounded-xl px-4 py-2 cursor-pointer transition-colors group">
                      <span className="text-gray-200 text-sm">{term}</span>
                      <X size={14} className="text-gray-500 group-hover:text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Side Menu Drawer */}
      <MobileMenu isOpen={isMainMenuOpen} onClose={() => setIsMainMenuOpen(false)} />

      {/* Mobile Bottom App Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#070514] border-t border-[#2a2745] flex items-center justify-around pb-6 pt-2 px-2 z-50">
        <div 
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 py-2 transition-colors ${isMainMenuOpen ? 'text-[#8f4bff]' : 'text-[#a8a8b8] hover:text-white'}`}
          onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
        >
          <Menu size={22} />
          <span className="text-[10px] font-medium">Menú</span>
        </div>
        <div 
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 py-2 transition-colors ${currentPage === 'deportes' ? 'text-[#8f4bff]' : 'text-[#a8a8b8] hover:text-white'}`}
          onClick={() => setCurrentPage('deportes')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>sports_soccer</span>
          <span className="text-[10px] font-medium">Deportes</span>
        </div>
        
        <div className="flex flex-col items-center justify-center relative cursor-pointer flex-1 h-12" onClick={() => currentPage === 'deportes' ? null : setCurrentPage('home')}>
          <div className={`w-14 h-14 rounded-full border-2 ${currentPage === 'home' || currentPage === 'deportes' ? 'border-[#8f4bff] shadow-[0_0_20px_rgba(143,75,255,0.5)]' : 'border-[#6b25e6] shadow-[0_0_15px_rgba(107,37,230,0.3)]'} bg-[#070514] flex items-center justify-center absolute top-1/2 -translate-y-[65%] transition-all`}>
            {currentPage === 'deportes' ? (
              <span className="material-symbols-outlined text-[#8f4bff]" style={{ fontSize: '24px' }}>receipt_long</span>
            ) : (
              <Home size={22} className={currentPage === 'home' ? 'text-[#8f4bff]' : 'text-[#a8a8b8] hover:text-white'} />
            )}
          </div>
        </div>

        <div className={`flex flex-col items-center gap-1 cursor-pointer flex-1 py-2 transition-colors ${currentPage === 'slots' || currentPage === 'casino-en-vivo' ? 'text-[#8f4bff]' : 'text-[#a8a8b8] hover:text-white'}`} onClick={() => setCurrentPage('slots')}>
          <Cherry size={22} />
          <span className="text-[10px] font-medium">Slots</span>
        </div>
        <div className={`flex flex-col items-center gap-1 cursor-pointer flex-1 py-2 transition-colors ${isProfileModalOpen ? 'text-[#8f4bff]' : 'text-[#a8a8b8] hover:text-white'}`} onClick={() => setIsProfileModalOpen(true)}>
          <User size={22} />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>
      </div>
    </div>
  );
}
