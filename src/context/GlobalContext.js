import { createContext } from 'react';

const GlobalContext = createContext({
    products: [],
    cart: [],
    actions: {
        setProducts: products => {},
        addProduct: product => {},
        removeProduct: product => {}
    }
})

export default GlobalContext;