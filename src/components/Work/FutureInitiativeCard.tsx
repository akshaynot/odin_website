
import React from 'react';
import { FutureInitiative } from '../../data/workData';
import { Sparkles } from 'lucide-react';

interface FutureInitiativeCardProps {
    initiative: FutureInitiative;
}

const FutureInitiativeCard: React.FC<FutureInitiativeCardProps> = ({
    initiative,
}) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                    {initiative.status}
                </span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {initiative.title}
            </h4>
        </div>
    );
};

export default FutureInitiativeCard;
