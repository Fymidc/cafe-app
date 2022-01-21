import React, { useState } from 'react'
import { Alert, Button, Dimensions, Image } from 'react-native'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions'
import axios from 'axios';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SignUp = ({ navigation }) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [error, seterror] = useState(false)

    const dispatch = useDispatch()

    const data = {
        userName: username,
        password: password,
        email: email
    }

    const handleSignupSucces=(e)=>{
        if (e.message) {
           seterror(true)
            
            Alert.alert(
                "Error!",
                "Check your inputs.",
                [
                    {
                        text: "Ok",
                        onPress: () => {setusername(""),
                        setpassword(""),
                        setemail("")},
                        style: "cancel"
                    },

                ]
            );

        }
    }

    const handleSignup = async () => {
        
        if (data.userName.length !== 0 && data.email.length !== 0 && data.password.length !== null) {
            // console.log(JSON.stringify(data))
            const res = await axios.post("https://hidden-fjord-84882.herokuapp.com/auth/register", JSON.stringify(data),
                {
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    }
                }
            ).catch(e => handleSignupSucces(e))

        
            
        }
       if(!error){
           navigation.navigate("Login")
       }
  
    }

    return (
        <View style={{ width: width }} >

            <View style={{ position: "absolute", width: width, height: height, zIndex: -1 }} >
                <Image style={{ flex: 1 }} source={{ uri: "https://www.teahub.io/photos/full/35-355574_sky-blue-gradient.jpg" }} />
            </View>

            <View style={{ marginHorizontal: 50, marginTop: 180, justifyContent: "center", backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >
                <Text style={{ paddingVertical: 20, marginHorizontal: 20, fontSize: 25, fontWeight: "700" }} >Sign Up</Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="person-outline" size={25} />
                    <TextInput
                        style={styles.inputs}
                        value={username}
                        onChangeText={setusername}
                        placeholder="username"
                        keyboardType="default"
                    />
                </View>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="mail-outline" size={25} />
                    <TextInput
                        style={styles.inputs}
                        value={email}
                        onChangeText={setemail}
                        placeholder="email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="lock-closed-outline" size={25} />
                    <TextInput
                        style={styles.inputs}
                        value={password}
                        onChangeText={setpassword}
                        placeholder="password"
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>


                <View style={{ marginTop: 25 }} >
                    <Button
                        onPress={() => handleSignup()}
                        title='Sign-up'
                    />
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {

        paddingLeft: 15,
        marginVertical: 10,
        width: 260,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0"

    },

})


export default SignUp
