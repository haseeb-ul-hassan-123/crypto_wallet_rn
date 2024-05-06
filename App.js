import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import color from './src/styles/color';
import CryptoScreen from './src/screens/TermsCondition/CryptoScreen';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color.white,
        }}>
        <StatusBar barStyle="dark-content" />
        <CryptoScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
