const fs = require('fs');
let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'className="flex flex-col lg:flex-row gap-4 w-full h-[400px] lg:h-[360px]"',
  'className="flex flex-col lg:flex-row gap-4 w-full"'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slots);

let mini = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');
mini = mini.replace(
  'className="relative w-full h-full min-h-[100px] rounded-xl border border-[#2a2745]',
  'className="relative w-full aspect-[11/7] rounded-xl border border-[#2a2745]'
);
fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', mini);
