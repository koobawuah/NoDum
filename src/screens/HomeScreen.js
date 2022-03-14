import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomInput, ProductItem } from '../components'
import { COLORS, SIZES } from '../constants'


const HomeScreen = () => {

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.containerHeader} > 
                <Text style={{ fontWeight: '800', fontSize: SIZES.h1 }}> NoDum </Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'column', paddingVertical: 15, }}>
                <View style={styles.containerTop}>
                    <CustomInput label='FROM' placeholder='MM.DD.YYYY' keyboardType='decimal-pad' />
                    <CustomInput label='To' placeholder='MM.DD.YYYY' keyboardType='decimal-pad' style={{ borderLeftWidth: 2, borderColor: COLORS.bgColor }} />
                </View>
            <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}> 
                <CustomInput label='WHERE' placeholder='DIGITAL ADDRESS' />
            </View>
        </View>
            <View style={styles.containerBody} > 
                <ProductItem 
                    title='30'
                    unit='kVA'
                    subTitle='OFFLOAD'
                    status='Available'
                    numAvailable='5'
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingTop: 15,
    },

})

export default HomeScreen;
