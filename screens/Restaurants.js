import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Animated, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux'
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabBar from '../layouts/BottomTabBar'
import Cafes from '../layouts/Cafes'
import SearchBarSecond from '../layouts/SearchBarSecond'

const Restaurants = ({ navigation, ...props }) => {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height



    const cafe = useSelector(state => state.cafe)

    // console.log("state den gelen: ",cafe.cafes)

    React.useEffect(() => {
        navigation.addListener("beforeRemove", (e) => {

            e.preventDefault()
        })
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('tokenKey')
            if (value !== null) {
                setuser(value)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

   
 

    const value = useState(new Animated.Value(0))[0]
    const [user, setuser] = useState(null)
    const [open, setopen] = useState(false)

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('tokenKey')
            await AsyncStorage.removeItem('currentUser')
            setuser(null)
        } catch (e) {
            console.log("removing items ", e.message)
        }
        
    }

    getData()
    
   
    const bottomSlider = () => {
        if (!open) {
            Animated.spring(value, {
                toValue: 250,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setopen(!open)
        } else {
            Animated.spring(value, {
                toValue: -10,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setopen(!open)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ height: 70, width: width, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                <Text style={{ fontSize: 20, fontWeight: "700" }} >My Place</Text>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={{ shadowOpacity: 1 }} onPress={() => console.log("bastım")} >
                    {user !== null ? <Ionicons style={{ padding: 10 }} onPress={() => removeValue()} color="black" name="log-out-outline" size={28} />
                        : <Ionicons style={{ padding: 10 }} onPress={() => navigation.navigate("Login")} color="black" name="lock-closed-outline" size={28} />
                    }

                </TouchableOpacity>
            </View>
            <View>
                <SearchBarSecond />
            </View>

            <ScrollView >
                {cafe.cafes.length === 0 ? <Text style={{ textAlign: "center", marginVertical: 150 }} >LOADİNG</Text> : cafe.cafes.map(cafe => (

                    <Cafes key={cafe.id} cafe={cafe} navigation={navigation} />
                ))}

            </ScrollView>

            <View style={{ flex: 1, justifyContent: "flex-end" }} >
                <Animated.View
                    style={{
                        backgroundColor: "#F5F5F5",

                        height: value,

                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderWidth: 0
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "space-around", marginHorizontal: 30, marginVertical: 15 }} >

                        <TouchableOpacity onPress={() => console.log("bastım")} >
                            <Text>My Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Comments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Favorites</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </View>

                </Animated.View>
            </View>






            <BottomTabBar bottomSlider={bottomSlider} />


        </View>
    )
}

export default Restaurants
//all restaurants is gonna be ın thıs compo
