"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Generate stars with different parallax depths
    const layers = [
      { count: 200, speed: 0.1, size: 1, opacity: 0.4 },
      { count: 120, speed: 0.25, size: 1.5, opacity: 0.6 },
      { count: 60, speed: 0.5, size: 2, opacity: 0.8 },
      { count: 20, speed: 0.8, size: 3, opacity: 1 },
    ];

    type Star = {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      color: string;
    };

    const stars: Star[] = [];
    const pageHeight = document.documentElement.scrollHeight;

    for (const layer of layers) {
      for (let i = 0; i < layer.count; i++) {
        const colors = ["#ffffff", "#aac4ff", "#7ba3ff", "#c4d4ff", "#4f7df7"];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * pageHeight,
          size: layer.size + Math.random() * 0.5,
          opacity: layer.opacity * (0.5 + Math.random() * 0.5),
          speed: layer.speed,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const parallaxY = star.y - scrollY * star.speed;
        const screenY = ((parallaxY % pageHeight) + pageHeight) % pageHeight - scrollY + window.innerHeight / 2;

        if (screenY < -10 || screenY > canvas.height + 10) continue;

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, screenY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Add glow to bigger stars
        if (star.size > 2) {
          ctx.beginPath();
          ctx.arc(star.x, screenY, star.size * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            star.x, screenY, 0,
            star.x, screenY, star.size * 3
          );
          grad.addColorStop(0, `rgba(79, 125, 247, ${alpha * 0.3})`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.globalAlpha = 1;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
