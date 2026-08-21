const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const correctWinners = `
  const winners = [
    { id: 1, user: '***999', game: 'Aviator', amount: '228.600', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/aviator.png' },
    { id: 2, user: '***831', game: 'Sweet Bonanza', amount: '124.500', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/sweet%20bonanza.png' },
    { id: 3, user: '***402', game: 'Roulette Live', amount: '89.200', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/evolution.png' },
    { id: 4, user: '***717', game: 'Gates of Olympus', amount: '65.400', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/gates%20of%20olympus.png' },
    { id: 5, user: '***155', game: 'Spaceman', amount: '45.800', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/spaceman.png' },
    { id: 6, user: '***293', game: 'Blackjack', amount: '32.100', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/pragmatic.png' }
  ];
`;

code = code.replace(/  const winners = \[\s*\{\s*name: "Carlos M\.", amount: "\$45\.000", game: "Sweet Bonanza" \},\s*\{\s*name: "Laura G\.", amount: "\$12\.500", game: "Roulette Live" \},\s*\{\s*name: "Diego R\.", amount: "\$89\.000", game: "Gates of Olympus" \},\s*\{\s*name: "Ana P\.", amount: "\$5\.200", game: "Blackjack" \},\s*\{\s*name: "Juan S\.", amount: "\$150\.000", game: "Aviator" \}\s*\];/, correctWinners);

fs.writeFileSync('src/App.tsx', code);
