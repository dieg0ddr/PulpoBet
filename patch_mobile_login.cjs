const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetMobileHeader = `            {/* Mobile Only Login/User */}
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

const newMobileHeader = `            {/* Mobile Only Login/User */}
            <div className="flex items-center gap-2 md:hidden">
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <div 
                    className="flex items-center gap-2 bg-[#141226] border border-[#2a2745] px-2 py-1.5 rounded-lg cursor-pointer"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                      <User size={12} className="text-gray-300" />
                    </div>
                    <span className="text-xs font-medium text-white">usr00</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="bg-[#141226] border border-[#2a2745] rounded-lg w-[34px] h-[34px] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
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
          </div>

          {/* Mobile Only Balances */}
          {isLoggedIn && (
            <div className="flex md:hidden w-full gap-2">
              <div className="flex-1 flex items-center gap-2 bg-[#141226] border border-[#3ee2c6]/30 shadow-[0_0_10px_rgba(62,226,198,0.1)] rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                  <Wallet size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 1.620,20' : '***'}</span>
              </div>
              <div className="flex-1 flex items-center gap-2 bg-[#141226] border border-[#bf87ff]/30 shadow-[0_0_10px_rgba(191,135,255,0.1)] rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
                  <Gift size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{showBalance ? 'ARS$ 0,00' : '***'}</span>
              </div>
            </div>
          )}`;

content = content.replace(targetMobileHeader, newMobileHeader);
fs.writeFileSync(file, content);
