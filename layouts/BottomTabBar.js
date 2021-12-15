import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

const BottomTabBar = (props) => {
    
    const [selected, setselected] = useState("resta")

    const handleClick=(e)=>{
        setselected(e)

        if(e==="user"){
            props.bottomSlider();
        }
    }
   

    return (
        <View style={{justifyContent:"space-between", flexDirection:"row",margin:10,marginHorizontal:30
        }}>
            <Ionicons  onPress={()=>handleClick("home")}color={selected==="home"?"black":"grey"} name="home" size={25} />
            <Ionicons  onPress={()=>handleClick("search")} color={selected==="search"?"black":"grey"} name="search" size={25} />
            <Ionicons onPress={()=>handleClick("resta")} color={selected==="resta"?"black":"grey"} name="restaurant" size={25} />
            <Ionicons onPress={()=>handleClick("user")} color={selected==="user"?"black":"grey"}  name="person" size={25} />

            
        </View>
    )
}

export default BottomTabBar
