const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace {recomendados.map( to {recomendados.slice(page * 5, (page + 1) * 5).map(
content = content.replace('{recomendados.map((game, idx) => (', '{recomendados.slice(page * 5, (page + 1) * 5).map((game, idx) => (');

// Add click handlers for buttons
content = content.replace(
  '<button \n              className="w-8 h-8 rounded-full bg-[#181530] border border-[#2a2745] flex items-center justify-center text-gray-400 hover:text-white transition-colors"\n            >',
  '<button \n              onClick={() => setPage(p => Math.max(0, p - 1))}\n              className="w-8 h-8 rounded-full bg-[#181530] border border-[#2a2745] flex items-center justify-center text-gray-400 hover:text-white transition-colors"\n            >'
);
content = content.replace(
  '<button \n              className="w-8 h-8 rounded-full bg-[#181530] border border-[#2a2745] flex items-center justify-center text-gray-400 hover:text-white transition-colors"\n            >\n              <ChevronRight size={16} />\n            </button>',
  '<button \n              onClick={() => setPage(p => Math.min(Math.ceil(recomendados.length / 5) - 1, p + 1))}\n              className="w-8 h-8 rounded-full bg-[#181530] border border-[#2a2745] flex items-center justify-center text-gray-400 hover:text-white transition-colors"\n            >\n              <ChevronRight size={16} />\n            </button>'
);

// We need to also replace the aspect ratio to match the Casino En Vivo games more closely, aspect-[11/7]
content = content.replace('aspect-[16/10]', 'aspect-[11/7]');

fs.writeFileSync(file, content);
