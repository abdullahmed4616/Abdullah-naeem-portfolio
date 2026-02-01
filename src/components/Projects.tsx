"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Nebula Dashboard",
    description:
      "A real-time analytics dashboard built with Next.js and WebSockets, featuring live data visualization and dark-themed UI.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Chart.js"],
    link: "#",
  },
  {
    title: "Orbit CMS",
    description:
      "A headless content management system with a drag-and-drop page builder, role-based access, and API-first architecture.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    link: "#",
  },
  {
    title: "Stellar Chat",
    description:
      "An end-to-end encrypted messaging application with real-time communication, file sharing, and group channels.",
    tags: ["React Native", "Firebase", "E2E Encryption"],
    link: "#",
  },
  {
    title: "Cosmos Store",
    description:
      "A full-stack e-commerce platform with payment integration, inventory management, and responsive storefront.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative min-h-screen h-screen overflow-y-auto px-6 flex flex-col items-center justify-center">
      <div className="section-divider mb-20" />

      {/* Nebula glow */}
      <div
        className="nebula-glow"
        style={{
          width: 500,
          height: 500,
          top: "20%",
          right: "-10%",
          background: "radial-gradient(circle, #4f7df7, transparent)",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10 w-full py-16">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 glow transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="text-[#4f7df7]">Projects</span>
        </h2>
        <p
          className={`text-center text-[#e0e0ff]/50 mb-16 tracking-widest text-sm uppercase transition-all duration-700 delay-100 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Constellations of code
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className={`group block bg-[#0a0a2a]/60 backdrop-blur-sm border border-[#4f7df7]/15 rounded-2xl p-10 transition-all duration-500 hover:border-[#4f7df7]/40 hover:shadow-[0_0_40px_rgba(79,125,247,0.1)] hover:-translate-y-1 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Project icon placeholder */}
              <div className="w-12 h-12 rounded-xl bg-[#4f7df7]/10 border border-[#4f7df7]/20 flex items-center justify-center mb-8 group-hover:bg-[#4f7df7]/20 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7ba3ff"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#7ba3ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#e0e0ff]/60 leading-relaxed mb-8 text-sm text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-1.5 rounded-full bg-[#4f7df7]/10 text-[#7ba3ff] border border-[#4f7df7]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
