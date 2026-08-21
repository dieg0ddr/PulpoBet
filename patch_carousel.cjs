const fs = require('fs');

let file = fs.readFileSync('src/components/BannerCarousel.tsx', 'utf8');

// The exported banners array remains intact.
file = file.replace(
  'export default function BannerCarousel({ containerClassName = "relative flex-[3.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg transition-colors duration-500", hideText = false }) {',
  'export default function BannerCarousel({ containerClassName = "relative flex-[3.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg transition-colors duration-500", hideText = false, customBanners }: any) {\n  const displayBanners = customBanners || banners;'
);

file = file.replace(/banners\[bannerIndex\]/g, 'displayBanners[bannerIndex]');
file = file.replace(/banners\.length/g, 'displayBanners.length');
file = file.replace(/banners\.map/g, 'displayBanners.map');

fs.writeFileSync('src/components/BannerCarousel.tsx', file);
