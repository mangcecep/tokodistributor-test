import { combineReducers } from 'redux';
import carouselReducer from './carousel/carouselReducer';

const rootReducer = combineReducers({
    carousel: carouselReducer
});

export default rootReducer