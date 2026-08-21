const fs = require('fs');
let code = fs.readFileSync('src/pages/CasinoEnVivoPage.tsx', 'utf-8');

// Add the image property to the Ruleta Relampago banner
code = code.replace(
  /buttonText: 'APOSTAR',\n      bgGradient: 'from-\[#0f2e1a\] to-\[#071a0d\]',\n      blobGradient: 'from-green-600\/40 to-emerald-600\/40'\n    \}/,
  "buttonText: 'APOSTAR',\n      bgGradient: 'from-[#0f2e1a] to-[#071a0d]',\n      blobGradient: 'from-green-600/40 to-emerald-600/40',\n      image: 'https://salsa-tech.com/wp-content/uploads/pulpo/ruleta-relampago.png'\n    }"
);

// Update JSX to render the image if present
const oldJSX = `<div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>`;

const newJSX = `<AnimatePresence mode="wait">
            {banners[bannerIndex].image && (
              <motion.div
                key={\`bg-\${bannerIndex}\`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: \`url(\${banners[bannerIndex].image})\` }}
              />
            )}
          </AnimatePresence>
          {!banners[bannerIndex].image && (
            <>
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-0"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent z-0"></div>
            </>
          )}`;

code = code.replace(oldJSX, newJSX);

// Update the blob rendering to only show if there's no image
const oldBlobJSX = `<div className="absolute right-10 bottom-0 top-0 w-[40%] flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen">
            <div className={\`w-[300px] h-[300px] bg-gradient-to-tr \${banners[bannerIndex].blobGradient} rounded-full blur-[80px] transition-colors duration-500\`}></div>
          </div>`;

const newBlobJSX = `{!banners[bannerIndex].image && (
            <div className="absolute right-10 bottom-0 top-0 w-[40%] flex items-center justify-center pointer-events-none z-0">
              <div className={\`absolute w-[300px] h-[300px] bg-gradient-to-tr \${banners[bannerIndex].blobGradient} rounded-full blur-[80px] transition-colors duration-500 opacity-80 mix-blend-screen\`}></div>
            </div>
          )}`;

code = code.replace(oldBlobJSX, newBlobJSX);

fs.writeFileSync('src/pages/CasinoEnVivoPage.tsx', code);
