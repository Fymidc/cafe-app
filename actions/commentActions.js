import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getAllComments = (restaurantid, customerid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/comment/?customerid=&restaurantid=${restaurantid}`)

    //console.log(posts);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_ALL_COMMENTS",
        payload: posts.data
    })
}

export const createComment = (val) => async dispatch => {

    try {
        const value = await AsyncStorage.getItem('tokenKey')
        if (value !== null) {
            console.log("key",value)
            console.log("data",val)
            const posts = await axios.post("https://hidden-fjord-84882.herokuapp.com/comment", val, {
                headers: {
                    "Authorization": value,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            dispatch({
                type: "CREATE_COMMENT",
                payload: posts.data
            })
        }
    } catch (e) {
        console.log(e.message)
    }



}