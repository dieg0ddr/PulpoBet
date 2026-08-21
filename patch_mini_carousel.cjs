const fs = require('fs');
let file = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');

const target = `<div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-lg drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">❤️</span>
          
          <h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>
          <div className="flex items-center gap-1 ml-4 text-gray-400">
            <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] text-[#a8a8b8] hover:text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all">
          VER MÁS <ChevronRight size={14} />
        </button>
      </div>`;

const replacement = `<div className="flex justify-end items-center w-full">
        <div className="flex items-center gap-1 text-gray-400">
          <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="hover:text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="hover:text-white transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>`;

file = file.replace(target, replacement);

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', file);
