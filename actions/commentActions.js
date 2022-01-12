import axios from 'axios';

export const getAllComments=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/comment/?customerid=&restaurantid=${restaurantid}`)

    //console.log(posts);
   // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_ALL_COMMENTS",
        payload : posts.data
    })
}