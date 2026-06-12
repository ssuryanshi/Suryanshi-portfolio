"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars =
      "SURYANSHI SINGH";
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(13, 17, 23, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        const progress = Math.min(
          (drops[i] * fontSize) / canvas.height,
          1
        );

        const green = [99, 153, 34];
        const gray = [95, 94, 90];
        const r = Math.round(green[0] + (gray[0] - green[0]) * progress);
        const g = Math.round(green[1] + (gray[1] - green[1]) * progress);
        const b = Math.round(green[2] + (gray[2] - green[2]) * progress);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.5}}
    />
  );
}