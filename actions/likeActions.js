import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllLikes = (restaurantid, customerid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/like?restaurantid=${restaurantid}`)

    console.log("likes", restaurantid);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_ALL_LIKES",
        payload: posts.data
    })
}
//*** */
export const getCustomerLikes = (customerid, restaurantid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/like?customerid=${customerid}&restaurantid=${restaurantid}`)

    //console.log("likes:cid", customerid, "rid:", restaurantid);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_CUSTOMER_LIKES",
        payload: posts.data
    })
}

export const createLike = (customerid, restaurantid) => async dispatch => {


    console.log("actiondan gelen cid:", customerid, "restıd:", restaurantid)
    const data = {
        restaurantid: restaurantid,
        customerid: customerid,
    }

    try {
        const value = await AsyncStorage.getItem('tokenKey')
        if (value !== null) {
            console.log("key",value)
            
            const res =  await axios.post("https://hidden-fjord-84882.herokuapp.com/like", data, {
                headers: {
                    "Authorization": value,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            dispatch({
                type: "ADD_LIKE",
                payload: res.data
            })
        }
    } catch (e) {
        console.log(e.message)
    }


}

export const deleteLike = (id) => async dispatch => {

    try {
        const value = await AsyncStorage.getItem('tokenKey')
        if (value !== null) {
            console.log("key",value)
            
            await axios.delete(`https://hidden-fjord-84882.herokuapp.com/like/${id}`, {
                headers: {
                    "Authorization": value,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            dispatch({
                type: "DELETE_LIKE",
                payload: id
            })
        }
    } catch (e) {
        console.log(e.message)
    }

}