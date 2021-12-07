import React from 'react'
import { StyleSheet, View, Text, Dimensions, ImageBackground, Pressable, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-elements';
import Comment from './Comment';
const SingleCafe = () => {

    const buttonHandler = () => {
        console.log("button")
    }
    const [text, onChangeText] = React.useState("Useless Text");

    console.log(text)
    //iconların altına divider koy ve comment layoutu oluştur

    return (
        <View>

            <ImageBackground
                style={styles.image}
                alt="cb"

                source={{ uri: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80" }} >

                <View style={styles.textcontainer} >
                    <View style={styles.textoverimage} >
                        <Text style={styles.texts} >Cafe Name</Text>
                        <View style={styles.likecontainer} >
                            <Text style={styles.liketext} >10 </Text>
                            <Ionicons onPress={() => console.log("bastım")} color="red" name="heart" size={20} />
                        </View>
                    </View>
                    <View style={{ top: -145, marginHorizontal: 10, alignItems: "center" }} >
                        <Text style={{ color: "white", fontSize: 15 }} >CoffeTea,CoffeTea</Text>
                        <Text style={{ color: "white", fontSize: 15 }}  >isopen</Text>
                    </View>
                </View>


            </ImageBackground>

            <KeyboardAvoidingView
                keyboardVerticalOffset={-220}
                behavior={Platform.OS === "ios" ? "padding" : "padding"}
                style={{ flex: 1, justifyContent: "center", }}
            >

                <View style={{ padding: 5 }} >


                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }} >
                        <View style={{ alignItems: "center" }} >
                            <Pressable style={styles.button} onPress={buttonHandler}>
                                <Ionicons style={{ padding: 10 }} onPress={() => console.log("bastım")} color="black" name="call-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }} >Call</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Pressable style={styles.button} onPress={buttonHandler} >
                                <Ionicons style={{ padding: 10 }} onPress={() => console.log("bastım")} color="black" name="map-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }} >View Map</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Pressable style={styles.button} onPress={buttonHandler}>
                                <Ionicons style={{ padding: 10 }} onPress={() => console.log("bastım")} color="black" name="share-outline" size={20} />

                            </Pressable>
                            <Text style={{ marginTop: 10 }}>Web Site</Text>
                        </View>

                    </View>

                </View>

                <Divider width={1} style={{ marginVertical: 5, marginHorizontal: 15 }} />


                <ScrollView>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </ScrollView>


                <View style={{
                    flexDirection: "row", height: 50,
                    alignItems: "center",
                    backgroundColor: "#F8F8F8",
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderTopColor: "grey",
                    paddingLeft: 15,
                }}>
                    <TextInput
                        style={{

                            flex: 1,
                        }}
                        onChangeText={onChangeText}
                        placeholder="Write a review..."


                    />

                    <Ionicons style={{marginRight:10}} onPress={() => console.log(text)} color="black" name="send-outline" size={20} />
                </View>

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
        zIndex: 3


    },
    textoverimage: {

        marginHorizontal: 10,
        marginVertical: 10

    },
    textcontainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    texts: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white"
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
