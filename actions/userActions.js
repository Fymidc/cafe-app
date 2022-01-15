import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const getOneUser = (id) => async dispatch => {

    const user = await axios.get(`https://hidden-fjord-84882.herokuapp.com/customer/${id}`)

    dispatch({
        type: "GET_ONE_USER",
        payload: user.data
    })
}

export const loginUser = (val) => async dispatch => {

    console.log("actiondan gelken", val)

    const user = await axios.post("https://hidden-fjord-84882.herokuapp.com/auth/login", val,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).catch(e=>console.log("error message :",e.message))

    
        console.log("actiondan  gelen",user.data.userId)

   const storeData = async () => {
        try {
          await AsyncStorage.setItem('tokenKey', user.data.message )
          await AsyncStorage.setItem('currentUser', JSON.stringify(user.data.userId) )
        } catch (e) {
          console.log("local storage error",e.message)
        }
      }

      storeData()

    dispatch({
        type: "GET_ONE_USER",
        payload: user.data.userId
    })
}

export const registerUser = (val) => async dispatch => {

    console.log("register : ",val)
    const data = await axios.post("https://hidden-fjord-84882.herokuapp.com/auth/register", val,
        {
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        }
    ).catch(e=>console.log("error message :",e.message))

    dispatch({
        type: "USER",
        payload: data.data
    })


    console.log(data)


}

/**
 * 
 * 
  "password": "5669141",
  "userName": "fatih",
 */