const fs = require('fs');
let file = fs.readFileSync('src/pages/PromocionesPage.tsx', 'utf8');

const target = `<div className="hidden md:flex items-center gap-2 bg-[#141226] px-4 py-2 rounded-lg border border-[#2a2745] cursor-pointer hover:bg-[#1a1733] transition-colors shrink-0">
          <span className="text-gray-300 font-medium text-sm">Más recientes</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>`;

file = file.replace(target, '');

fs.writeFileSync('src/pages/PromocionesPage.tsx', file);
