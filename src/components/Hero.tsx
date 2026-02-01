"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Nebula glows */}
      <div
        className="nebula-glow"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          left: "-10%",
          background: "radial-gradient(circle, #4f7df7, transparent)",
        }}
      />
      <div
        className="nebula-glow"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          right: "-5%",
          background: "radial-gradient(circle, #7b3ff7, transparent)",
          opacity: 0.1,
        }}
      />

      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[#7ba3ff] text-sm tracking-[0.3em] uppercase mb-4">
          Welcome to my universe
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow">
          <span className="text-white">Abdullah</span>{" "}
          <span className="text-[#4f7df7]">Naeem</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#e0e0ff]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer crafting digital experiences
          <br />
          that push boundaries and inspire.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#4f7df7] text-white rounded-full font-medium hover:bg-[#3a66d4] transition-colors duration-300 hover:shadow-[0_0_30px_rgba(79,125,247,0.4)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#4f7df7]/50 text-[#7ba3ff] rounded-full font-medium hover:bg-[#4f7df7]/10 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto opacity-50"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="#7ba3ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
