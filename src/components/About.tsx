"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "UI/UX Design", level: 70 },
  { name: "Cloud / DevOps", level: 65 },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative min-h-screen h-screen overflow-y-auto px-6 flex flex-col items-center justify-center">
      <div className="section-divider mb-20" />

      <div ref={ref} className="max-w-6xl mx-auto w-full py-16">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 glow transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About <span className="text-[#4f7df7]">Me</span>
        </h2>
        <p
          className={`text-center text-[#e0e0ff]/50 mb-12 mt-2 tracking-widest text-sm uppercase transition-all duration-700 delay-100 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Exploring the digital cosmos
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-[#0a0a2a]/60 backdrop-blur-sm border border-[#4f7df7]/15 rounded-2xl p-10">
              <p className="text-[#e0e0ff]/80 leading-relaxed mb-8 text-justify">
                I am a passionate full-stack developer with a deep love for crafting
                elegant, performant web applications. With a keen eye for design and a
                strong foundation in modern technologies, I transform ideas into
                reality.
              </p>
              <p className="text-[#e0e0ff]/80 leading-relaxed mb-8 text-justify">
                My journey in software development has taken me through diverse
                projects ranging from real-time applications to scalable cloud
                architectures. I thrive in environments that challenge me to grow
                and innovate.
              </p>
              <p className="text-[#e0e0ff]/80 leading-relaxed text-justify">
                When I am not coding, you will find me exploring new technologies,
                contributing to open-source, or sharing knowledge with the developer
                community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-[#e0e0ff]/80">{skill.name}</span>
                    <span className="text-sm text-[#7ba3ff]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#0a0a2a] rounded-full overflow-hidden border border-[#4f7df7]/10">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                        background: "linear-gradient(90deg, #4f7df7, #7ba3ff)",
                        transitionDelay: `${400 + i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
