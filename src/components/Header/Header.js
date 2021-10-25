import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './styles.scss';
import CartCounter from '../CartCounter/CartCounter';

const Header = props => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__wrapper">
                    <div className="header__logo-wrapper">
                        <Link className="header__logo-link" to='/'>
                            <img id="logo" src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <CartCounter />
            </div>
        </header>
    );
};

export default Header;