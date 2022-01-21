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
            case 'EDIT_COMMENT':
                return{
                    ...state,
                    comments:state.comments.map(comment=>{
                        if(comment.id === payload.id){
                            return payload;
                        }else{
                            return comment;
                        }
                    })
                }
            case 'DELETE_COMMENT':
                return{
                    ...state,
                    comments:state.comments.filter(comment=>comment.id !== payload)
                }

            default:
               return state;
        }
}