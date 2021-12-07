import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import Cafes from '../layouts/Cafes'
import SearchBarSecond from '../layouts/SearchBarSecond'

const Restaurants = () => {
    const width = Dimensions.get('window').width
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 70, width: width, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                <Text style={{ fontSize: 20, fontWeight: "700" }} >My Place</Text>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={{ shadowOpacity: 1 }} onPress={() => console.log("bastım")} >
                    <Image on style={{ width: 50, height: 50 }} alt="de" source={{ uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" }} />
                </TouchableOpacity>
            </View>
            <View>
                <SearchBarSecond />
            </View>

            <ScrollView  >
                <Cafes />
                <Cafes />
                <Cafes />
                <Cafes />
                <Cafes />
            </ScrollView>

        </View>
    )
}

export default Restaurants
//all restaurants is gonna be ın thıs compo