const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetBlock = `<div key={idx} className="flex flex-col gap-2 cursor-pointer group">
              <div className="relative rounded-xl overflow-hidden aspect-[11/7] border border-transparent hover:border-purple-500/50 transition-all shadow-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: \`url("\${game.img}")\` }}></div>
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center border border-yellow-500/50">
                  <StarIcon size={14} className="text-yellow-500" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600/90 text-white flex items-center justify-center mb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                    <ChevronRight className="ml-1" size={20} />
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-white truncate">{game.title}</span>
            </div>`;

const newBlock = `<div key={idx} className="flex flex-col gap-2 group cursor-pointer">
              <div className="relative aspect-[11/7] rounded-xl border border-[#2a2745] group-hover:border-[#5E2891] group-hover:shadow-[0_0_15px_rgba(94,40,145,0.8)] overflow-hidden bg-gradient-to-br from-[#1a0f2e] to-[#0d071a] flex items-center justify-center transition-all duration-300">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay opacity-100 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: \`url("\${game.img}")\` }}></div>
                
                {idx === 0 && <div className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">DESTACADO</div>}
                {idx === 1 && <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider z-10 shadow-md">NUEVO</div>}
                
                <div className="absolute top-2 right-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity z-10"><StarIcon size={18} fill="currentColor" /></div>
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0">
                  <span className="text-white font-bold text-[13px] leading-tight truncate">
                    {game.title}
                  </span>
                  <span className="text-gray-400 text-[10px]">
                    {game.id === 3 || game.id === 4 || game.id === 9 || game.id === 10 ? 'Pragmatic Play' : 'Evolution'}
                  </span>
                </div>
              </div>
            </div>`;

content = content.replace(targetBlock, newBlock);
fs.writeFileSync(file, content);
