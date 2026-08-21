const fs = require('fs');
let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slots = slots.replace(
  'className="flex flex-col lg:flex-row gap-4 w-full"',
  'className="flex flex-col lg:flex-row gap-4 w-full h-[400px] lg:h-[360px]"'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slots);
