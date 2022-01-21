import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions, ImageBackground, Pressable, ScrollView, TextInput, KeyboardAvoidingView, Linking, Platform, Alert } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from "expo-linear-gradient"
import Comment from './Comment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../actions/commentActions';
import { createLike, deleteLike, getCustomerLikes } from '../actions/likeActions';
const SingleCafe = ({ navigation, route }) => {

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

                console.log("userrr id ", value)
            }
        } catch (e) {
            console.log(e.message)
        }
    }


    const [text, onChangeText] = React.useState("");

    const comments = useSelector(state => state.comment)
    const likes = useSelector(state => state.like)

    console.log(comments.comments)
    

    const handleLike = () => {

        const [id] = likes.clikes.slice(-1)

        if (userid != "") {

            if (likes.clikes.length === 0) {
                dispatch(createLike(userid, restaurantid[0]))

            } else {
                dispatch(deleteLike(id.id))
            }

        } else {

            Alert.alert(
                "You Are Not Signed In",
                "Do you want to use more features? Lets sign in.",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Sign me in", onPress: () => navigation.navigate("Login") }
                ]
            );


        }
    }

    const restaurantid = route.params.map(cafe => cafe.id)
   

    const data = {
        text: text,
        customerid: userid,
        restaurantid: JSON.stringify(restaurantid[0])
    }


    //this for check if page focused to render on goback
    const isFocused = useIsFocused();


    getData();
    useEffect(() => {
        
        dispatch(getCustomerLikes(userid, restaurantid))

    }, [likes.likes.length, likes.clikes.length, isFocused])



    const handleCommnetCreate = () => {

        dispatch(createComment(JSON.stringify(data)))
        onChangeText("")
    }

    
    const address = route.params.map(cafe => cafe.adress);
    const phone = route.params.map(cafe => cafe.telno);
    const website = route.params.map(cafe => cafe.website);
    const openGps = (lat, lng) => {
        
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`)
        
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

                                <Ionicons onPress={() => handleLike()} color={likes.clikes.find(like => like.customerId == userid) ? "red" : "grey"} name="heart" size={20} />
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





                {userid ? 
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
                            value={text}
                            onChangeText={onChangeText}
                            placeholder="Write a review..."
    
    
                        />
    
                        <Ionicons style={{ marginRight: 20 }} onPress={() => handleCommnetCreate()} color="black" name="send-outline" size={20} />
                    </View>
                    
                    :

                    <Text></Text>
            }
            </KeyboardAvoidingView>

            <ScrollView>

                {comments.comments.length === 0 ? <Text></Text> : comments.comments.map(comment => (
                    <Comment key={comment.id} id={comment.id} uid={userid} cid={comment.customerId} name={comment.customerName ? comment.customerName :""} text={comment.text} />
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
