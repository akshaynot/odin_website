
import React from 'react';
import Section from '../ui/Section';
import { featuredPrograms } from '../../data/homeData';

const FeaturedPrograms: React.FC = () => {
    return (
        <Section className="bg-slate-50 py-24">
            <div className="text-center mb-20 animate-fade-in-up">
                <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-600 font-semibold tracking-wider uppercase text-sm border border-orange-200 shadow-sm mb-4">
                    Our Initiatives
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Programs</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
                {featuredPrograms.map((program, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="p-8 relative z-20 bg-white">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                                {program.title}
                            </h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {program.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FeaturedPrograms;
