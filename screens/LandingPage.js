import React from 'react'
import { View, Text, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native'

import SearchBar from '../layouts/SearchBar'


const LandingPage = ({navigation}) => {

    
    return (

        <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/4906513/pexels-photo-4906513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,

            }}
            blurRadius={7}

            resizeMode="cover"
        >




            <KeyboardAvoidingView /**when click to input it pushes up the content */
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, justifyContent: "center", }}>
                <View style={{paddingHorizontal:30 }} >

                    <Text
                        style={{ marginBottom:35,color: "white", fontSize: 30, fontWeight: "700",textAlign:"center" }} >
                        Have you had your<Text style={{ fontWeight: "bold" }}> coffee</Text> today?
                    </Text>

                    <SearchBar navigation={navigation} />
                </View>
            </KeyboardAvoidingView>


        </ImageBackground>
    )
}

export default LandingPage
