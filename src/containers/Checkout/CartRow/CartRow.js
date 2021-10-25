import React from 'react';
import { ReactComponent as Papelera } from '../../../assets/img/bin.svg';
import './styles.scss';

const CartRow = ({ id, title, price, removeProduct, quantity }) => {
    const deleteHandler= () => {
        removeProduct(id)
    }

    return (
        <div className="cart-row">
            <div className="cart-row__title">
                {title}
            </div>
            <div className="cart-row__info">
                <div className="cart-row__price">{(price * quantity).toFixed(2)} €</div>
                <div className="cart-row__delete" onClick={deleteHandler}>
                    <Papelera width="14px" height="14px" />
                </div>
            </div>
        </div>
    );
};

export default CartRow;