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

        case 'GET_ONE_CAFE':
            return{
                ...state,
                cafe:payload
            }
            
        case 'GET_CAFE_CONTAINS':
            return{
                ...state,
                cafes:payload
            }
        case 'GET_FILTERED_CAFE':
    
            let restaurant=state.cafes.filter(z=> z.info.some(c=>c==="Restaurant"))
            console.log(restaurant)
                if(restaurant){
                    return{...state,cafes:restaurant}
                }
            return{
                ...state,
                cafes:[]
                
            }

    
        default:
          return{
             ...state,
          } 
    }
}