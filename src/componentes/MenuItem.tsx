import type { MenuItemProps } from "../types";

export function MenuItem({ icon, text, action }: MenuItemProps) {
  return (
    <div
      onClick={action}
      className="flex items-center gap-2 p-2 cursor-pointer font-['VT323'] text-base text-gray-800 hover:bg-[#2B71D1] hover:text-white rounded transition-colors"
    >
      <span className="text-xl w-7 flex justify-center">{icon}</span>
      <span>{text}</span>
    </div>
  );
}