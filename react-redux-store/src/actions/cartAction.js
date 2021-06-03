import { SET_CART } from "../action-types/cartActionTypes";

export const addProductToCart = (dispatch) => {
    return dispatch({type:SET_CART})
} 