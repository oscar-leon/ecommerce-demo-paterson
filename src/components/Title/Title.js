import React from 'react';
import './styles.scss';

const Title = ({ content, variant = 'default' }) => {
    return (
        <div className={`title title--${variant}`}>{content}</div>
    );
};

export default Title;