import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownAZ, ArrowDownZA, ChevronDown, ChevronUp } from 'lucide-react';

const rawProviders = [
  { name: '3Cherry', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/3cherry.png' },
  { name: '3Oaks', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/3oaks.png' },
  { name: 'Air Dice', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/air%20dice.png' },
  { name: 'Amigo Gaming', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/amigo%20gaming.png' },
  { name: 'Belatra', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Belatra.png' },
  { name: 'Betsoft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/betsoft.png' },
  { name: 'BGaming', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/bgaminig.png' },
  { name: 'Booming', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/booming.png' },
  { name: 'Caleta', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/caleta.png' },
  { name: 'Crazy Billions', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/crazy%20billions.png' },
  { name: 'CT Interactive', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/ct%20interactive.png' },
  { name: 'Endorphina', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/endorphina.png' },
  { name: 'Espresso', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/espresso.png' },
  { name: 'Evoplay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/evoplay.png' },
  { name: 'Foxi', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Foxi.png' },
  { name: 'Galaxys', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/galaxys.png' },
  { name: 'Gameart', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/gameart.png' },
  { name: 'King Midas', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/king%20midas.png' },
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
  { name: 'Ruby Play', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/Ruby%20play.png' },
  { name: 'Smartsoft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/smartsoft.png' },
  { name: 'Spincraft', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/spincraft.png' },
  { name: 'Spinomenal', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/spinomenal.png' },
  { name: 'Thunderspin', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/thunderspin.png' },
  { name: 'ZeusPlay', url: 'https://salsa-tech.com/wp-content/uploads/pulpo/SLOTS/zeusplay.png' }
];

export default function ProvedoresSlots() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isExpanded, setIsExpanded] = useState(true);

  const sortedProviders = useMemo(() => {
    const sorted = [...rawProviders].sort((a, b) => a.name.localeCompare(b.name));
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }, [sortOrder]);

  return (
    <section className="w-full flex flex-col gap-4 mt-6">
      <div 
        className="flex justify-between items-center bg-[#181530] border border-[#2a2745] p-3 rounded-xl cursor-pointer hover:bg-[#201d3a] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-[#a8a8b8] font-bold tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
          Slots
        </h2>
        
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSortOrder('asc')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${sortOrder === 'asc' ? 'bg-[#5b21b6] text-white' : 'bg-[#141226] text-gray-400 hover:text-white border border-[#2a2745]'}`}
          >
            <ArrowDownAZ size={14} />
            <span className="hidden sm:inline">A-Z</span>
          </button>
          <button
            onClick={() => setSortOrder('desc')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${sortOrder === 'desc' ? 'bg-[#5b21b6] text-white' : 'bg-[#141226] text-gray-400 hover:text-white border border-[#2a2745]'}`}
          >
            <ArrowDownZA size={14} />
            <span className="hidden sm:inline">Z-A</span>
          </button>
          <div className="w-[1px] h-6 bg-[#2a2745] mx-1"></div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 pt-1 pb-2">
              {sortedProviders.map((provider, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1a1533] border border-[#2a2745] flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
              <img 
                src={provider.url} 
                alt={provider.name} 
                className="w-full h-full object-contain"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%239ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-white text-center tracking-wider leading-tight">
              {provider.name}
            </span>
          </div>
        ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
