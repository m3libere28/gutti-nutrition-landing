import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, onClick, to, className = '' }) => {
    const btnClass = `gutti-button ${className}`;

    if (to) {
        return (
            <Link to={to} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
