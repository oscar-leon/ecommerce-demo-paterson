const addProduct = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex],
            quantity: updatedCart[updatedItemIndex].quantity + 1
        };

        updatedCart[updatedItemIndex] = updatedItem;
    }
    
    return { ...state, cart: updatedCart };
};

export default addProduct;