import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// let key = null;

// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('tokenKey')
//         if (value !== null) {
//             key = value

//         }
//     } catch (e) {
//         console.log(e.message)
//     }
// }
// getData();

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


    // const posts = await axios.post("https://hidden-fjord-84882.herokuapp.com/comment",value,{
    //     headers: {
    //         "Authorization":key
    //     }
    // }).catch(e=>console.log("error message :",e.message))

    // console.log("actiondan gelen ", key)
    // console.log("actiondan gelen value", value)
    // console.log("actiondan gelen data", posts)
    // dispatch({
    //     type: "CREATE_COMMENT",
    //     payload: posts.data
    // })
}