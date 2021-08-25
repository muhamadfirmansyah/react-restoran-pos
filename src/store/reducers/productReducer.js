import { products } from '../../utils/data'

const initialState = {
    products: products,
    carts: []
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
            const itemInCart = state.carts.find(item => item.id === payload);
            const newItemCart = state.products.find(item => item.id === payload);

            if (!itemInCart) {
                return {
                    ...state,
                    carts: [...state.carts, newItemCart],
                }
            } else {
                return state
            }

        default:
            return state;
    }
}

export default productReducer;