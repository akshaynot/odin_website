
import React from 'react';
import Section from '../ui/Section';
import { impactStats } from '../../data/homeData';

const ImpactStats: React.FC = () => {
    return (
        <Section className="bg-slate-900 border-t border-b border-white/10 text-white relative overflow-hidden py-32">
            {/* Decorative background details */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-orange-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] right-[30%] w-64 h-64 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center max-w-7xl mx-auto px-4">
                {impactStats.map((stat, index) => (
                    <div key={index} className="p-4 group">
                        <div className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">
                            {stat.number}
                        </div>
                        <div className="text-sm md:text-lg font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-200 transition-colors duration-300">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ImpactStats;
