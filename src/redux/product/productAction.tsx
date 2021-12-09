import {
    PRODUCT_REQ,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_TOTAL_REQ,
    PRODUCT_TOTAL_SUCCESS,
    PRODUCT_TOTAL_FAIL,
} from './productTypes'

import apiClient from '../services';

export const productTotalReq = () => {
    return { type: PRODUCT_TOTAL_REQ }
}

export const productTotalSuccess = (data: any) => {
    return { type: PRODUCT_TOTAL_SUCCESS, payload: data }
}

export const productTotalFail = (err: any) => {
    return { type: PRODUCT_TOTAL_FAIL, payload: err }
}

export const getProductTotal = () => {
    return async (dispatch: any) => {
        dispatch(productTotalReq);
        await apiClient.get(`/product-recommendation`)
            .then(res => {
                dispatch(productTotalSuccess(res.data.meta));
            })
            .catch(err => {
                dispatch(productTotalFail(err.response));
            })
    }
}


export const productReq = () => {
    return { type: PRODUCT_REQ }
}

export const productSuccess = (data: any) => {
    return { type: PRODUCT_SUCCESS, payload: data }
}

export const productFail = (err: any) => {
    return { type: PRODUCT_FAIL, payload: err }
}

export const getProduct = (page: number) => {
    return async (dispatch: any) => {
        dispatch(productReq);
        await apiClient.get(`/product-recommendation?page=${page}`)
            .then(res => {
                dispatch(productSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(productFail(err.response));
            })
    }
}