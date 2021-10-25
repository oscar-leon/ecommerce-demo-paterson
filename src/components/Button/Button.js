import React from 'react';
import './styles.scss';

const Button = ({ onClick, children, variant = "default" }) => {
    return (
        <button className={`btn btn--${variant}`} onClick={onClick}>{children}</button>
    );
};

export default Button;