import axios from 'axios';

export const getAllLikes = (restaurantid, customerid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/like?restaurantid=${restaurantid}`)

    console.log("likes", restaurantid);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_ALL_LIKES",
        payload: posts.data
    })
}