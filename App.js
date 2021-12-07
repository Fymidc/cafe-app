import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Restaurants from './screens/Restaurants';
import LandingPage from './screens/LandingPage';
import CafeDetails from './screens/CafeDetails';

export default function App() {
  return (
    <SafeAreaView   style={styles.container}>
      {/* <LandingPage/>  */}
      {/* <Restaurants/> */}
      <CafeDetails/>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 25: 0
  },
});
