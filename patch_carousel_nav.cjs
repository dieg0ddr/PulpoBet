const fs = require('fs');
let file = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');

// Update lucide-react imports to include ChevronLeft
file = file.replace(
  "import { ChevronRight, Star as StarIcon } from 'lucide-react';",
  "import { ChevronLeft, ChevronRight, Star as StarIcon } from 'lucide-react';"
);

// Add 4 more games
const newGames = `
  { id: 13, title: 'Big Bass Splash', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
  { id: 14, title: 'Sweet Bonanza', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp' },
  { id: 15, title: 'Gates of Olympus', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
  { id: 16, title: 'Sugar Rush', provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' }
];`;

file = file.replace("];\n\nexport default function", newGames + "\n\nexport default function");
file = file.replace(
  "{ id: 12, title: \"Joker's Jewels\", provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' }",
  "{ id: 12, title: \"Joker's Jewels\", provider: 'Pragmatic Play', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },"
);

// Add arrows next to title
// Currently:
// <h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>
// </div>

const navHTML = `
          <h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>
          <div className="flex items-center gap-1 ml-4">
            <button onClick={() => setPage(prev => (prev - 1 + totalPages) % totalPages)} className="w-6 h-6 rounded-full bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] flex items-center justify-center text-[#a8a8b8] hover:text-white transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button onClick={() => setPage(prev => (prev + 1) % totalPages)} className="w-6 h-6 rounded-full bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] flex items-center justify-center text-[#a8a8b8] hover:text-white transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>`;

file = file.replace(
  '<h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>\n        </div>',
  navHTML
);

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', file);
