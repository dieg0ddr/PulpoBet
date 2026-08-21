const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

const newWinners = `  const winners = [
    { id: 1, user: 'alXXXXXXno', prize: 'ARS$ 1.136,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp' },
    { id: 2, user: 'maXXXXXXia', prize: 'ARS$ 2.450,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
    { id: 3, user: 'paXXXla', prize: 'ARS$ 1.440,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/013.webp' },
    { id: 4, user: 'roXXXXXXto', prize: 'ARS$ 8.900,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/014.webp' },
    { id: 5, user: 'juXXXXXXan', prize: 'ARS$ 3.500,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/015.webp' },
    { id: 6, user: 'feXXXXXXpe', prize: 'ARS$ 5.220,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/016.webp' },
    { id: 7, user: 'caXXXXXXos', prize: 'ARS$ 1.050,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp' },
    { id: 8, user: 'luXXXXXXis', prize: 'ARS$ 4.300,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp' },
    { id: 9, user: 'anXXXXXXna', prize: 'ARS$ 7.890,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp' },
    { id: 10, user: 'diXXXXXXgo', prize: 'ARS$ 2.100,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp' },
    { id: 11, user: 'seXXXXXXio', prize: 'ARS$ 9.400,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp' },
    { id: 12, user: 'vaXXXXXXia', prize: 'ARS$ 6.340,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp' },
    { id: 13, user: 'leXXXXXXdo', prize: 'ARS$ 1.800,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/009.webp' },
    { id: 14, user: 'gaXXXXXXel', prize: 'ARS$ 3.750,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/010.webp' },
    { id: 15, user: 'brXXXXXXno', prize: 'ARS$ 5.990,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp' },
    { id: 16, user: 'tiXXXXXXgo', prize: 'ARS$ 8.120,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp' },
    { id: 17, user: 'raXXXXXXel', prize: 'ARS$ 2.650,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/013.webp' },
    { id: 18, user: 'miXXXXXXel', prize: 'ARS$ 4.900,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/014.webp' },
    { id: 19, user: 'soXXXXXXia', prize: 'ARS$ 1.250,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/015.webp' },
    { id: 20, user: 'peXXXXXXro', prize: 'ARS$ 7.450,00', img: 'https://salsa-tech.com/wp-content/uploads/pulpo/cards/016.webp' },
  ];`;

content = content.replace(/const winners = \[\s*\{[\s\S]*?\];/, newWinners);

fs.writeFileSync(file, content);
