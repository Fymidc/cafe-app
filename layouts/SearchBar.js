import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"

const SearchBar = () => {
    return (
        <View style={{ marginTop: 40 ,flexDirection:"row"}}>
            <GooglePlacesAutocomplete placeholder="Place.."
                styles={{
                    textInput: {
                        color:"white",
                        backgroundColor:"rgba(52, 52, 52, 0.0)" ,
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7
                    },
                    textInputContainer: {
                        
                        backgroundColor: "rgba(52, 52, 52, 0.0)",
                        borderRadius: 50,
                        marginRight: 10,
                        borderBottomWidth: 1,
                        borderBottomColor:"#eee",
                        flexDirection: "row",
                        alignItems:"center"

                    }
                }}

                textInputProps={{ placeholderTextColor: '#eee' }}

                renderLeftButton={() => (
                    <View style={{marginLeft:10}} >
                        <Ionicons color="#eee" name="location-sharp" size={20} />
                    </View>
                )}

               

            />
        </View>
    )
}

export default SearchBar
