import React from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Header';

import './styles.scss';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const sanitizedPath = pathname.replace('/', "");

    return (
        <>
        <Header />
            <main className={`layout-content ${sanitizedPath ? `layout-content--${sanitizedPath}`: " "}`}>
            {children}
        </main>
        </>
    );
};

export default Layout;