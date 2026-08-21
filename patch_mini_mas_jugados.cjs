const fs = require('fs');

const file = 'src/components/MiniMasJugadosCarousel.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import React, { useState } from 'react';", 
  "import React, { useState, useEffect } from 'react';"
);

// Insert useEffect before nextPage
const useEff = `  const totalPages = Math.ceil(masJugadosGames.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const nextPage = () => {`;
  
content = content.replace(/  const totalPages = Math\.ceil\(masJugadosGames\.length \/ itemsPerPage\);\s*const nextPage = \(\) => {/, useEff);

// Replace header section
const oldHeader = `<div className="flex bg-[#0b0816] rounded-md ml-2 border border-[#2a2745]">
            <button 
              onClick={prevPage}
              className="p-1 hover:bg-[#2a2745] transition-colors rounded-l-md text-gray-400 hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextPage}
              className="p-1 hover:bg-[#2a2745] transition-colors rounded-r-md text-gray-400 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>`;

const newHeader = `<button className="flex items-center gap-1 bg-[#1a1435] hover:bg-[#231b46] border border-[#30255a] text-[#a8a8b8] hover:text-white px-3 py-1 rounded-full text-[10px] font-bold transition-all ml-auto">
            VER MÁS <ChevronRight size={12} />
          </button>`;

content = content.replace(oldHeader, newHeader);

// Expand header wrap slightly
content = content.replace(
  `<div className="flex items-center gap-2">`,
  `<div className="flex items-center gap-2 w-full justify-between">`
);

content = content.replace(
  `<div className="flex items-center gap-2 w-full justify-between">\n          <span`,
  `<div className="flex items-center gap-2">\n          <span`
);

content = content.replace(
  `          <h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>`,
  `          <h3 className="font-bold text-sm md:text-base tracking-wider text-white">MÁS JUGADOS</h3>\n        </div>\n        ${newHeader}`
);
content = content.replace(newHeader + `\n        </div>\n      </div>`, `      </div>`); // clean up the double insertion


// The actual safe way to replace the header is to use regex or index to perfectly match the flex justify-between row
