import React, { useReducer } from 'react';
import GlobalContext from "./GlobalContext";
import globalReducer from './reducers/global';
import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const GlobalState = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, { products: [], cart: []});

    const setProducts = products => {
        dispatch({ type: SET_PRODUCTS, payload: products });
    }

    const addProduct = product => {
        dispatch({ type: ADD_PRODUCT, payload: product });
    };

    const removeProduct = productId => {
        dispatch({ type: REMOVE_PRODUCT, payload: productId });
    };

    return (
        <GlobalContext.Provider
            value={
                {
                    products: state.products,
                    cart: state.cart,
                    actions: {
                        setProducts,
                        addProduct,
                        removeProduct
                    }
                }
            }
        >
            { children }
        </GlobalContext.Provider>
    );
};

export default GlobalState;