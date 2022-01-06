import axios from 'axios';

export const getAllCafes=()=>async dispatch=>{
   const posts = await axios.get("https://hidden-fjord-84882.herokuapp.com/restaurant")
    dispatch({
        type : "GET_ALL_CAFE",
        payload :posts.data
    })
}