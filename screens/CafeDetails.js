import React, { useEffect, useState } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { useDispatch } from 'react-redux'
import { getAllComments } from '../actions/commentActions'
import { getAllLikes } from '../actions/likeActions'
import SingleCafe from '../layouts/SingleCafe'

const CafeDetails = ({navigation, route }) => {
    // console.log("route",route)
    const [isInitiated, setisInitiated] = useState(false)

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setisInitiated(true)
        }); 
    }, [])

    const restaurantid=route.params.map(cafe => cafe.id);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAllComments(restaurantid))
       dispatch(getAllLikes(restaurantid))
    }, [])

   // console.log("cafedetails den gelen", route.params.map(cafe => cafe.id))

    return (
        <View style={{ flex: 1, justifyContent:"center", alignItems: 'center', backgroundColor: "white" }} >
            {isInitiated ? <SingleCafe navigation={navigation} route={route} /> : <Text >Loading...</Text>}

        </View>
    )
}

export default CafeDetails
