import {
    PRODUCT_REQ,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
} from './productTypes'

import apiClient from '../services';

export const productReq = () => {
    return { type: PRODUCT_REQ }
}

export const productSuccess = (data: any) => {
    return { type: PRODUCT_SUCCESS, payload: data }
}

export const productFail = (err: any) => {
    return { type: PRODUCT_FAIL, payload: err }
}

export const getProduct = () => {
    return async (dispatch: any) => {
        dispatch(productReq);
        await apiClient.get(`/product-recommendation?page=1`)
            .then(res => {
                dispatch(productSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(productFail(err.response));
            })
    }
}