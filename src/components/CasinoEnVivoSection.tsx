import React from 'react';
import { 
  MonitorPlay, 
  Gamepad2, 
  Sparkles, 
  CircleDashed, 
  Spade, 
  Diamond, 
  Heart 
} from 'lucide-react';

const options = [
  { icon: MonitorPlay, label: 'MESAS EN VIVO' },
  { img: 'https://salsa-tech.com/wp-content/uploads/pulpo/pragmatic.png', label: 'PRAGMATIC' },
  { img: 'https://salsa-tech.com/wp-content/uploads/pulpo/ezugi.png', label: 'EZUGI' },
  { img: 'https://salsa-tech.com/wp-content/uploads/pulpo/evolution.png', label: 'EVOLUTION' },
  { img: 'https://salsa-tech.com/wp-content/uploads/pulpo/popok%20live.png', label: 'POPOK LIVE' },
  { icon: Sparkles, label: 'SHOW GAMES' },
  { icon: CircleDashed, label: 'RULETAS' },
  { icon: Spade, label: 'BLACKJACK' },
  { icon: Diamond, label: 'BACCARAT' },
  { icon: Heart, label: 'POKER' },
];

export default function CasinoEnVivoSection() {
  return (
    <section className="w-full flex flex-col gap-3 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[#a8a8b8] font-bold tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
          Casino en vivo
        </h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 xl:grid-cols-10 gap-2 sm:gap-3 pt-1 pb-2">
        {options.map((chip, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1a1533] border border-[#2a2745] flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
              {chip.img ? (
                <img 
                  src={chip.img} 
                  alt={chip.label} 
                  className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : chip.icon ? (
                <chip.icon size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              ) : null}
            </div>
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-white text-center tracking-wider leading-tight">
              {chip.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
