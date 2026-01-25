
import React from 'react';
import Section from '../ui/Section';
import { teamMembers } from '../../data/aboutData';

const TeamGrid: React.FC = () => {
    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-72 overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                            <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                            <p className="text-gray-500 text-sm">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TeamGrid;
