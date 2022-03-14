import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {COLORS, SIZES} from '../constants';

const Info = (props) => {
    
    return (
        <View style={styles.infoBox}>
            <Text style={{ textTransform: 'uppercase', fontWeight: '200', }} >{props.text}</Text>
        </View>
    )
}

const ProductItem = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <View style={{ flexDirection: 'column', alignItems: 'center', paddingRight: 10, }}>
                    <Text style={{ fontSize: SIZES.h1, fontWeight: '400' }}>{props.title}</Text>
                    <Text style={{ fontWeight: 'bold', }}>{props.subTitle}</Text>
                </View>
                <View>
                    <Text style={{paddingTop: 5, fontSize: 24,  fontWeight: '200' }} >{props.unit}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text> Generator Image </Text> 
            </View>
            <View style={styles.info}>
              <Info text={props.status} />
              <Info text={props.numAvailable} />
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    titleSection: {
        flex: 1,
        flexDirection: 'row',
    },
    body: {
        flex: 3,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
    },
    infoBox: {
        height: 30,
        marginRight: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: COLORS.bgColor,
    },
    
})

export default ProductItem;
