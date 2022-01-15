import React, { useState } from 'react'
import { Button, Dimensions, Image } from 'react-native'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SignUp = ({ navigation }) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

    const dispatch = useDispatch()

    const data = {
        username: username,
        password: password,
        email: email
    }


    const handleSignup = () => {
        //sign up logic gonna be here 
        //check if inputs not empty
        if (data.username.length !== 0 && data.email.length !== 0 && data.password.length !== null) {
           // console.log(JSON.stringify(data))
           dispatch(registerUser(JSON.stringify(data)))
         navigation.navigate("Login")
        }
        //then it will route tologin page 
      

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
                        onChangeText={setusername}
                        placeholder="username"
                        keyboardType="default"
                    />
                </View>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="mail-outline" size={25} />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={setemail}
                        placeholder="email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="lock-closed-outline" size={25} />
                    <TextInput
                        style={styles.inputs}
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
