import { types } from "../types/types";


export const productsReducer = ( state = [], action ) => {

    switch ( action.type ) {

        case types.addProduct:
            return [ action.payload, ...state ]
        
        case types.deleteProduct:
            return state.filter( product => product.id !== action.payload )

        default:
            return state;
    }

}
