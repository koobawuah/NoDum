/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { COLORS, SIZES } from './src/constants'
import { HomeScreen } from './src/screens'


const App = () => {

    const color = {
        dark: '#000000',
        light: '#fefefe'  
    }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? color.dark : color.light,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeScreen /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: SIZES.margin,
    },
 
})

export default App;
