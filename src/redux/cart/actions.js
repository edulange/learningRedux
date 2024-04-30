import CartActionTypes from "./action-types";

//vai receber um payload (o produto que eu quero adicionar)
export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})