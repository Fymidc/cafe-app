import React from 'react'
import { View, Text } from 'react-native'
import SingleCafe from '../layouts/SingleCafe'

const CafeDetails = ({route}) => {
   // console.log("route",route)
    return (
        <View style={{flex:1, alignItems: 'center',backgroundColor:"white"}} >
            <SingleCafe route={route} />
        </View>
    )
}

export default CafeDetails
