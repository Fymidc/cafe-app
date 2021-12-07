import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

const Cafes = () => {
    return (
        <TouchableOpacity style={{marginTop:10}}>
            <View style={styles.container} >
                <View>

                    <Image style={styles.image} alt="av" source={{ uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" }} />
                </View>

                <View style={styles.cafeinfos} >
                    <Text style={styles.cafename} >Cafe Name</Text>
                    <Text>10/Review</Text>
                    <Text>Cafe Info</Text>

                </View>

            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginHorizontal: 10,
        shadowColor: "#000",
        elevation: 1,
        marginVertical: 10,
        height: 150,
        padding: 20,

    },
    image: {
        backgroundColor: "red",
        width: 100,
        height: 100
    },
    cafeinfos:{
        marginHorizontal:20,
        justifyContent:"space-around"
    },
    cafename:{
        fontSize:20,
        fontWeight:"600",
    }
});


export default Cafes
