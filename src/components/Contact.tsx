"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contact" className="relative py-32 px-6 pb-20">
      <div className="section-divider mb-20" />

      <div
        className="nebula-glow"
        style={{
          width: 500,
          height: 500,
          bottom: "0%",
          left: "-10%",
          background: "radial-gradient(circle, #4f3ff7, transparent)",
          opacity: 0.1,
        }}
      />

      <div ref={ref} className="max-w-2xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 glow transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In <span className="text-[#4f7df7]">Touch</span>
        </h2>
        <p
          className={`text-center text-[#e0e0ff]/50 mb-16 tracking-widest text-sm uppercase transition-all duration-700 delay-100 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Send a signal across the cosmos
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`space-y-6 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#e0e0ff]/60 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-[#0a0a2a]/60 border border-[#4f7df7]/20 rounded-xl px-4 py-3 text-[#e0e0ff] placeholder-[#e0e0ff]/30 focus:outline-none focus:border-[#4f7df7]/60 transition-colors backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#e0e0ff]/60 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-[#0a0a2a]/60 border border-[#4f7df7]/20 rounded-xl px-4 py-3 text-[#e0e0ff] placeholder-[#e0e0ff]/30 focus:outline-none focus:border-[#4f7df7]/60 transition-colors backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#e0e0ff]/60 mb-2">Subject</label>
            <input
              type="text"
              className="w-full bg-[#0a0a2a]/60 border border-[#4f7df7]/20 rounded-xl px-4 py-3 text-[#e0e0ff] placeholder-[#e0e0ff]/30 focus:outline-none focus:border-[#4f7df7]/60 transition-colors backdrop-blur-sm"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-sm text-[#e0e0ff]/60 mb-2">Message</label>
            <textarea
              rows={6}
              className="w-full bg-[#0a0a2a]/60 border border-[#4f7df7]/20 rounded-xl px-4 py-3 text-[#e0e0ff] placeholder-[#e0e0ff]/30 focus:outline-none focus:border-[#4f7df7]/60 transition-colors backdrop-blur-sm resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#4f7df7] text-white rounded-xl font-medium hover:bg-[#3a66d4] transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,125,247,0.4)] cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="section-divider mb-8" />
          <p className="text-[#e0e0ff]/30 text-sm">
            &copy; {new Date().getFullYear()} Abdullah Naeem. Built with Next.js
          </p>
        </div>
      </div>
    </section>
  );
}
