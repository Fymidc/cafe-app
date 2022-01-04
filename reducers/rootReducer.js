import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';

const rootReducer = combineReducers({
    cafe:cafeReducer,
    
})

export default rootReducer;