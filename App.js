import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Restaurants from './screens/Restaurants';
import LandingPage from './screens/LandingPage';
import CafeDetails from './screens/CafeDetails';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import RootNavigation from './navigation';

export default function App() {
  return (
    <SafeAreaView   style={styles.container}>
      {/* <LandingPage/>  */}
       {/* <Restaurants/>  */}
      {/* <CafeDetails/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <RootNavigation/>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 25: 0
  },
});


/**
 * usera tıklanınca çıkan modalı duzenle
 *3.13 de kaldın rn clone vıdyosu
 *  navigation ekle /RESTAURANTS COMPONENTİNED HEDAERİ, AŞAĞIYA AL
 * sayfalar arası veri yolla single cafe page sinde görüntüle
 * redux ekle
 */