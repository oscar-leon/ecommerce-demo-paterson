import React from 'react';

const BreadCrumbs = ({ path }) => {
    return (
        <div>
            {path.join( " / ")}
        </div>
    );
};

export default BreadCrumbs;