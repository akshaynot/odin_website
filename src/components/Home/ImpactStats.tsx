
import React from 'react';
import Section from '../ui/Section';
import { impactStats } from '../../data/homeData';

const ImpactStats: React.FC = () => {
    return (
        <Section className="bg-orange-600 text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-orange-800 rounded-full opacity-20"></div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
                {impactStats.map((stat, index) => (
                    <div key={index} className="p-4">
                        <div className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-4 tracking-tight drop-shadow-md">
                            {stat.number}
                        </div>
                        <div className="text-lg md:text-xl font-medium text-orange-100 uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ImpactStats;
