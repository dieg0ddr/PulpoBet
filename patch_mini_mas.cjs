const fs = require('fs');
let content = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');

content = content.replace('const itemsPerPage = 4;', 'const itemsPerPage = 8;');
content = content.replace('className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 h-full"', 'className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 md:gap-3 h-full"');
// Change flex-[1] to flex-[2.5]
content = content.replace('className="flex-[1] bg-[#100d20]', 'className="flex-[2] bg-[#100d20]');

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', content);
