
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    className?: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    href,
    type = 'button',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-200 focus:ring-orange-500",
        secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-200 focus:ring-slate-900",
        outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
        ghost: "text-slate-600 hover:text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
    };

    const sizes = "py-3 px-8 text-base"; // Standard size for now

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes} ${className}`;

    if (href) {
        return (
            <Link to={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
