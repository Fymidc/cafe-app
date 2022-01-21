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

export const editComment=(val,id)=>async dispatch=>{

    console.log("value",val,"id",id)
    try {
        const value = await AsyncStorage.getItem('tokenKey')
        if (value !== null) {
           
            const posts = await axios.put(`https://hidden-fjord-84882.herokuapp.com/comment/${id}`, val, {
                headers: {
                    "Authorization": value,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            dispatch({
                type : "EDIT_COMMENT",
                payload : posts.data
            })
        }
    } catch (e) {
        console.log(e.message)
    }
     
 }
 
 export const deleteComment=(id)=>async dispatch=>{
    try {
        const value = await AsyncStorage.getItem('tokenKey')
        if (value !== null) {
           
            const posts = await axios.delete(`https://hidden-fjord-84882.herokuapp.com/comment/${id}`, {
                headers: {
                    "Authorization": value,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            dispatch({
                type : "DELETE_COMMENT",
                payload : id
            })
        }
    } catch (e) {
        console.log(e.message)
    }
         
 }