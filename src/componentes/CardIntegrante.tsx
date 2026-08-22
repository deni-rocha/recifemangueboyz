import type { CardIntegranteProps } from "../types";

export function CardIntegrante({ nome, iniciais, papel }: CardIntegranteProps) {
  return (
    <div className="bg-linear-to-b from-[#FFFBF0] via-[#FFFDF5] to-[#F5F0E0] border-2 border-[#ECE9D8] rounded p-3 flex items-center gap-4 shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.08),2px_2px_6px_rgba(0,0,0,0.2)] transition-all hover:border-[#0054E3] hover:shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.08),4px_4px_10px_rgba(0,0,0,0.3)]">
      <div className="w-14 h-14 shrink-0 rounded border-2 border-white/60 bg-linear-to-br from-yellow-300 to-red-400 flex items-center justify-center font-['Bitcount_Grid_Double'] text-xl text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] select-none">
        {iniciais}
      </div>
      <div className="min-w-0">
        <div className="font-sans font-bold text-lg text-gray-700 leading-snug truncate">
          {nome}
        </div>
        {papel && (
          <div className="font-sans text-base text-[#3A6EA5] leading-snug">
            {papel}
          </div>
        )}
      </div>
    </div>
  );
}
