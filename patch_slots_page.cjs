const fs = require('fs');

// Patch SlotsPage
let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'containerClassName="relative flex-1 w-full lg:w-1/2 bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500"',
  'containerClassName="relative flex-1 w-full bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500"'
);

// We should also remove lg:h-[320px] and replace with an aspect ratio or min-height to let it flow naturally, or just a more flexible height.
slots = slots.replace('className="flex flex-col lg:flex-row gap-4 w-full lg:h-[320px]"', 'className="flex flex-col lg:flex-row gap-4 w-full"');

fs.writeFileSync('src/pages/SlotsPage.tsx', slots);

// Patch MiniMasJugadosCarousel
let mini = fs.readFileSync('src/components/MiniMasJugadosCarousel.tsx', 'utf8');
mini = mini.replace(
  'className="flex-1 w-full lg:w-1/2 bg-[#100d20] border',
  'className="flex-1 w-full bg-[#100d20] border'
);

// We can remove aspect-[11/7] and use h-full w-full with object-cover on the image to make them fill the grid cell perfectly.
// Let's modify the card div:
// Replace aspect-[11/7] with h-full w-full
mini = mini.replace(
  'className="relative aspect-[11/7] rounded-xl border',
  'className="relative w-full h-full min-h-[100px] rounded-xl border'
);

// Also the wrapping div: className="flex flex-col gap-2 group cursor-pointer"
// We should make it stretch: h-full
mini = mini.replace(
  'className="flex flex-col gap-2 group cursor-pointer"',
  'className="flex flex-col gap-2 group cursor-pointer h-full"'
);

fs.writeFileSync('src/components/MiniMasJugadosCarousel.tsx', mini);
