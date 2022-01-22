const initialState={
    cafes:[],
    cafe:[],
    
}

export default function cafeReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_CAFE':
            return{
                ...state,
                cafes:payload
            }

        
        case 'GET_CAFE_CONTAINS':
            return{
                ...state,
                cafes:payload
            }
        
    
        default:
          return{
             ...state,
          } 
    }
}