
import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'center' | 'left';
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    align = 'center',
    className = ''
}) => {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {title}
            </h1>
            {subtitle && (
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default PageHeader;
