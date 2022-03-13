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
import { COLORS, SIZES } from './src/constants';
import { CustomInput } from './src/components';

const App = (props) => {

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
      <View style={styles.containerHeader} > 
        <Text style={{ fontWeight: '800', fontSize: SIZES.h1 }}> NoDum </Text>
      </View>
      <View style={{ flex: 2, flexDirection: 'column', paddingVertical: 15, }}>
        <View style={styles.containerTop}>
            <CustomInput label='FROM' placeholder='MM.DD.YYYY' keyboardType='decimal-pad' />
            <CustomInput label='To' placeholder='MM.DD.YYYY' keyboardType='decimal-pad' style={{ marginLeft: 5,}} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}> 
             <CustomInput label='WHERE' placeholder='DIGITAL ADDRESS' />
        </View>
      </View>
      <View style={styles.containerBody} > 
        <Text> Product list </Text>
      </View>
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
    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding,
        paddingBottom: 50,
        //backgroundColor: 'red',
    },
    containerTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        paddingHorizontal: SIZES.padding,
        //backgroundColor: 'yellow',
    },
    containerBody: {
        flex: 4,
        //backgroundColor: 'green',
        paddingHorizontal: SIZES.padding,
    },
})

export default App;
