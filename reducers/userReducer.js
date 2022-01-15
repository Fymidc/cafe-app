const initialState ={
    user : []

}

export default function userReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_ONE_USER':
            return {
                
                user:payload
            }

    
        default:
           return state
    }

}