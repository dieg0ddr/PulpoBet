const fs = require('fs');
let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'containerClassName="relative flex-1 w-full lg:w-auto bg-gradient-to-br',
  'containerClassName="relative flex-1 w-full lg:w-auto min-h-[250px] lg:min-h-0 bg-gradient-to-br'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slots);
