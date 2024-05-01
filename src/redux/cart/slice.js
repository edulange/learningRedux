import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			//verifica se o produto já está no carrinho
			const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)

			//se ele estiver, aumentar a sua quantidade em 1
			if (productIsAlreadyInCart) {
				state.products = state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
				return
			}
			//se ele não estiver, adiciona-lo
			state.products = [...state.products, { ...action.payload, quantity: 1 }]
		},
	},
})

export const {addProduct} = 