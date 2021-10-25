import React from 'react';
import './styles.scss';

const RowHead = ({ children }) => {
    return (
        <div className="row-head">
            {children}
        </div>
    );
};

export default RowHead;