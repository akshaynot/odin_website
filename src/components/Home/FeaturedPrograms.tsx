
import React from 'react';
import Section from '../ui/Section';
import { featuredPrograms } from '../../data/homeData';

const FeaturedPrograms: React.FC = () => {
    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Programs</h2>
                <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {featuredPrograms.map((program, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                {program.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
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
