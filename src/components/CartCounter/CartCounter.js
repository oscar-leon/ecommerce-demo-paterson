import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import { ReactComponent as Carrito } from '../../assets/img/carrito.svg';
import './styles.scss';

const CartCounter = () => {
    const { cart } = useContext(GlobalContext);
    const { total, items } = cart.reduce(({ total, items }, { price, quantity }) => {
        const pricePerProduct = price * quantity;
        return { total: total + pricePerProduct, items: items + quantity };
    }, { total: 0, items: 0 });
    const formatedPrice = total.toFixed(2);


    return (
        <div className="cart-counter__wrapper">
            <div className="cart-logo__wrapper">
                <Link to="/checkout" className="cart-counter__link">
                    <Carrito width="32px" height="32px" />
                    <span className="cart-counter__total">{items}</span>
                </Link>
            </div>
            <div className="cart-counter-info__wrapper">
                <div className="cart-counter-info__total">
                    {formatedPrice} €
                </div>
                <div className="cart-counter-info__text">
                    <Link to="/checkout" className="cart-counter__link">
                        Mi Carrito
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartCounter;