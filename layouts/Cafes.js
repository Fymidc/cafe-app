import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import { getAllCafes } from '../actions/cafeActions';

const Cafes = ({ navigation, ...props }) => {

    const dispatch = useDispatch();

    const handleDispatch = () => {
        dispatch(getAllCafes())
        console.log("componentten geldii")
    }


    return (
        <TouchableOpacity style={{ marginTop: 10 }}
            onPress={() => { handleDispatch(); navigation.navigate("CafeDetails", [props.cafe]) }} >
            <View style={styles.container} >
                <View>

                    <Image style={styles.image} alt="av" source={{ uri: props.cafe.images[0] }} />
                </View>

                <View style={styles.cafeinfos} >
                    <Text style={styles.cafename} >{props.cafe.restaurantName}</Text>

                    <AirbnbRating
                        count={5}
                        showRating={false}
                        isDisabled={true}
                        defaultRating={4}
                        size={20}
                    />

                    <Text>{props.cafe.info}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
    cafeinfos: {
        marginHorizontal: 20,
        justifyContent: "space-around",
        alignItems: "center"
    },
    cafename: {
        fontSize: 20,
        fontWeight: "600",
    }
});


export default Cafes
