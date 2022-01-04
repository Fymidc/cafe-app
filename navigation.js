import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "./screens/LandingPage";
import Restaurants from "./screens/Restaurants";
import CafeDetails from "./screens/CafeDetails";
import store from './store';
import { Provider } from 'react-redux';

export default function RootNavigation(){
    const Stack = createStackNavigator();

    
    const screenOptions={
        headerShown:false,
    }
  


    return(
        <Provider store={store} >
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"   screenOptions={screenOptions} > 
                <Stack.Screen name="Home"  component={LandingPage}  />
                <Stack.Screen name="Restaurants" options={{left: null}} component={Restaurants} />
                <Stack.Screen name="CafeDetails" component={CafeDetails} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );

}