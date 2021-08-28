export const addCart = id => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}

export const inc = id => {
    return {
        type: "INCREMENT",
        payload: id
    }
}

export const dec = id => {
    return {
        type: "DECREMENT",
        payload: id
    }
}

export const removeCartItem = id => {
    return {
        type: "REMOVE",
        payload: id
    }
}

export const resetCart = () => {
    return {
        type: "RESET"
    }
}