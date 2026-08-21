const fs = require('fs');
let code = fs.readFileSync('src/pages/PromocionesPage.tsx', 'utf-8');

// Insert import
code = code.replace(/import \{ ChevronLeft, ChevronRight, Trophy, Gift, Ticket, MonitorPlay, Calendar, ChevronDown, Gamepad2, Percent, Crown, Goal, CircleDashed \} from 'lucide-react';/, "import { ChevronLeft, ChevronRight, Trophy, Gift, Ticket, MonitorPlay, Calendar, ChevronDown, Gamepad2, Percent, Crown, Goal, CircleDashed } from 'lucide-react';\nimport BannerCarousel from '../components/BannerCarousel';");

// Replace the banner carousel section
const startStr = '{/* Banner Carousel */}';
const endStr = '{/* Beneficios Destacados Container */}';

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr);

if (startIndex > -1 && endIndex > -1) {
  code = code.substring(0, startIndex) + '{/* Banner Carousel */}\n        <BannerCarousel />\n\n        ' + code.substring(endIndex);
}

fs.writeFileSync('src/pages/PromocionesPage.tsx', code);
console.log('PromocionesPage updated');
