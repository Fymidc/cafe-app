import React, { useEffect, useState } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import SingleCafe from '../layouts/SingleCafe'

const CafeDetails = ({ route }) => {
    // console.log("route",route)
    const [isInitiated, setisInitiated] = useState(false)

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setisInitiated(true)
        }); 
    }, [])


    return (
        <View style={{ flex: 1, justifyContent:"center", alignItems: 'center', backgroundColor: "white" }} >
            {isInitiated ? <SingleCafe route={route} /> : <Text >Loading...</Text>}

        </View>
    )
}

export default CafeDetails
