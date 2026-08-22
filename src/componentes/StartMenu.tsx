import type { StartMenuProps } from "../types";
import { MenuItem } from "./MenuItem";

export function StartMenu({ isOpen, onClose, onNavigate }: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-9 left-0 w-[380px] bg-white border-2 border-[#0054E3] rounded-t-lg shadow-[4px_4px_16px_rgba(0,0,0,0.4)] z-[999] overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
      <div className="bg-linear-to-b from-[#0058EE] to-[#2A72E0] p-2.5 flex items-center gap-2.5">
        <div className="w-12 h-12 rounded border-2 border-white/60 bg-linear-to-br from-yellow-300 to-red-400 flex items-center justify-center text-2xl">
          😎
        </div>
        <span className="text-white font-sans text-xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
          visitante
        </span>
      </div>
      <div className="grid grid-cols-2 min-h-[280px]">
        <div className="bg-white p-2 border-r border-[#D5D2C5]">
          <div className="font-sans text-base text-gray-500 px-2 pb-1 border-b border-[#D5D2C5] mb-1">
            Programas
          </div>
          <MenuItem
            icon="📁"
            text="Início"
            action={() => { onNavigate?.("início"); onClose(); }}
          />
          <MenuItem
            icon="ℹ️"
            text="Sobre"
            action={() => { onNavigate?.("sobre"); onClose(); }}
          />
          <MenuItem
            icon="🛠️"
            text="Projetos"
            action={() => { onNavigate?.("projetos"); onClose(); }}
          />
          <MenuItem
            icon="👥"
            text="Integrantes"
            action={() => { onNavigate?.("integrantes"); onClose(); }}
          />
        </div>
        <div className="bg-[#D3E5FA] p-2">
          <div className="font-sans text-base text-gray-600 px-2 pb-1 border-b border-[#B8CCE5] mb-1">
            Sistema
          </div>
          <MenuItem
            icon="ℹ️"
            text="Sobre"
            action={() => alert("RMBYZ — coletivo sociocultural e ambiental\nRecife/PE • fundado em 2020")}
          />
        </div>
      </div>
      <div className="bg-linear-to-b from-[#0058EE] to-[#2A72E0] p-1.5 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="font-sans text-sm px-4 py-1.5 bg-[#3C6CC6] border border-black/30 rounded text-white hover:brightness-110 flex items-center gap-1"
        >
          ↩ Fechar
        </button>
      </div>
    </div>
  );
}