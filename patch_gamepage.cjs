const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

const newRecomendados = `const recomendados = [
  { id: 1, title: 'Mesa en Vivo 1', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/11521.jpg' },
  { id: 2, title: 'Ultimate Texas Hold Em', img: 'https://cms.pulpobet.club/media/images/games/12441.svg?v=2' },
  { id: 3, title: 'Roulette', img: 'https://cms.pulpobet.club/media/images/games/12384.jpg?v=2' },
  { id: 4, title: 'Baccarat', img: 'https://cms.pulpobet.club/media/images/games/12035.png?v=2' },
  { id: 5, title: 'Poker', img: 'https://cms.pulpobet.club/media/images/games/13465.png?v=2' },
  { id: 6, title: 'Baccarat & Sic Bo', img: 'https://cms.pulpobet.club/media/images/games/13464.png?v=2' },
  { id: 7, title: 'Speed Roulette', img: 'https://cms.pulpobet.club/media/images/games/11557.svg?v=3' },
  { id: 8, title: 'one Blackjack', img: 'https://cms.pulpobet.club/media/images/games/7261.jpg?v=2' },
  { id: 9, title: 'Infinite Blackjack', img: 'https://cms.pulpobet.club/media/images/games/12417.svg?v=2' },
  { id: 10, title: 'Money Time', img: 'https://cms.pulpobet.club/media/images/games/15731.jpg?v=1' },
];`;

content = content.replace(/const recomendados = \[\s*\{[\s\S]*?\];/, newRecomendados);

fs.writeFileSync(file, content);
