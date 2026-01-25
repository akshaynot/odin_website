
import React from 'react';
import Section from '../ui/Section';
import { aboutData } from '../../data/aboutData';

const Mission: React.FC = () => {
    return (
        <Section>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-orange-600">Our Mission</h2>
                <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                    {aboutData.mission}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-1 bg-orange-500 rounded-full mr-4"></div>
                            <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {aboutData.vision}
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-1 bg-orange-500 rounded-full mr-4"></div>
                            <h3 className="text-2xl font-bold text-gray-900">Values</h3>
                        </div>
                        <ul className="space-y-3">
                            {aboutData.values.map((value, index) => (
                                <li key={index} className="flex items-center text-gray-700 text-lg">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Mission;
