
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    className?: string;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    href,
    onClick,
    type = 'button',
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-200 focus:ring-orange-500",
        secondary: "bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-gray-200 focus:ring-gray-900",
        outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
        ghost: "text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
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
        <button type={type} className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
