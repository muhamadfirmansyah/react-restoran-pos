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

        case "INCREMENT":
            const originalPrice = state.products.find(item => item.id === payload).price;
            const incCart = state.carts.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price + originalPrice
                    }
                } else {
                    return item;
                }
            })

            return {
                ...state,
                carts: incCart
            }

        case "DECREMENT":
            const decPrice = state.products.find(item => item.id === payload).price;
            const decCart = state.carts.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price - decPrice
                    }
                } else {
                    return item;
                }
            })

            return {
                ...state,
                carts: decCart
            }

        case "REMOVE":
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== payload)
            }

        case "RESET":
            return {
                ...state,
                carts: []
            }

        default:
            return state;
    }
}

export default productReducer;