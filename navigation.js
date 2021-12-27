import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "./screens/LandingPage";
import Restaurants from "./screens/Restaurants";
import CafeDetails from "./screens/CafeDetails";

export default function RootNavigation(){
    const Stack = createStackNavigator();

    const screenOptions={
        headerShown:false,
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Restaurants" screenOptions={screenOptions} > 
                <Stack.Screen name="Home" component={LandingPage} />
                <Stack.Screen name="Restaurants" component={Restaurants} />
                <Stack.Screen name="CafeDetails" component={CafeDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}