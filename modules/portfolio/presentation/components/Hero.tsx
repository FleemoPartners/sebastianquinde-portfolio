import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background decorative elements with glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Floating light spots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full floating-light"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full floating-light animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full floating-light animation-delay-4000"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Sebastian <span className="gradient-glow neon-glow">Quinde Oblitas</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-200 font-light mb-8">
          Frontend Developer
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed mb-10">
          Crafting digital experiences with precision and passion. Specialized in building scalable, accessible, and performant web applications using modern technologies.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/50 glow-effect">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all shadow-sm">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
