import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';
import commentReducer from './commentReducer';
import likeReducer from './likeReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    cafe:cafeReducer,
    comment:commentReducer,
    like:likeReducer,
    user:userReducer
    
})

export default rootReducer;