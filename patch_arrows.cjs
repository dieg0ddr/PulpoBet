const fs = require('fs');
let file = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');

const target = `<div className="flex items-center gap-1 ml-4">
            <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="w-6 h-6 rounded-full bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] flex items-center justify-center text-[#a8a8b8] hover:text-white transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="w-6 h-6 rounded-full bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] flex items-center justify-center text-[#a8a8b8] hover:text-white transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>`;

const replacement = `<div className="flex items-center gap-1 ml-4 text-gray-400">
            <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>`;

file = file.replace(target, replacement);

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', file);
