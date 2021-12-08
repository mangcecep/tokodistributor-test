import {
    CAROUSEL_REQ,
    CAROUSEL_SUCCESS,
    CAROUSEL_FAIL,
} from './carouselTypes';

const carouselState = {
    load: false,
    data: [],
    error: null
}

const carouselReducer = (state = carouselState, action: any) => {
    switch (action.type) {
        case CAROUSEL_REQ:
            return {
                ...state,
            }
        case CAROUSEL_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case CAROUSEL_FAIL:
            return {
                loading: false,
                bts: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default carouselReducer