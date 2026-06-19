import { useEffect, useRef } from "react";
import type { PixelArtCanvasProps } from "../types";

export function PixelArtCanvas({
  type,
  color,
  className = "",
}: PixelArtCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(255,255,255,0.06)";
    const step = 8;
    for (let i = 0; i < w; i += step) {
      for (let j = 0; j < h; j += step) {
        if ((Math.floor(i / step) + Math.floor(j / step)) % 2 === 0) {
          ctx.fillRect(i, j, step, step);
        }
      }
    }

    const px = 6;
    const cx = Math.floor(w / 2 / px);
    const cy = Math.floor(h / 2 / px);

    ctx.fillStyle = "#1a1a1a";

    if (type === "life") {
      const r = 8;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx * dx + dy * dy <= r * r) {
            ctx.fillRect((cx + dx) * px, (cy + dy) * px, px, px);
          }
        }
      }
      ctx.fillStyle = color;
      ctx.fillRect((cx - 3) * px, (cy - 3) * px, 2 * px, 2 * px);
      ctx.fillRect((cx + 2) * px, (cy - 3) * px, 2 * px, 2 * px);
      ctx.fillRect((cx - 2) * px, (cy + 1) * px, 5 * px, px);
      ctx.fillRect((cx - 3) * px, (cy + 2) * px, px, px);
      ctx.fillRect((cx + 3) * px, (cy + 2) * px, px, px);
    } else if (type === "art") {
      ctx.fillRect((cx - 4) * px, (cy - 5) * px, px, px);
      ctx.fillRect((cx - 5) * px, (cy - 4) * px, px, px);
      ctx.fillRect((cx + 4) * px, (cy - 5) * px, px, px);
      ctx.fillRect((cx + 5) * px, (cy - 4) * px, px, px);
      for (let dy = -3; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          ctx.fillRect((cx + dx) * px, (cy + dy) * px, px, px);
        }
      }
      ctx.fillStyle = color;
      ctx.fillRect((cx - 2) * px, (cy - 1) * px, px, 2 * px);
      ctx.fillRect((cx + 2) * px, (cy - 1) * px, px, 2 * px);
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(cx * px, (cy + 2) * px, px, px);
      ctx.fillRect((cx - 1) * px, (cy + 3) * px, px, px);
      ctx.fillRect((cx + 1) * px, (cy + 3) * px, px, px);
    } else if (type === "tech") {
      ctx.fillRect((cx - 5) * px, (cy - 5) * px, 11 * px, 8 * px);
      ctx.fillStyle = color;
      ctx.fillRect((cx - 4) * px, (cy - 4) * px, 9 * px, 6 * px);
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect((cx - 1) * px, (cy + 3) * px, 3 * px, px);
      ctx.fillRect((cx - 3) * px, (cy + 4) * px, 7 * px, px);
      ctx.fillStyle = "#FFD700";
      ctx.fillRect((cx - 3) * px, (cy - 3) * px, 2 * px, px);
      ctx.fillStyle = "#FF6B6B";
      ctx.fillRect((cx + 2) * px, (cy - 3) * px, 2 * px, px);
      ctx.fillStyle = "#7ED957";
      ctx.fillRect((cx - 1) * px, (cy - 1) * px, 3 * px, px);
    } else if (type === "music") {
      ctx.fillRect((cx - 2) * px, (cy - 5) * px, px, 8 * px);
      ctx.fillRect((cx - 1) * px, (cy + 2) * px, 4 * px, px);
      ctx.fillRect((cx + 2) * px, (cy - 4) * px, px, 7 * px);
      ctx.fillRect((cx + 3) * px, (cy + 2) * px, 3 * px, px);
      ctx.fillRect(cx * px, (cy - 5) * px, 2 * px, 2 * px);
      ctx.fillRect((cx + 3) * px, (cy - 4) * px, 2 * px, 2 * px);
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect((cx - 3) * px, (cy + 2) * px, 3 * px, 3 * px);
      ctx.fillRect((cx + 1) * px, (cy + 2) * px, 3 * px, 3 * px);
    } else if (type === "food") {
      ctx.fillRect(cx * px, (cy - 5) * px, px, px);
      ctx.fillRect((cx - 1) * px, (cy - 4) * px, 3 * px, px);
      ctx.fillRect((cx - 2) * px, (cy - 3) * px, 5 * px, px);
      ctx.fillRect((cx - 3) * px, (cy - 2) * px, 7 * px, px);
      ctx.fillRect((cx - 4) * px, (cy - 1) * px, 9 * px, px);
      ctx.fillRect((cx - 4) * px, cy * px, 9 * px, 4 * px);
      ctx.fillStyle = "#FF6B6B";
      ctx.fillRect((cx - 2) * px, (cy - 2) * px, 2 * px, 2 * px);
      ctx.fillRect((cx + 1) * px, cy * px, 2 * px, 2 * px);
      ctx.fillStyle = "#7ED957";
      ctx.fillRect(cx * px, (cy - 1) * px, 2 * px, 2 * px);
      ctx.fillRect((cx - 3) * px, (cy + 1) * px, 2 * px, px);
    } else if (type === "art2") {
      ctx.fillRect((cx - 1) * px, cy * px, 3 * px, 6 * px);
      ctx.fillRect((cx - 4) * px, (cy - 5) * px, 9 * px, 5 * px);
      ctx.fillRect((cx - 3) * px, (cy - 6) * px, 7 * px, px);
      ctx.fillRect((cx - 2) * px, (cy - 7) * px, 5 * px, px);
      ctx.fillRect(cx * px, (cy - 8) * px, px, px);
      ctx.fillStyle = "#FF6B6B";
      ctx.fillRect((cx - 2) * px, (cy - 3) * px, px, px);
      ctx.fillRect((cx + 2) * px, (cy - 1) * px, px, px);
      ctx.fillRect(cx * px, (cy - 5) * px, px, px);
    }

    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
  }, [type, color]);

  return (
    <canvas ref={canvasRef} width={96} height={96} className={className} />
  );
}
