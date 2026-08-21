const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Hide the Verticais container on mobile
const verticaisComment = '{/* Verticais Container */}';
const verticaisContainerOld = '<div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-4 md:px-0 scrollbar-hide w-full"';
const verticaisContainerNew = '<div className="hidden md:flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-4 md:px-0 scrollbar-hide w-full"';
content = content.replace(verticaisContainerOld, verticaisContainerNew);


// 2. Adjust Login Container
const loginContainerOldStart = `<div className="flex justify-between items-center gap-4 h-[40px] w-full">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"`;

const loginContainerNewStart = `<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 h-auto md:h-[40px] w-full">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div 
                className="flex-shrink-0 flex items-center cursor-pointer"`;

content = content.replace(loginContainerOldStart, loginContainerNewStart);

// Now find where the logo div ends and insert the mobile login block
const logoBlockEnd = `                referrerPolicy="no-referrer"
              />
            </div>`;

const mobileLoginBlock = `                referrerPolicy="no-referrer"
              />
            </div>

            {/* Mobile Only Login/User */}
            <div className="flex items-center gap-2 md:hidden">
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-[#141226] border border-[#3ee2c6]/30 shadow-[0_0_10px_rgba(62,226,198,0.1)] rounded-xl px-2 h-[34px]">
                    <span className="text-xs font-bold text-white">{showBalance ? 'ARS$ 1.620,20' : '***'}</span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full border border-[#2a2745] flex items-center justify-center bg-[#141226]"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <User size={14} className="text-gray-300" />
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-gradient-to-r from-[#6b25e6] to-[#4514a6] hover:from-[#7c37f7] hover:to-[#551fc2] text-white px-5 py-1.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(107,37,230,0.5)] transition-all"
                >
                  INGRESAR
                </button>
              )}
            </div>
          </div>`;

content = content.replace(logoBlockEnd, mobileLoginBlock);

// Now adjust the search bar container
const searchBarOld = `<div className="flex-1 md:flex-none relative w-full md:w-[280px] md:mr-auto ml-4">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar juego" 
                className="w-full bg-[#141226] border border-[#2a2745] rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#5f2eed] transition-colors"
              />
            </div>`;

const searchBarNew = `<div className="flex-1 relative w-full md:w-[280px] md:mr-auto md:ml-4">
              <Search size={16} className="absolute left-3 md:left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar juego" 
                className="w-full bg-[#141226] md:bg-[#141226] border border-[#2a2745] rounded-full py-2.5 md:py-1.5 pl-10 md:pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#5f2eed] transition-colors shadow-inner md:shadow-none"
              />
            </div>`;

content = content.replace(searchBarOld, searchBarNew);

// We also need to add hidden md:flex to the desktop login buttons wrapping div
const desktopLoginOld = `<div className="flex items-center gap-4 shrink-0">
              {isLoggedIn ? (`;

const desktopLoginNew = `<div className="hidden md:flex items-center gap-4 shrink-0">
              {isLoggedIn ? (`;

content = content.replace(desktopLoginOld, desktopLoginNew);

fs.writeFileSync(file, content);
