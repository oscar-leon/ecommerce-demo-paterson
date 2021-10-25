import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Button from '../Button';
import './styles.scss';

const ProductCard = (product) => {
    const { image, description, title, price } = product;
    const { actions } = useContext(GlobalContext);

    function handleAddToCart() {
        actions.addProduct(product);
    }

    return (
        <div className="product-card">
            <div className="product-card__img">
                <img className="product-card__img--element" src={image} alt={description} />
            </div>
            <div className="product-card__info">
                <div className="product-card__info--title">
                    {title}
                </div>
                <div className="product-card__actions">
                    <div className="product-card__price">
                        {price.toFixed(2)} €
                    </div>
                    <div className="product-card__button-wrapper">
                        <Button variant="add" onClick={handleAddToCart}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;