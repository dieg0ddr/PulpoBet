const fs = require('fs');
let code = fs.readFileSync('src/pages/CasinoEnVivoPage.tsx', 'utf-8');

code = code.replace(
  /) : idx === 9 \? \(\n                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style=\{\{ backgroundImage: 'url\("https:\/\/cms\.pulpobet\.club\/media\/images\/games\/13465\.png\?v=2"\)' \}\}<\/div>/,
  ') : idx === 9 ? (\n                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-100" style={{ backgroundImage: \'url("https://cms.pulpobet.club/media/images/games/15731.jpg?v=1")\' }}></div>'
);

code = code.replace(
  /idx === 8 \? 'Infinite Blackjack' : idx === 9 \? 'Poker' : `Mesa en Vivo \$\{idx \+ 1\}`\}/,
  'idx === 8 ? \'Infinite Blackjack\' : idx === 9 ? \'Money Time\' : `Mesa en Vivo ${idx + 1}`}'
);

code = code.replace(
  /\{idx === 2 \|\| idx === 3 \|\| idx === 8 \? 'Pragmatic Play' : 'Evolution'\}/,
  '{idx === 2 || idx === 3 || idx === 8 || idx === 9 ? \'Pragmatic Play\' : \'Evolution\'}'
);

fs.writeFileSync('src/pages/CasinoEnVivoPage.tsx', code);
