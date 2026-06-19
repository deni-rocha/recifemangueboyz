import { useState, useEffect } from "react";
import type { TaskbarProps } from "../types";

export function Taskbar({ onStartToggle }: TaskbarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-9 bg-linear-to-b from-[#3168d5] via-[#2456c4] to-[#1941a5] flex items-center px-0.5 z-[1000] shadow-[0_-1px_3px_rgba(0,0,0,0.3)]">
      <button
        onClick={onStartToggle}
        className="bg-linear-to-b from-[#3C8F3C] via-[#3CB44B] to-[#1E6B2E] text-white font-['Press_Start_2P'] text-xs px-3 py-1 rounded-r-xl flex items-center gap-2 hover:brightness-110 active:brightness-90 h-7 mr-1"
      >
        <span className="flex gap-0.5 mr-1">
          <span className="w-2 h-2 bg-red-500 block"></span>
          <span className="w-2 h-2 bg-green-400 block"></span>
          <span className="w-2 h-2 bg-blue-500 block"></span>
          <span className="w-2 h-2 bg-yellow-400 block"></span>
        </span>
        iniciar
      </button>
      <div className="w-0.5 h-6 bg-white/15 mx-1"></div>
      <div className="bg-[#3C6CC6] border border-black/30 rounded-sm h-6.5 px-3 flex items-center gap-2 text-white font-['VT323'] text-base min-w-[160px] shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]">
        <span>📝</span>
        <span className="truncate">home_page</span>
      </div>
      <div className="ml-auto h-full bg-linear-to-b from-[#1B56C5] via-[#0F3DA5] to-[#0A2D8A] flex items-center px-2.5 text-white font-['VT323'] text-base gap-2">
        <div className="flex gap-1.5 text-xs">🔊 📶</div>
        <span>{time}</span>
      </div>
    </div>
  );
}
