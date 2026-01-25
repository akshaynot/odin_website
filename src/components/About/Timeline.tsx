
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { milestones } from '../../data/aboutData';

const Timeline: React.FC = () => {
    const [visibleMilestones, setVisibleMilestones] = useState(4);
    const [showMoreButton, setShowMoreButton] = useState(true);

    const loadMore = () => {
        setVisibleMilestones(prev => Math.min(prev + 2, milestones.length));
    };

    useEffect(() => {
        if (visibleMilestones >= milestones.length) {
            setShowMoreButton(false);
        }
    }, [visibleMilestones]);

    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {milestones.slice(0, visibleMilestones).map((milestone, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >

                            {/* Icon / Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <span className="font-bold text-orange-600 text-lg">{milestone.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {showMoreButton && (
                    <div className="text-center mt-12">
                        <Button
                            onClick={loadMore}
                            variant="outline"
                            className="px-8"
                        >
                            Show More
                            <ChevronDown className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Timeline;
