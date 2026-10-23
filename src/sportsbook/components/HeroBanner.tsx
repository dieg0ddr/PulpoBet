import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { t } from '../../i18n';

interface HeroBannerProps {
  onLearnMore: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onLearnMore }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#100c22] via-[#130f28] to-[#16122c] border border-[#211b3d] p-5 sm:p-6 shadow-xl">
      {/* Background image + legibility overlay (darker on the left, where the title sits) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://dlwtwnztrfjsyipvwtqm.supabase.co/storage/v1/object/public/Diego%20Portfolio/Salsa/App_Banners/Pulpobet/BG_UEFA.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0818]/90 via-[#0b0818]/55 to-[#0b0818]/20 pointer-events-none"></div>

      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8f4bff]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Side */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8f4bff]">
              {t("GRANDES JOGOS")}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            {t("A LIGA DAS NAÇÕES COMEÇOU")}
          </h1>

          <div>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8f4bff] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(143,75,255,0.3)] uppercase"
            >
              <span>{t("SAIBA MAIS")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#16122a]/80 border border-[#251e49]/60 rounded-xl p-4 md:max-w-xs backdrop-blur-xs">
          <div className="flex items-center gap-2 text-[#8f4bff] text-xs font-bold uppercase tracking-wider mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t("GRANDES JOGOS")}</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {t("Os clássicos da rodada, com os mercados principais e cotações turbinadas para você apostar.")}
          </p>
        </div>
      </div>
    </div>
  );
};
