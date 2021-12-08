import { combineReducers } from 'redux';
import cardIconReducer from './cardIcon/cardIconReducer';
import carouselReducer from './carousel/carouselReducer';
import productReducer from './product/productReducer';

const rootReducer = combineReducers({
    product: productReducer,
    cardIcon: cardIconReducer,
    carousel: carouselReducer
});

export default rootReducer