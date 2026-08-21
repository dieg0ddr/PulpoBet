const fs = require('fs');

// Patch SlotsPage
let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'containerClassName="relative flex-[1] md:flex-[1.5] bg-gradient-to-br',
  'containerClassName="relative flex-1 w-full lg:w-1/2 bg-gradient-to-br'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slots);

// Patch MiniMasJugadosCarousel
let mini = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');
mini = mini.replace(
  'className="flex-[2] bg-[#100d20] border',
  'className="flex-1 w-full lg:w-1/2 bg-[#100d20] border'
);
fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', mini);
