const removeProduct = (productId, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

export default removeProduct;