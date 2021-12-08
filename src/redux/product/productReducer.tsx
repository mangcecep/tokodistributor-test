import {
    PRODUCT_REQ,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
} from './productTypes'

const productState = {
    load: false,
    data: [],
    error: null
}

const productReducer = (state = productState, action: any) => {
    switch (action.type) {
        case PRODUCT_REQ:
            return {
                ...state,
            }
        case PRODUCT_SUCCESS:
            return {
                load: true,
                data: action.payload,
                error: null
            }
        case PRODUCT_FAIL:
            return {
                load: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default productReducer