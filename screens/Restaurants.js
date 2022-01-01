import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Animated, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabBar from '../layouts/BottomTabBar'
import Cafes from '../layouts/Cafes'
import SearchBarSecond from '../layouts/SearchBarSecond'

const Restaurants = ({ navigation,...props }) => {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    React.useEffect(()=>{
        navigation.addListener("beforeRemove",(e)=>{
            
            e.preventDefault()
        })
    },[])


    const value = useState(new Animated.Value(0))[0]
    const [open, setopen] = useState(false)

    // const bottomSlider = () => {
    //     Animated.spring(value, {
    //         toValue: open ? 0 : 250,
    //         duration: 1000,
    //         useNativeDriver: false
    //     }).start(() => setopen(!open))

    // }

    const bottomSlider=()=>{
        if(!open){
            Animated.spring(value, {
                toValue: 250,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setopen(!open)
        }else{
            Animated.spring(value, {
                toValue:-10,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setopen(!open)
        }
    }

    return (
        <View style={{ flex: 1 ,backgroundColor:"#FFFFFF"}}>
            <View style={{height: 70, width: width, display: "flex", flexDirection: "row", justifyContent: "space-around" ,alignItems:"center"}} >
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
                <Cafes navigation={navigation} />
                <Cafes />
                <Cafes />
                <Cafes />
                <Cafes />
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
                    <View style={{flex:1,justifyContent:"space-around",marginHorizontal:30,marginVertical:15}} >

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