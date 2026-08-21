const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const winnersCode = `
  const winners = [
    { name: "Carlos M.", amount: "$45.000", game: "Sweet Bonanza" },
    { name: "Laura G.", amount: "$12.500", game: "Roulette Live" },
    { name: "Diego R.", amount: "$89.000", game: "Gates of Olympus" },
    { name: "Ana P.", amount: "$5.200", game: "Blackjack" },
    { name: "Juan S.", amount: "$150.000", game: "Aviator" }
  ];
`;

const insertIndex = code.indexOf('useEffect(() => {\n    const interval = setInterval(() => {\n      setWinnerIndex(prev => (prev + 1)');
if(insertIndex > -1) {
  code = code.substring(0, insertIndex) + winnersCode + code.substring(insertIndex);
}

fs.writeFileSync('src/App.tsx', code);
