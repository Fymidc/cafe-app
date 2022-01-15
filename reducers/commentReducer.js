const initialState={
    comments:[]
}

export default function commentReducer(state=initialState,{type,payload}){
        switch (type) {
            case 'GET_ALL_COMMENTS':
                return{
                    ...state,
                    comments:payload
                }
        
            case 'CREATE_COMMENT':
                return{
                    ...state,
                    comments:[...state.comments,payload]
                }

            default:
               return state;
        }
}