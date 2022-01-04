import axios from 'axios';

export const getAllCafes=()=>async dispatch=>{
   // const posts = await axios.get("http://localhost:8080/restaurant")
console.log("actiondan geldii")
    dispatch({
        type : "GET_ALL_CAFEE",
        payload :posts.data
    })
}