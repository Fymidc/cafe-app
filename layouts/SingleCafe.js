import React from 'react'
import { StyleSheet, View, Text, Dimensions, ImageBackground, Pressable, ScrollView, TextInput, KeyboardAvoidingView, Linking, Platform } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient"
import Comment from './Comment';
const SingleCafe = ({ route }) => {

    const buttonHandler = () => {
        console.log("button")
    }
    const [text, onChangeText] = React.useState("Useless Text");

    console.log("route den gelen: ", route.params.map(cafe => cafe.website))
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

      const openCaller=()=>{
        Linking.openURL(`tel:${phone}`)
      }

      const openWebsite=()=>{
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

                        start={{ x: 0.1, y:1 }}
                        colors={['#000000', '#00000000']}
                        end={{x: 0.1, y: 0.4}}
                        style={{ top: 90, height: '100%', width: '100%' }}>



                    </LinearGradient>

                    <View key={cafe.id} style={styles.textcontainer} >
                        <View style={styles.textoverimage} >
                            <Text style={styles.texts} >{cafe.restaurantName}</Text>
                            <View style={styles.likecontainer} >
                                <Text style={styles.liketext} >10 </Text>
                                <Ionicons onPress={() => console.log("bastım")} color="red" name="heart" size={20} />
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
                style={{ flex: 1, justifyContent: "center", }}
            >

                <View style={{ padding: 5 }} >


                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }} >
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



                <ScrollView>

                    <View style={{
                        flexDirection: "row", height: 50,
                        alignItems: "center",
                        backgroundColor: "white",
                       borderBottomLeftRadius:20,
                       borderBottomRightRadius:20,
                        
                        elevation:3,
                        paddingLeft: 15,
                    }}>
                        <TextInput
                            style={{

                                flex: 1,
                            }}
                            onChangeText={onChangeText}
                            placeholder="Write a review..."


                        />

                        <Ionicons style={{ marginRight: 10 }} onPress={() => console.log(text)} color="black" name="send-outline" size={20} />
                    </View>



                    
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </ScrollView>



            </KeyboardAvoidingView>
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
        justifyContent: "space-between"
    },
    button: {
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: "solid"




    }
})


export default SingleCafe
