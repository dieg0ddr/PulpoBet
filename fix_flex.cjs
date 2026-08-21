const fs = require('fs');

let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'containerClassName="relative flex-1 w-full bg-gradient-to-br',
  'containerClassName="relative flex-1 w-full lg:w-auto bg-gradient-to-br'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slots);

let mini = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');
mini = mini.replace(
  'className="flex-1 w-full bg-[#100d20] border',
  'className="flex-1 w-full lg:w-auto bg-[#100d20] border'
);
fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', mini);
