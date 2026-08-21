const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");

const newWinners = `  const [winnerIndex, setWinnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinnerIndex(prev => (prev - 1 + winners.length) % winners.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const winners = [
    { id: 1, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 2, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 3, user: 'paXXXla', prize: 'ARS$ 1.440,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
    { id: 4, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 5, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 6, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 7, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 8, user: 'paXXXla', prize: 'ARS$ 1.440,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
    { id: 9, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
  ];`;

content = content.replace(/const winners = \[\s*\{[\s\S]*?\];/, newWinners);

const oldList = `<div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3">
            {winners.map((winner, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={winner.img} alt="Game" className="w-16 h-10 object-cover rounded-md border border-[#2a2745]" />
                <div className="flex flex-col">
                  <span className="text-sm text-white font-bold">{winner.user}</span>
                  <span className="text-xs text-purple-400 font-bold">Premio: {winner.prize}</span>
                </div>
              </div>
            ))}
          </div>`;

const newList = `<div className="flex-1 overflow-hidden relative flex flex-col">
            <div className="absolute inset-0 flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {[
                  ...winners.slice(winnerIndex),
                  ...winners.slice(0, winnerIndex)
                ].slice(0, 9).map((winner) => (
                  <motion.div 
                    key={winner.id}
                    layout
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-center gap-3"
                  >
                    <img src={winner.img} alt="Game" className="w-16 h-10 object-cover rounded-md border border-[#2a2745]" />
                    <div className="flex flex-col">
                      <span className="text-sm text-white font-bold">{winner.user}</span>
                      <span className="text-xs text-purple-400 font-bold">Premio: {winner.prize}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>`;

content = content.replace(oldList, newList);
fs.writeFileSync(file, content);
