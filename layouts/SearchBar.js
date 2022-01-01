import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"

const SearchBar = ({navigation}) => {
    const [text, settext] = useState("")
   
    return (
        <View style={{ marginTop: 40 ,flexDirection:"row",justifyContent:"center"}}>
            <View style={{flexDirection:"row",alignItems:"center",
            borderBottomWidth:1,
            marginHorizontal:15,
            borderBottomColor:"white",
            borderRadius:15,
            justifyContent:"center"}} >
                  <Pressable style={{padding:5}} onPress={()=>navigation.navigate("Restaurants")} >
                      <Text style={{color:"white",fontSize:20,marginLeft:5}} >Let's explore places</Text>
                  </Pressable>
                  <Ionicons color={"white"} style={{paddingLeft:5,marginRight:5}}  name="send-outline" size={18} />

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {
        color:"white",
        paddingLeft: 10,
        marginVertical: 10,
        width: 260,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0"

    },
})

export default SearchBar
