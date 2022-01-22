import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { getAllCafes, getCafeNameContains } from '../actions/cafeActions'

const SearchBarSecond = () => {
    const [text, settext] = useState("")


    const dispatch = useDispatch();

   const handleCafeSearch=()=>{
    const capitalisedInput = text.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
    
    if(text.length==0){
        dispatch(getAllCafes())    
    }else{

        dispatch(getCafeNameContains(capitalisedInput))
    }
       
   }
   

    return (
        <View style={{  flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Ionicons color={"black"} style={{ paddingLeft: 15 }} name="location-outline" size={20} />
                    <TextInput
                    onChangeText={settext}
                        style={styles.inputs}
                        onSubmitEditing={()=>handleCafeSearch()}
                        placeholderTextColor={"#B0B0B0"}
                        placeholder="search..."
                        keyboardType="default"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {
        
        color:"black",
        
        marginVertical: 10,
        width: 320,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#303030"

    },
})

export default SearchBarSecond
