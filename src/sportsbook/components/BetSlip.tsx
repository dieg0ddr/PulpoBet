import React, { useState } from 'react';
import { OddSelection, UserAccount } from '../types/sportsbook';
import { Trash2, Bookmark, Gift, Minus, Maximize2, X, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { t } from '../../i18n';

interface BetSlipProps {
  selections: OddSelection[];
  onRemoveSelection: (id: string) => void;
  onClearAll: () => void;
  user: UserAccount;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onPlaceBetSuccess: (stake: number, totalWin: number) => void;
}

export const BetSlip: React.FC<BetSlipProps> = ({
  selections,
  onRemoveSelection,
  onClearAll,
  user,
  onOpenAuth,
  onPlaceBetSuccess,
}) => {
  const [slipType, setSlipType] = useState<'simples' | 'multipla' | 'sistema'>('multipla');
  const [stake, setStake] = useState<number>(20);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Bonus calculation based on number of legs
  const getBonusPercent = (count: number) => {
    if (count <= 1) return 0;
    if (count === 2) return 2.5;
    if (count === 3) return 5.0;
    if (count === 4) return 7.5;
    if (count === 5) return 10.0;
    if (count === 6) return 15.0;
    if (count >= 7) return 20.0;
    return 7.5;
  };

  const bonusPercent = slipType === 'multipla' ? getBonusPercent(selections.length) : 0;

  // Total odds calculation
  const totalOdds = selections.reduce((acc, curr) => acc * curr.odds, 1);
  const roundedTotalOdds = selections.length > 0 ? Number(totalOdds.toFixed(2)) : 0;

  // Potential returns
  const baseWin = stake * roundedTotalOdds;
  const bonusAmount = (baseWin - stake) * (bonusPercent / 100);
  const totalPayout = selections.length > 0 ? baseWin + Math.max(0, bonusAmount) : 0;

  const handlePlaceBet = () => {
    setErrorMessage(null);
    if (!user.isLoggedIn) {
      onOpenAuth('login');
      return;
    }

    if (selections.length === 0) {
      setErrorMessage('Adicione seleções para realizar a aposta.');
      return;
    }

    if (stake <= 0) {
      setErrorMessage('Digite um valor de aposta válido.');
      return;
    }

    if (user.balance < stake) {
      setErrorMessage('Saldo insuficiente. Realize um depósito via Pix.');
      return;
    }

    // Trigger celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8f4bff', '#5f10b9', '#7e34d3', '#ffffff'],
      });
    } catch {
      // ignore
    }

    onPlaceBetSuccess(stake, totalPayout);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <div className="bg-[#141122] border border-[#221d3a] rounded-xl overflow-hidden shadow-xl select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#18142b] border-b border-[#221d3a]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white tracking-wider uppercase">
            {t("Cupom de Apostas")}
          </span>
          <span className="w-5 h-5 rounded-full bg-[#8f4bff] text-white text-[11px] font-extrabold flex items-center justify-center">
            {t(selections.length)}
          </span>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-zinc-400 hover:text-white p-1 rounded hover:bg-[#241f40] transition-colors"
          title={t(isMinimized ? 'Expandir cupom' : 'Minimizar cupom')}
        >
          {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!isMinimized && (
        <div className="p-3 space-y-3">
          {/* Bet Slip Types Tabs */}
          <div className="grid grid-cols-3 bg-[#0f0d1c] p-1 rounded-lg border border-[#1e1a34] text-xs font-semibold">
            <button
              onClick={() => setSlipType('simples')}
              className={`py-1.5 rounded-md transition-all text-center ${
                slipType === 'simples'
                  ? 'bg-[#1d1838] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t("Simples")}
            </button>
            <button
              onClick={() => setSlipType('multipla')}
              className={`py-1.5 rounded-md transition-all text-center relative ${
                slipType === 'multipla'
                  ? 'bg-[#1d1838] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t("Múltipla")}
              {slipType === 'multipla' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#8f4bff] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setSlipType('sistema')}
              className={`py-1.5 rounded-md transition-all text-center ${
                slipType === 'sistema'
                  ? 'bg-[#1d1838] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t("Sistema")}
            </button>
          </div>

          {/* Success Toast */}
          {showSuccessToast && (
            <div className="bg-[#8f4bff]/15 border border-[#8f4bff]/40 p-2.5 rounded-lg flex items-center gap-2 text-xs text-[#8f4bff] animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{t("Aposta realizada com sucesso! Boa sorte!")}</span>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-500/15 border border-red-500/40 p-2.5 rounded-lg flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{t(errorMessage)}</span>
            </div>
          )}

          {/* Selections List */}
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-0.5">
            {selections.length === 0 ? (
              <div className="py-8 text-center text-zinc-500 text-xs">
                {t("Selecione as cotações nas partidas para montar seu cupom")}
              </div>
            ) : (
              selections.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#18142a] border border-[#231e3f] rounded-lg p-2.5 text-xs relative group hover:border-[#362e5e] transition-colors"
                >
                  {/* Top line: Match title + Close Button */}
                  <div className="flex items-start justify-between gap-2 pr-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#201b3b] text-zinc-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {t(item.matchName.slice(0, 2).toUpperCase())}
                      </span>
                      <span className="font-semibold text-zinc-200 truncate max-w-[190px]">
                        {t(item.matchName)}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveSelection(item.id)}
                      className="text-zinc-500 hover:text-red-400 p-0.5 transition-colors absolute top-2 right-2"
                      title={t("Remover seleção")}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Market info */}
                  <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                    <span>{t(item.marketName)}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500">{t("Pré")}</span>
                  </div>

                  {/* Pick and Odds line */}
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#201b38]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-red-600/30 text-red-400 text-[9px] font-bold flex items-center justify-center">
                        {t(item.outcomeName.slice(0, 2).toUpperCase())}
                      </span>
                      <span className="font-bold text-white">{t(item.outcomeName)}</span>
                    </div>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {t(item.odds.toFixed(2).replace('.', ','))}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {selections.length > 0 && (
            <>
              {/* Accumulator Bonus Banner (matching the green card with gift in screenshot) */}
              <div className="bg-[#191222] border border-[#2b1b3d] p-2.5 rounded-lg text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#8f4bff] text-[11px] font-medium">
                  <Gift className="w-3.5 h-3.5 shrink-0" />
                  <span>{t("Mensagem adicional para bônus múltiplos")}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300">
                  <span className="text-[#8f4bff] font-mono">{t(bonusPercent.toFixed(1))}%</span>
                  <span className="text-zinc-500 font-mono">100%</span>
                </div>
                <div className="w-full bg-[#22172e] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8f4bff] h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(7.5, bonusPercent * 5))}%` }}
                  ></div>
                </div>
              </div>

              {/* Clear All action */}
              <div className="flex justify-center">
                <button
                  onClick={onClearAll}
                  className="text-xs text-zinc-400 hover:text-red-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-[#1c1833] transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>{t("Limpar tudo")}</span>
                </button>
              </div>

              {/* Combo Stake Row */}
              <div className="bg-[#18142a] border border-[#231e3f] rounded-lg p-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-200">{t("Combo")}</span>
                  {bonusPercent > 0 && (
                    <span className="flex items-center gap-1 bg-[#8f4bff]/15 text-[#8f4bff] text-[10px] font-bold px-1.5 py-0.5 rounded">
                      <Gift className="w-2.5 h-2.5" />
                      {t(bonusPercent)}%
                    </span>
                  )}
                  <span className="text-xs text-zinc-400 font-mono">{t("1 x")}</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-xs text-zinc-400 font-medium">{t("R$")}</span>
                  <input
                    type="number"
                    min="1"
                    step="5"
                    value={stake}
                    onChange={(e) => setStake(Math.max(1, Number(e.target.value)))}
                    className="w-20 bg-[#0f0d1c] border border-[#282247] rounded px-2 py-1 text-right text-xs font-mono font-bold text-white focus:outline-none focus:border-[#8f4bff]"
                  />
                </div>
              </div>

              {/* Quick stake pills */}
              <div className="flex items-center gap-1.5 justify-end text-[10px]">
                {[10, 20, 50, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => setStake(val)}
                    className={`px-2 py-0.5 rounded border transition-colors ${
                      stake === val
                        ? 'bg-[#8f4bff]/20 text-[#8f4bff] border-[#8f4bff]/40'
                        : 'bg-[#19152c] text-zinc-400 border-[#241f40] hover:text-white'
                    }`}
                  >
                    +{t(val)}
                  </button>
                ))}
              </div>

              {/* Summary Section (Resumo) */}
              <div className="bg-[#18142a] border border-[#231e3f] rounded-lg p-3 space-y-1.5 text-xs">
                <div className="text-base font-bold text-white mb-2">{t("Resumo")}</div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>{t("Cotações totais")}</span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    {t(roundedTotalOdds.toFixed(2).replace('.', ','))}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>{t("Valor total de aposta")}</span>
                  <span className="font-mono text-white tabular-nums">
                    {t("R$")} {t(stake.toFixed(2).replace('.', ','))}
                  </span>
                </div>
                {bonusPercent > 0 && (
                  <div className="flex justify-between items-center text-[#8f4bff]">
                    <span className="flex items-center gap-1">
                      {t("Ganhos extra")} <Gift className="w-3 h-3" />
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {t("R$")} {t(bonusAmount.toFixed(2).replace('.', ','))}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 border-t border-[#231e3f] text-sm">
                  <span className="font-semibold text-zinc-300">{t("Ganho total")}</span>
                  <span className="font-mono font-black text-[#8f4bff] text-base tabular-nums">
                    {t("R$")} {t(totalPayout.toFixed(2).replace('.', ','))}
                  </span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  className="p-2.5 rounded-lg bg-[#18142a] border border-[#231e3f] text-zinc-400 hover:text-white transition-colors"
                  title={t("Salvar cupom")}
                  onClick={() => alert('Cupom salvo nos seus favoritos!')}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePlaceBet}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#8f4bff] hover:bg-[#7c3aed] text-white font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(143,75,255,0.25)] flex items-center justify-center gap-2"
                >
                  {t(user.isLoggedIn ? `${t('Fazer aposta')} (R$ ${stake.toFixed(2)})` : 'Faça login ou cadastre-se')}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
