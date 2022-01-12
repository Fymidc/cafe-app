import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';
import commentReducer from './commentReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
    cafe:cafeReducer,
    comment:commentReducer,
    like:likeReducer
    
})

export default rootReducer;