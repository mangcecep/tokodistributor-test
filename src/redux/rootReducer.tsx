import { combineReducers } from 'redux';
import cardIconReducer from './cardIcon/cardIconReducer';
import carouselReducer from './carousel/carouselReducer';
import productReducer, { productTotalReducer } from './product/productReducer';

const rootReducer = combineReducers({
    productTotal: productTotalReducer,
    product: productReducer,
    cardIcon: cardIconReducer,
    carousel: carouselReducer
});

export default rootReducer