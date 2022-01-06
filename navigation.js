import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "./screens/LandingPage";
import Restaurants from "./screens/Restaurants";
import CafeDetails from "./screens/CafeDetails";
import { useDispatch } from "react-redux";
import { getAllCafes } from "./actions/cafeActions";


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCafes())
    }, [])
  

    const screenOptions = {
        headerShown: false,
    }



    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions} >
                <Stack.Screen name="Home" component={LandingPage} />
                <Stack.Screen name="Restaurants" options={{ left: null }} component={Restaurants} />
                <Stack.Screen name="CafeDetails" component={CafeDetails} />
            </Stack.Navigator>
        </NavigationContainer>

    );

}