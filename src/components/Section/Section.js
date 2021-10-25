import React from 'react';
import './styles.scss';

const Section = ({ children, variant = "default" }) => {
    return (
        <section className={`section section--${variant}`}>
            { children }
        </section>
    );
};

export default Section;