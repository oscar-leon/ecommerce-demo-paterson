import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCTS } from "../types";
import setProducts from "./actions/setProducts";
import addProduct from "./actions/addProduct";
import removeProduct from "./actions/removeProduct";

const globalReducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return setProducts(action.payload, state);
        case ADD_PRODUCT:
            return addProduct(action.payload, state);
        case REMOVE_PRODUCT:
            return removeProduct(action.payload, state);
        default:
            return state;
    }
};

export default globalReducer;