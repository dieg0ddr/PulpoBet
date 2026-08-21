const fs = require('fs');
let content = fs.readFileSync('src/components/BannerCarousel.tsx', 'utf8');

// Add hideText prop
content = content.replace(
  'export default function BannerCarousel({ containerClassName = "relative flex-[3.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg transition-colors duration-500" }) {',
  'export default function BannerCarousel({ containerClassName = "relative flex-[3.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg transition-colors duration-500", hideText = false }) {'
);

// conditionally render text
content = content.replace(
  '<motion.div \n          key={bannerIndex}',
  '{!hideText && (<motion.div \n          key={bannerIndex}'
);

content = content.replace(
  '        </motion.div>\n      </AnimatePresence>',
  '        </motion.div>)}\n      </AnimatePresence>'
);

fs.writeFileSync('src/components/BannerCarousel.tsx', content);

let slotsContent = fs.readFileSync('src/pages/SlotsPage.tsx', 'utf8');
slotsContent = slotsContent.replace(
  '<BannerCarousel containerClassName="relative flex-[1] md:flex-[1.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500" />',
  '<BannerCarousel hideText={true} containerClassName="relative flex-[1] md:flex-[1.5] bg-gradient-to-br border border-[#2a2745] rounded-xl overflow-hidden flex items-center p-4 md:p-8 group cursor-pointer shadow-lg transition-colors duration-500" />'
);
fs.writeFileSync('src/pages/SlotsPage.tsx', slotsContent);

