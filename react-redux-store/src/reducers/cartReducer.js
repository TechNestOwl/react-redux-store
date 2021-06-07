import { SET_CART } from "../action-types/cartActionTypes"

const initialState = {
    cartItem: []
};


export const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CART:
            return (state = [...state,action.payload])
        default:
            return state
    }
}