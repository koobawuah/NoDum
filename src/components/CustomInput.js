import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import {COLORS, SIZES} from '../constants';


const CustomInput = (props) => {
    

    return (
        <View style={styles.container}>
          <Text style={styles.labelText} >{props.label} </Text>
          <TextInput 
            style={styles.CustomInput}
            placeholder={props.placeholder}
            value={props.value} 
            onChangeText={props.onChangeText} 
            keyboardType={props.keyboardType}
            />  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary, 
        paddingHorizontal: 20,
        height: 100,
    },
    CustomInput: {
        fontSize: 24,
        fontWeight: '200',
    },
    labelText: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: SIZES.padding,
        color: COLORS.black,
        fontSize: SIZES.p,
    },
})

export default CustomInput;
