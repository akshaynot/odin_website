import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
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
        <Section className="py-24 bg-white relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-orange-100/50 rounded-full mix-blend-multiply filter blur-[80px]"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-pink-100/50 rounded-full mix-blend-multiply filter blur-[80px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
                        Our History
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Journey</span> So Far
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-200 before:via-pink-200 before:to-transparent">
                    {milestones.slice(0, visibleMilestones).map((milestone, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon / Dot */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-orange-400 to-pink-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <span className="inline-flex items-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 text-xl">
                                        {milestone.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{milestone.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {showMoreButton && (
                    <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <Button
                            onClick={loadMore}
                            variant="outline"
                            className="px-10 py-4 gap-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 rounded-full font-bold shadow-sm"
                        >
                            Continue the Journey
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Timeline;
