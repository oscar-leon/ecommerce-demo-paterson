import React, { useContext } from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import GlobalContext from '../../context/GlobalContext';
import Button from '../../components/Button';
import RowHead from './RowHead';
import CartRow from './CartRow/';
import './styles.scss';

// TODO: move to config file.
// TODO: reuse table as component.
// TODO: move cart logic to be reused.
const SECTION_TITLE = 'carrito'; 

const Checkout = () => {
    const { cart, actions: { removeProduct } } = useContext(GlobalContext);
    const { total, items } = cart.reduce(({ total, items }, { price, quantity }) => {
        const pricePerProduct = price * quantity;
        return { total: total + pricePerProduct, items: items + quantity };
    }, { total: 0, items: 0 });
    const formatedPrice = total.toFixed(2);

    return (
        <div className="checkout-wrapper">
            <Section variant="checkout">
                <div className="cart-summary">
                    <RowHead>
                        <Title variant="capital" content={SECTION_TITLE} />
                    </RowHead>
                    {
                        cart.map(prod => <CartRow {...prod} removeProduct={removeProduct} />)
                    }
                </div>
                <div className="buy-wrapper">
                    <div className="checkout-summary">
                        <div className="checkout-articles">
                            {items} articulos
                        </div>
                        <div className="checkout-price">
                            {formatedPrice} €
                        </div>
                    </div>
                    <div className="buy-action">
                            <Button variant="buy">Finalizar compra</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Checkout;