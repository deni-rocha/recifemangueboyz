import React from "react";

export interface PixelArtCanvasProps {
  type: string;
  color: string;
  className?: string;
}

export interface XPWindowProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green";
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (section: string) => void;
}

export interface TaskbarProps {
  onStartToggle: () => void;
}

export interface MenuItemProps {
  icon: string;
  text: string;
  action: () => void;
}