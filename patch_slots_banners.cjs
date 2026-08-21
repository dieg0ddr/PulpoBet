const fs = require('fs');

let slots = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');

const customBanners = `
const slotsBanners = [
  { id: 1, image: 'https://salsa-tech.com/wp-content/uploads/pulpo/-ESTRENOS.png' },
  { id: 2, image: 'https://salsa-tech.com/wp-content/uploads/pulpo/-LOS_MAS_JUGADOS.png' }
];

export default function SlotsPage`;

slots = slots.replace('export default function SlotsPage', customBanners);

slots = slots.replace(
  '<BannerCarousel hideText={true}',
  '<BannerCarousel customBanners={slotsBanners} hideText={true}'
);

fs.writeFileSync('src/pages/SlotsPage.tsx', slots);
