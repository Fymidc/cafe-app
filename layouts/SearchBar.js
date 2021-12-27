import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"

const SearchBar = () => {
    const [text, settext] = useState("")
   
    return (
        <View style={{ marginTop: 40 ,flexDirection:"row"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
                    <Ionicons color={"white"} style={{paddingLeft:5}}  name="location-outline" size={25} />
                    <TextInput
                    onChangeText={settext}
                        style={styles.inputs}
                        placeholderTextColor={"#606060"}
                        placeholder="search..."
                        keyboardType="default"
                    />
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
