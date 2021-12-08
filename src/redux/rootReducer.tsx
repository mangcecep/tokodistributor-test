import { combineReducers } from 'redux';
import cardIconReducer from './cardIcon/cardIconReducer';
import carouselReducer from './carousel/carouselReducer';

const rootReducer = combineReducers({
    cardIcon: cardIconReducer,
    carousel: carouselReducer
});

export default rootReducer