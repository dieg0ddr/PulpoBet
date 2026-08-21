import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Compass, Gift, Info, HeadphonesIcon, ChevronDown, ChevronUp, Dribbble, Club, Cherry, Video, Rocket, CircleDashed, Star, Crown, Smile, Trophy, Medal } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const slotProviders = [
  { name: '3Cherry', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/3cherry.png' },
  { name: '3Oaks', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/3oaks.png' },
  { name: 'Air Dice', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/air%20dice.png' },
  { name: 'Amigo Gamin', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/amigo%20gaming.png' },
  { name: 'Belatra', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Belatra.png' },
  { name: 'Betsoft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/betsoft.png' },
  { name: 'Bgaming', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/bgaminig.png' },
  { name: 'booming', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/booming.png' },
  { name: 'Caleta', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/caleta.png' },
  { name: 'Crazy Billions', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/crazy%20billions.png' },
  { name: 'CT Interactive', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/ct%20interactive.png' },
  { name: 'Endorphina', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/endorphina.png' },
  { name: 'Espresso', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/espresso.png' },
  { name: 'Evoplay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/evoplay.png' },
  { name: 'Foxi', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Foxi.png' },
  { name: 'Galaxys', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/galaxys.png' },
  { name: 'Gameart', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/gameart.png' },
  { name: 'King Mida', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/king%20midas.png' },
  { name: 'Mancala', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/mancala.png' },
  { name: 'Mascot', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/mascot.png' },
  { name: 'MrSlotty', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/mrslotty.png' },
  { name: 'NetEnt', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/netent.png' },
  { name: 'NetGame', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/netgame.png' },
  { name: 'Onlyplay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/onlyplay.png' },
  { name: 'Ortiz', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/ortiz.png' },
  { name: 'Platiplus', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Platiplus.png' },
  { name: 'Popok', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/popok.png' },
  { name: 'Pragmatic', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/pragmatic.png' },
  { name: 'Red Rake', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/red%20rake.png' },
  { name: 'RedTiger', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/redtiger.png' },
  { name: 'Revolver', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/revolver.png' },
  { name: 'RubyPlay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Ruby%20play.png' },
  { name: 'Smartsoft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/smartsoft.png' },
  { name: 'Spincraft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/spincraft.png' },
  { name: 'Spinomenal', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/spinomenal.png' },
  { name: 'Thunderspin', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/thunderspin.png' },
  { name: 'ZeusPlay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/zeusplay.png' }
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed top-0 bottom-[72px] left-0 w-full z-[35] bg-[#070514] overflow-y-auto no-scrollbar flex flex-col px-4 pt-[110px] pb-8 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col gap-3">
            
            {/* Top Level Menu Options as separate boxes */}
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button 
                onClick={() => toggleSection('slots')}
                className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Cherry size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Slots</span>
                </div>
                {expandedSection === 'slots' ? (
                  <ChevronUp size={18} className="text-[#d8b4fe]" />
                ) : (
                  <ChevronDown size={18} className="text-[#d8b4fe]" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSection === 'slots' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#0f0c29]"
                  >
                    <div className="flex flex-col border-t border-[#2a2745]/50">
                      {slotProviders.map((provider, index) => (
                        <div key={index} className="flex items-center gap-3 py-3 px-4 pl-12 hover:bg-[#1a1733] cursor-pointer transition-colors border-b border-[#2a2745]/30 last:border-0 group">
                          <div className="w-6 h-6 flex items-center justify-center shrink-0">
                            <img 
                              src={provider.url} 
                              alt={provider.name}
                              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{provider.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Crown size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Special Slots</span>
                </div>
                <ChevronDown size={18} className="text-[#d8b4fe]" />
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Smile size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Jokers</span>
                </div>
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Trophy size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Top 50</span>
                </div>
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Dribbble size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Deportes</span>
                </div>
                <ChevronDown size={18} className="text-[#d8b4fe]" />
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Video size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Casino en vivo</span>
                </div>
                <ChevronDown size={18} className="text-[#d8b4fe]" />
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Medal size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Torneos</span>
                </div>
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <Rocket size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Crash Games</span>
                </div>
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <CircleDashed size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Bingo</span>
                </div>
                <ChevronDown size={18} className="text-[#d8b4fe]" />
              </button>
            </div>
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#d8b4fe]">
                    <span className="flex items-center justify-center font-bold text-lg leading-none" style={{ fontFamily: 'serif' }}>♞</span>
                  </div>
                  <span className="font-medium text-[15px]">Hípicas</span>
                </div>
              </button>
            </div>

            {/* Descubrir Section */}
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button 
                onClick={() => toggleSection('descubrir')}
                className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Compass size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Descubrir</span>
                </div>
                {expandedSection === 'descubrir' ? (
                  <ChevronUp size={18} className="text-[#d8b4fe]" />
                ) : (
                  <ChevronDown size={18} className="text-[#d8b4fe]" />
                )}
              </button>
            </div>

            {/* Promociones Section */}
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button 
                onClick={() => toggleSection('promociones')}
                className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Gift size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Promociones</span>
                </div>
              </button>
            </div>

            {/* Información Section */}
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button 
                onClick={() => toggleSection('informacion')}
                className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Información</span>
                </div>
                {expandedSection === 'informacion' ? (
                  <ChevronUp size={18} className="text-[#d8b4fe]" />
                ) : (
                  <ChevronDown size={18} className="text-[#d8b4fe]" />
                )}
              </button>
            </div>

            {/* Soporte Section */}
            <div className="border border-[#2a2745] rounded-xl bg-[#0f0c29] overflow-hidden">
              <button 
                onClick={() => toggleSection('soporte')}
                className="w-full flex items-center justify-between p-4 bg-[#0f0c29] text-white hover:bg-[#141226] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HeadphonesIcon size={20} className="text-[#d8b4fe]" strokeWidth={1.5} />
                  <span className="font-medium text-[15px]">Soporte</span>
                </div>
                {expandedSection === 'soporte' ? (
                  <ChevronUp size={18} className="text-[#d8b4fe]" />
                ) : (
                  <ChevronDown size={18} className="text-[#d8b4fe]" />
                )}
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MenuItem({ icon, text, isMaterial, isFirst }: { icon: any, text: string, isMaterial?: boolean, isFirst?: boolean }) {
  return (
    <div className={`flex items-center gap-3 py-3 px-4 hover:bg-[#1a1733] cursor-pointer transition-colors ${!isFirst ? 'border-t border-[#2a2745]/50' : ''}`}>
      <div className="w-6 flex justify-center">
        {isMaterial ? (
          <span className="material-symbols-outlined text-[#d8b4fe]" style={{ fontSize: '20px', fontWeight: 300 }}>{icon}</span>
        ) : (
          React.isValidElement(icon) && typeof icon.type !== 'string'
            ? React.cloneElement(icon as React.ReactElement<any>, { size: 20, className: "text-[#d8b4fe]", strokeWidth: 1.5 })
            : icon
        )}
      </div>
      <span className="text-gray-200 text-sm font-medium">{text}</span>
    </div>
  );
}
