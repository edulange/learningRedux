import CartActionTypes from "./action-types";

//vai receber um payload (o produto que eu quero adicionar)
export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductFromCart = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload
})