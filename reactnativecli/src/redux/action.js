import { ADD_TO_CART, REMOVE_CART } from './constants'

export function addToCart(item) {
    return { type: ADD_TO_CART, payload: item }
}

export function removeCart(item) {
    return { type: REMOVE_CART, payload: item }
}
