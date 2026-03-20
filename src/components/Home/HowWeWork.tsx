import React from 'react';
import { Lightbulb, Compass, Rocket } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb size={32} />,
      title: "Identify",
      description: "We work closely with local leaders to identify the most pressing issues within vulnerable communities.",
      color: "from-yellow-400 to-orange-500",
      bg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Compass size={32} />,
      title: "Strategize",
      description: "Our experts design tailored, sustainable programs that respect the region's cultural heritage.",
      color: "from-pink-500 to-purple-500",
      bg: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: <Rocket size={32} />,
      title: "Empower",
      description: "We implement initiatives hands-on, providing resources and training so communities can thrive independently.",
      color: "from-blue-400 to-indigo-500",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-white/5 text-white/80 font-semibold tracking-wider uppercase text-sm border border-white/10 mb-4 backdrop-blur-md">
            Our Strategy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How We Make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impact</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 font-light leading-relaxed">
            Our transparent, efficient, and community-driven approach ensures that every effort yields maximum, lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-500 opacity-20 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center mb-8 shadow-2xl shadow-${step.bg.replace('bg-', '')}/20 border border-white/10 group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`${step.iconColor} group-hover:text-white transition-colors duration-300 relative z-10`}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
