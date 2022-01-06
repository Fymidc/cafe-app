import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import RootNavigation from './navigation';
import { getAllCafes } from './actions/cafeActions';
import store from './store';
import { Provider, useDispatch } from 'react-redux';

export default function App() {


  
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        {/* <LandingPage/>  */}
        {/* <Restaurants/>  */}
        {/* <CafeDetails/> */}
        {/* <SignUp/> */}
        {/* <Login/> */}
        <RootNavigation />

      </SafeAreaView >
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
});


/**
 *3.16 de kaldın rn clone vıdyosu
 * login ve regsteri navigasyona ekle 
 * login ve register ol
 * jwt tokeni storage ekle ve post ederkken kullan
 * comment get/post istekleri yap
 */