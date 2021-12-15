import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"

const SearchBarSecond = () => {
    return (
        <View style={{marginTop: 10 ,flexDirection:"row"}}>
            <GooglePlacesAutocomplete placeholder="Place.."
                styles={{
                    textInput: {
                        color:"white",
                        backgroundColor:"rgba(52, 52, 52, 0.0)" ,
                        borderRadius: 20,
                        fontWeight: "700",
                        
                    },
                    textInputContainer: {
                        
                        backgroundColor: "rgba(52, 52, 52, 0.0)",
                        borderRadius: 50,
                        
                        borderBottomWidth: 1,
                        borderBottomColor:"#696969",
                        flexDirection: "row",
                        alignItems:"center"

                    }
                }}

                textInputProps={{ placeholderTextColor: '#383838' }}

                renderLeftButton={() => (
                    <View style={{marginLeft:20}} >
                        <Ionicons color="#383838" name="location-sharp" size={20} />
                    </View>
                )}

               

            />
        </View>
    )
}

export default SearchBarSecond
