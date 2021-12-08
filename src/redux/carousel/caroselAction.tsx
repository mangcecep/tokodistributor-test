import {
    CAROUSEL_REQ,
    CAROUSEL_SUCCESS,
    CAROUSEL_FAIL,
} from './carouselTypes';

import apiClient from '../services';

export const carouselReq = () => {
    return { type: CAROUSEL_REQ }
}

export const carouselSuccess = (data: any) => {
    return { type: CAROUSEL_SUCCESS, payload: data }
}

export const carouselFail = (err: any) => {
    return { type: CAROUSEL_FAIL, payload: err }
}

export const getCarousel = () => {
    return async (dispatch: any) => {
        dispatch(carouselReq);
        await apiClient.get(`/utility/home/banner-web`)
            .then(res => {
                dispatch(carouselSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(carouselFail(err.response));
            })
    }
}