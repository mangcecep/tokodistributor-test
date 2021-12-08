import {
    CARDICON_REQ,
    CARDICON_SUCCESS,
    CARDICON_FAIL,
} from './cardIconTypes'

import apiClient from '../services';

export const cardIconReq = () => {
    return { type: CARDICON_REQ }
}

export const cardIconSuccess = (data: any) => {
    return { type: CARDICON_SUCCESS, payload: data }
}

export const cardIconFail = (err: any) => {
    return { type: CARDICON_FAIL, payload: err }
}

export const getCardIcon = () => {
    return async (dispatch: any) => {
        dispatch(cardIconReq);
        await apiClient.get(`/utility/home/box-category?with_staple=true`)
            .then(res => {
                dispatch(cardIconSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(cardIconFail(err.response));
            })
    }
}