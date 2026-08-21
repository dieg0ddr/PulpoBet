const fs = require('fs');

const file = 'src/pages/GamePage.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix interval
content = content.replace('}, 2500);', '}, 5000);');

// 2. Fix image links
const validImages = [
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/009.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/010.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/011.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/012.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/001.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/002.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/003.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/004.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/005.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/006.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/007.webp',
  'https://salsa-tech.com/wp-content/uploads/pulpo/cards/008.webp',
];

const match = content.match(/const winners = \[\s*\{[\s\S]*?\];/);
if (match) {
  let winnersBlock = match[0];
  let newBlock = winnersBlock;
  
  let index = 0;
  newBlock = newBlock.replace(/img: '([^']+)'/g, (m, p1) => {
    const replacement = "img: '" + validImages[index % validImages.length] + "'";
    index++;
    return replacement;
  });
  
  content = content.replace(winnersBlock, newBlock);
}

fs.writeFileSync(file, content);
