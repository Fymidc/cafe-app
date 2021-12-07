import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
const Comment = () => {
    const username="fatih"
    return (
        <View style={styles.commentcontainer} >
            <View style={{ flexDirection: "row" }}>
               
                

                <Text ><Feather style={{ paddingRight:10 }} onPress={() => console.log(text)} color="black" name="user" size={20} />
                
                <Text style={{fontWeight:"700"}} >{username+": "}</Text>
                Commentsadfsd asdsadsa asdas dsaas dsadsfas dfasasdasa sdasdsa saadsasd</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    commentcontainer: {

        borderWidth:1,
        borderColor:"#F5F5F5",
        padding: 20,
        margin: 10,
        marginHorizontal:15
    }
})

export default Comment
