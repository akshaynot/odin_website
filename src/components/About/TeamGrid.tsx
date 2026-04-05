import React from 'react';
import Section from '../ui/Section';
import { teamMembers } from '../../data/aboutData';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamGrid: React.FC = () => {
    return (
        <Section className="bg-slate-50 py-24">
            <div className="text-center mb-20 animate-fade-in-up">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
                    The Minds Behind It
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Team</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up w-full sm:w-80`}
                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                        {/* Image Container */}
                        <div className="relative h-80 overflow-hidden">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>

                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Social Icons - Reveal on Hover */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-sky-500 transition-colors">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 text-center relative z-20 bg-white">
                            <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                                {member.name}
                            </h3>
                            <p className="inline-block px-3 py-1 bg-slate-100 text-orange-600 font-semibold rounded-full text-sm mb-4">
                                {member.position}
                            </p>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TeamGrid;
