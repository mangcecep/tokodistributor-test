import {
    CARDICON_REQ,
    CARDICON_SUCCESS,
    CARDICON_FAIL,
} from './cardIconTypes'

const cardIconlState = {
    load: false,
    data: [],
    error: null
}

const cardIconReducer = (state = cardIconlState, action: any) => {
    switch (action.type) {
        case CARDICON_REQ:
            return {
                ...state,
            }
        case CARDICON_SUCCESS:
            return {
                load: true,
                data: action.payload,
                error: null
            }
        case CARDICON_FAIL:
            return {
                load: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default cardIconReducer