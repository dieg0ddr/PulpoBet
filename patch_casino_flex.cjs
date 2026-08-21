const fs = require('fs');

const file = 'src/components/CasinoEnVivoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 pt-1 pb-2">',
  '<div className="flex flex-wrap justify-between gap-3 pt-1 pb-2">'
);

content = content.replace(
  'className="flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"',
  'className="flex-1 min-w-[80px] max-w-[120px] flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"'
);

fs.writeFileSync(file, content);
