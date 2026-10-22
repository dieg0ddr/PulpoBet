import React from 'react';
import { X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { t } from '../../i18n';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-lg bg-[#141123] border border-[#262042] rounded-2xl p-6 shadow-2xl space-y-4 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#1f1a38] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#8f4bff]">
          <Zap className="w-5 h-5" />
          <h2 className="text-lg font-bold text-white">{t(title)}</h2>
        </div>

        <div className="text-xs text-zinc-300 leading-relaxed space-y-3">
          <p>
            {t("Aproveite as melhores cotações do mercado brasileiro para os principais eventos do futebol nacional e internacional.")}
          </p>

          <div className="bg-[#18142a] border border-[#231e3f] rounded-xl p-3.5 space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8f4bff]" />
              <span>{t("Regras e Condições")}</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-[11px]">
              <li>{t("Bônus progressivo para apostas múltiplas com 2 ou mais seleções.")}</li>
              <li>{t("Odds mínimas de 1.25 por evento selecionado no cupom.")}</li>
              <li>{t("Válido para partidas do Brasileirão, Champions League, Copa do Brasil e Estaduais.")}</li>
              <li>{t("Sem limite máximo de ganhos adicionais em combo acumulador.")}</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#120e24] border border-[#211a42] text-[11px] text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-[#8f4bff] shrink-0" />
            <span>{t("Operado com transparência e integridade regulamentada pelo Ministério da Fazenda.")}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-[#8f4bff] hover:bg-[#7c3aed] text-white font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-md"
        >
          {t("Entendido, voltar às apostas")}
        </button>
      </div>
    </div>
  );
};
