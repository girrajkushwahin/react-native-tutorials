import { ADD_TO_CART, REMOVE_CART, SET_USER_DATA } from "./constants";
const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return [...state, action.payload]

        case REMOVE_CART:
            let result = state.filter(item => item.name != action.payload)
            return [...result]

        case SET_USER_DATA:
            return [...state, action.data]
        // if want to use only action.data
        // case SET_USER_DATA:
        //     return [action.data]

        default: return state
    }
}
// can give any meaningful name to this reducer function