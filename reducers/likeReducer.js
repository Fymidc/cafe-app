initialState={
    likes:[]
}

export default function likeReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_LIKES':
            return{
                ...state,
                likes:payload
            }
        default:
           return state;
    }
}