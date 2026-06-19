import type { XPWindowProps } from "../types";

export function XPWindow({
  title,
  icon = "📁",
  children,
  className = "",
  variant = "default",
  onClose,
  onMinimize,
  onMaximize,
}: XPWindowProps) {
  const titleBarGradient =
    variant === "green"
      ? "bg-linear-to-b from-[#5A9E3E] via-[#3CB44B] to-[#1E6B2E]"
      : "bg-linear-to-b from-[#0058EE] via-[#2A72E0] to-[#0F3DA5]";

  return (
    <div
      className={`bg-[#ECE9D8] rounded-t-lg shadow-[4px_4px_12px_rgba(0,0,0,0.4)] overflow-hidden border-2 border-[#0054E3] ${className}`}
    >
      <div
        className={`${titleBarGradient} px-2 py-1.5 flex items-center justify-between min-h-[30px] select-none`}
      >
        <span className="text-white font-['VT323'] text-lg flex items-center gap-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
          {icon} {title}
        </span>
        <div className="flex gap-0.5">
          <button
            onClick={onMinimize}
            className="w-5 h-5 flex items-center justify-center bg-[#3C6CC6] border border-black/30 rounded-sm text-white text-xs hover:brightness-110 font-['Press_Start_2P'] text-[10px]"
          >
            _
          </button>
          <button
            onClick={onMaximize}
            className="w-5 h-5 flex items-center justify-center bg-[#3C6CC6] border border-black/30 rounded-sm text-white text-xs hover:brightness-110 font-['Press_Start_2P'] text-[10px]"
          >
            □
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center bg-linear-to-b from-[#E08356] via-[#C7522A] to-[#A33010] border border-black/30 rounded-sm text-white text-xs hover:brightness-110 font-['Press_Start_2P'] text-[10px]"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
