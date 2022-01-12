import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Login = ({navigation}) => {

    const loginHandler=()=>{
        //login logic gonna be here
        //check if inputs not empty
        //after login success it will navigate to restaurant page
        navigation.navigate("Restaurants")
    }

    return (
        <View style={{ width: width }} >

            <View style={{ position: "absolute", width: width, height: height, zIndex: -1 }} >
                <Image style={{ flex: 1 }} source={{ uri: "https://www.teahub.io/photos/full/35-355574_sky-blue-gradient.jpg" }} />

            </View>

            <View style={{ marginHorizontal: 50, marginTop: 180, justifyContent: "center", backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >

                <Text style={{ paddingVertical: 20, marginHorizontal: 20, fontSize: 25, fontWeight: "700" }} >Login</Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="person-outline" size={25} />
                    <TextInput
                        style={styles.inputs}

                        placeholder="username"
                        keyboardType="default"
                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons style={{ paddingLeft: 5 }} name="lock-closed-outline" size={25} />
                    <TextInput
                        style={styles.inputs}

                        placeholder="password"
                        keyboardType="default"
                    />
                </View>


                <View style={{ marginTop: 25 }} >

                    <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 12, fontWeight: "300" }} >Don't have an account?
                        <TouchableOpacity style={{alignItems:"center", textAlign:"center"}} onPress={() => navigation.navigate("Signup")} >
                            <Text  style={{marginTop:5, color:"blue",fontSize: 12, fontWeight: "300" }} > -Sign up -</Text>
                        </TouchableOpacity> here.
                    </Text>



                    <Button
                        onPress={()=>loginHandler()}
                        title='Login'
                    />
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    inputs: {

        paddingLeft: 10,
        marginVertical: 10,
        width: 260,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0"

    },
})

export default Login
