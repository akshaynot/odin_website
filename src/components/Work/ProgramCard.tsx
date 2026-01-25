
import React from 'react';
import { Program } from '../../data/workData';

interface ProgramCardProps {
    program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-orange-600 shadow-sm">
                    {program.impact}
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-semibold mb-3 text-gray-800 text-sm uppercase tracking-wide">Key Focus Areas</h4>
                    <ul className="space-y-2">
                        {program.goals.map((goal, idx) => (
                            <li key={idx} className="flex items-center text-gray-600 text-sm">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
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
