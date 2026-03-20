
import React from 'react';
import { Program } from '../../data/workData';

interface ProgramCardProps {
    program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
    return (
        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 shadow-sm z-20">
                    {program.impact}
                </div>
            </div>
            <div className="p-8 relative z-20 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                    {program.title}
                </h3>
                <p className="text-slate-600 mb-8 font-light leading-relaxed">{program.description}</p>

                <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wider">Key Focus Areas</h4>
                    <ul className="space-y-3">
                        {program.goals.map((goal, idx) => (
                            <li key={idx} className="flex items-center text-slate-600 font-light text-sm group/list">
                                <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-3 group-hover/list:scale-150 transition-transform"></span>
                                {goal}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
