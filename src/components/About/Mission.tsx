import React from 'react';
import Section from '../ui/Section';
import { aboutData } from '../../data/aboutData';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const Mission: React.FC = () => {
    return (
        <Section className="py-0">
            <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 mb-24 relative overflow-hidden group">
                {/* Decorative background gradient */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-400/20 via-pink-400/10 to-transparent rounded-bl-[100%] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Mission Statement */}
                    <div className="flex flex-col justify-center animate-fade-in-up animate-delay-100">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6 w-max">
                            <Target size={16} />
                            Our Mission
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Communities</span>, <br />
                            Preserving Culture.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            {aboutData.mission}
                        </p>
                    </div>

                    {/* Vision & Values */}
                    <div className="flex flex-col gap-10 animate-fade-in-up animate-delay-200">
                        {/* Vision Card */}
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-md text-white">
                                <Eye size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                                {aboutData.vision}
                            </p>
                        </div>

                        {/* Values */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                                    <Heart size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {aboutData.values.map((value, index) => (
                                    <li key={index} className="flex items-center gap-3 bg-white/50 border border-white/80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-white group">
                                        <CheckCircle2 className="text-orange-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="text-slate-700 font-medium text-sm lg:text-base">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Mission;
