const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const oldCardGrandeJSX = `<div className="absolute inset-0 p-6 flex flex-col justify-center z-10 w-2/3">
                <h3 className="text-4xl font-black text-white drop-shadow-md mb-2 group-hover:scale-105 origin-left transition-transform">SLOTS</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Los mejores slots<br />con jackpots increíbles
                </p>
                <button className="w-fit bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/10 text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm">
                  EXPLORAR
                </button>
             </div>`;

const newCardGrandeJSX = `<div className="absolute inset-0 p-5 flex flex-col justify-between z-10 w-2/3">
                <div>
                  <h3 className="text-4xl font-black text-white drop-shadow-md mt-2 mb-2 group-hover:scale-105 origin-left transition-transform">SLOTS</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Los mejores slots<br />con jackpots increíbles
                  </p>
                </div>
                <button className="w-fit bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/10 text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm mt-auto">
                  EXPLORAR
                </button>
             </div>`;

code = code.replace(oldCardGrandeJSX, newCardGrandeJSX);

fs.writeFileSync('src/App.tsx', code);
