import React, { useState } from 'react';
import { LogOut, Eye, EyeOff, User, Diamond, Star, RefreshCw, Percent, Bell, BadgeCheck, ChevronRight, ChevronDown, X, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfilePageProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLimits?: () => void;
}

export const ProfilePage = ({ isOpen, onClose, onOpenLimits }: ProfilePageProps) => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#070514]/90 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center sm:px-4 overflow-hidden"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full h-full sm:h-auto sm:max-w-lg sm:max-h-[90vh] bg-[#0f0c29] text-white flex flex-col items-center pt-12 pb-24 px-4 sm:px-8 relative sm:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-y-auto no-scrollbar"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-[#141226] p-2 rounded-full border border-[#2a2745]"
            >
              <X size={20} />
            </button>

            {/* Header Logo */}
            <div className="flex justify-center mb-8 w-full">
              <img 
                src="https://salsa-tech.com/wp-content/uploads/pulpo/Pulpo%20logo.png" 
                alt="Pulpo Logo" 
                className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Language Selector */}
            <div className="w-full flex justify-start mb-6">
              <div className="flex items-center gap-2 bg-[#1a1733] border border-[#2a2745] rounded-lg px-3 py-1.5 cursor-pointer shadow-sm">
                <img src="https://salsa-tech.com/wp-content/uploads/pulpo/espanha_flag.png" alt="ES" className="w-5 h-3.5 object-cover rounded-sm" referrerPolicy="no-referrer" />
                <span className="text-white text-sm font-bold ml-1">ES</span>
                <ChevronDown size={14} className="text-[#8f4bff]" />
              </div>
            </div>

            {/* Greeting and Logout */}
            <div className="w-full flex justify-between items-center mb-6">
              <h1 className="text-3xl font-black">Hola, fer</h1>
              <button className="flex items-center gap-2 text-[#d8b4fe] hover:text-white transition-colors">
                <span className="text-sm font-medium">Salir</span>
                <LogOut size={18} />
              </button>
            </div>

            {/* Balance Card */}
            <div className="w-full bg-[#141226] border border-[#a855f7]/60 rounded-2xl p-5 flex items-center justify-between mb-8 shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0">
              
              {/* Left Side (Saldo & Bono) */}
              <div className="flex items-center gap-4 w-full mr-2">
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-white text-[15px] font-medium mb-1">Saldo</span>
                  <div className="flex flex-col">
                    <span className="text-white text-[15px] font-black tracking-wide leading-tight break-words">ARS$</span>
                    <span className="text-white text-[15px] font-black tracking-wide leading-tight break-words">
                      {showBalance ? '1.620,20' : '***'}
                    </span>
                  </div>
                </div>
                
                {/* Vertical Divider */}
                <div className="w-[1px] h-14 bg-gray-600/50 shrink-0"></div>
                
                <div className="flex flex-col flex-1 min-w-0 pl-1">
                  <span className="text-white text-[15px] font-medium mb-1">Bono</span>
                  <div className="flex flex-col">
                    <span className="text-[#d8b4fe] text-[15px] font-black tracking-wide leading-tight break-words">ARS$</span>
                    <span className="text-[#d8b4fe] text-[15px] font-black tracking-wide leading-tight break-words">
                      {showBalance ? '0,00' : '***'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side (Eye Button) */}
              <button 
                className="bg-transparent p-3 rounded-[12px] text-white transition-colors border border-gray-600/60 shrink-0 hover:bg-white/5"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <Eye size={22} strokeWidth={1.5} /> : <EyeOff size={22} strokeWidth={1.5} />}
              </button>
            </div>

            {/* Menu List */}
            <div className="w-full bg-[#141226] border border-[#2a2745] rounded-xl flex flex-col overflow-hidden shrink-0 mb-8">
              <MenuItem icon={<User size={18} />} title="Mi cuenta" />
              <MenuItem 
                icon={<Sliders size={18} />} 
                title="Límites por apuestas" 
                onClick={() => {
                  onClose();
                  if (onOpenLimits) onOpenLimits();
                }} 
              />
              <MenuItem icon={<Diamond size={18} />} title="Club de Beneficios" />
              <MenuItem icon={<Star size={18} />} title="Juegos Favoritos" />
              <MenuItem icon={<RefreshCw size={18} />} title="Transacciones" />
              <MenuItem icon={<Percent size={18} />} title="Rollover de Bono" />
              <MenuItem icon={<Bell size={18} />} title="Notificaciones" />
              <MenuItem icon={<BadgeCheck size={18} />} title="Datos de Registro" isLast />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({ icon, title, isLast = false, onClick }: { icon: React.ReactNode, title: string, isLast?: boolean, onClick?: () => void }) => (
  <button onClick={onClick} className={`w-full flex items-center justify-between p-4 bg-[#141226] hover:bg-[#1a1733] transition-colors ${!isLast ? 'border-b border-[#2a2745]' : ''}`}>
    <div className="flex items-center gap-4 text-gray-200">
      <div className="text-[#a8a8b8]">
        {icon}
      </div>
      <span className="font-medium text-sm">{title}</span>
    </div>
    <ChevronRight size={18} className="text-gray-500" />
  </button>
);
