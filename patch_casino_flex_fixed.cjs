const fs = require('fs');

const file = 'src/components/CasinoEnVivoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="flex-1 min-w-[80px] max-w-[120px] flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"',
  'className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[110px] flex flex-col items-center justify-center gap-2 p-3 bg-[#100d20] border border-[#2a2745] rounded-xl hover:bg-[#1a1533] hover:border-purple-500/50 cursor-pointer transition-all group"'
);

fs.writeFileSync(file, content);
