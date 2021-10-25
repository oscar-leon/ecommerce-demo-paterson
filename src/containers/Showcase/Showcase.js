import React, { useContext, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Section from '../../components/Section';
import Title from '../../components/Title';
import BreadCrumbs from '../../components/BreadCrumbs';
import GlobalContext from '../../context/GlobalContext';
import getProducts from '../../services/products';
import './styles.scss';

const SECTION_TITLE = 'productos destacados'; // TODO: move to config file.
const SECTION_BREADCRUMBS = ["todos los productos", 'cocina', 'productos destacados'];

const Showcase = () => {
    const { actions, products } = useContext(GlobalContext);

    useEffect(() => {
        getProducts()
            .then(fetchedProducts => {
                actions.setProducts(fetchedProducts)
            })
    }, []);

    return (
        <Section>
            <div className="section-info section-info--showcase">
                <Title content={SECTION_TITLE} variant="big"/>
                <BreadCrumbs path={SECTION_BREADCRUMBS} />
            </div>
            <div className="products-container">
                {
                    products.map(product => <ProductCard key={product.id} {...product} />)
                }
            </div>
        </Section>
    );
};

export default Showcase;