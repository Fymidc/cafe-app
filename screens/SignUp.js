import React from 'react'
import { Button, Dimensions, Image } from 'react-native'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SignUp = () => {
    return (
        <View style={{width:width}} >

            <View style={{ position: "absolute", bottom: 170, width: width, height: height, zIndex: -1 }} >
                <Image style={{flex:1}} source={{uri:"https://www.teahub.io/photos/full/35-355574_sky-blue-gradient.jpg"}} />
            </View>

            <View style={{ marginHorizontal: 50, justifyContent: "center", backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >
                <Text style={{ paddingVertical: 20, marginHorizontal: 20, fontSize: 25, fontWeight: "700" }} >Sign Up</Text>
               
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
                    <Ionicons style={{paddingLeft:5}}  name="person-outline" size={25} />
                    <TextInput
                        style={styles.inputs}

                        placeholder="username"
                        keyboardType="default"
                    />
                </View>


                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
                    <Ionicons style={{paddingLeft:5}}  name="mail-outline" size={25} />
                    <TextInput
                        style={styles.inputs}

                        placeholder="email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
                    <Ionicons style={{paddingLeft:5}}  name="lock-closed-outline" size={25} />
                    <TextInput
                        style={styles.inputs}

                        placeholder="password"
                        keyboardType="default"
                    />
                </View>


                <View style={{ marginTop: 25 }} >
                    <Button

                        title='Sign-up'
                    />
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {

        paddingLeft:15,
        marginVertical: 10,
        width: 260,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0"

    },

})


export default SignUp
