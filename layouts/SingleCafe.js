import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, ImageBackground, Pressable, ScrollView, TextInput, KeyboardAvoidingView, Linking, Platform } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from "expo-linear-gradient"
import Comment from './Comment';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../actions/commentActions';
const SingleCafe = ({ route }) => {

    const [userid, setuserid] = useState("")

    const buttonHandler = () => {
        console.log("button")
    }

    const dispatch = useDispatch();
   

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('currentUser')
            if (value !== null) {
                setuserid(value)
                console.log("userrr id ",value)
            }
        } catch (e) {
            console.log(e.message)
        }
    }
   
    
    const [text, onChangeText] = React.useState("");

    const comments = useSelector(state => state.comment)
    const likes = useSelector(state => state.like)

    const handleLike = (id) => {
        console.log("likeid: ", id)
    }

    const restaurantid =route.params.map(cafe=>cafe.id)
    console.log("restaurant id",restaurantid[0])

    const data ={
        text: text,
        customerid:userid ,
        restaurantid:JSON.stringify(restaurantid[0])
    }
    getData();

    const handleCommnetCreate = () => {
       
        dispatch(createComment(JSON.stringify(data)))
    }

    //console.log("route den gelen: ", route.params.map(cafe => cafe.id))
    // console.log("single cofffe likes: ",likes)
    const address = route.params.map(cafe => cafe.adress);
    const phone = route.params.map(cafe => cafe.telno);
    const website = route.params.map(cafe => cafe.website);
    const openGps = (lat, lng) => {
        //    console.log("haritas")
        //    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        //    var url = scheme + address;
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`)
        // Linking.openURL(url);
    }

    const openCaller = () => {
        Linking.openURL(`tel:${phone}`)
    }

    const openWebsite = () => {
        Linking.openURL(`${website}`)
    }


    return (
        <View>


            {route.params.map(cafe => (
                <ImageBackground
                    style={styles.image}
                    alt="cb"
                    key={cafe.id}


                    source={{ uri: cafe.images[0] }} >

                    <LinearGradient

                        start={{ x: 0.1, y: 1 }}
                        colors={['#000000', '#00000000']}
                        end={{ x: 0.1, y: 0.4 }}
                        style={{ top: 90, height: '100%', width: '100%' }}>



                    </LinearGradient>

                    <View key={cafe.id} style={styles.textcontainer} >
                        <View style={styles.textoverimage} >
                            <Text style={styles.texts} >{cafe.restaurantName}</Text>
                            <View style={styles.likecontainer} >
                                <Text style={styles.liketext} >{likes.likes.length} </Text>
                                <Ionicons onPress={() => handleLike(likes.likes)} color="red" name="heart" size={20} />
                            </View>
                        </View>
                        <View style={{ top: -145, marginHorizontal: 10, alignItems: "center" }} >
                            <Text style={{ color: "white", fontSize: 15 }} >{cafe.info}</Text>
                            <Text style={{ color: "white", fontSize: 15 }}  >isopen</Text>
                        </View>
                    </View>


                </ImageBackground>
            ))}





            <KeyboardAvoidingView
                keyboardVerticalOffset={-220}
                behavior={Platform.OS === "ios" ? "padding" : "padding"}
                style={{ justifyContent: "center", }}
            >

                <View style={{ padding: 5 }} >


                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }} >
                        <View style={{ alignItems: "center" }} >
                            <Pressable style={styles.button} onPress={buttonHandler}>
                                <Ionicons style={{ padding: 10 }} onPress={() => openCaller()} color="black" name="call-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }} >Call</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Pressable style={styles.button} onPress={buttonHandler} >
                                <Ionicons style={{ padding: 10 }} onPress={() => openGps()} color="black" name="map-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }} >View Map</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Pressable style={styles.button} onPress={buttonHandler}>
                                <Ionicons style={{ padding: 10 }} onPress={() => openWebsite()} color="black" name="share-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }}>Web Site</Text>
                        </View>

                    </View>

                </View>





                <View style={{
                    flexDirection: "row", height: 50,
                    alignItems: "center",
                    backgroundColor: "white",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,

                    elevation: 3,
                    paddingLeft: 15,
                }}>
                    <TextInput
                        style={{

                            flex: 1,
                        }}
                        onChangeText={onChangeText}
                        placeholder="Write a review..."


                    />

                    <Ionicons style={{ marginRight: 20 }} onPress={() => handleCommnetCreate()} color="black" name="send-outline" size={20} />
                </View>
            </KeyboardAvoidingView>

            <ScrollView>

                {comments.comments.length === 0 ? <Text></Text> : comments.comments.map(comment => (
                    <Comment key={comment.id} id={comment.id} name={comment.customerName} text={comment.text} />
                ))}
            </ScrollView>




        </View  >


    )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 250,
        flexDirection: "column",
        justifyContent: "flex-end",



    },
    textoverimage: {
        elevation: 1,
        marginHorizontal: 10,
        marginVertical: 10,


    },
    textcontainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    texts: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",

    },
    liketext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
    },
    likecontainer: {
        flexDirection: "row",
        width: 50,
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: "solid"




    }
})


export default SingleCafe
