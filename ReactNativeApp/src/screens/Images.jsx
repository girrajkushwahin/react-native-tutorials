import React from "react"
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'

const Images = () => {
    return (
        <ScrollView>
            <View style={styles.listStyle}>
                <Text style={styles.textStyle}>This is Image File</Text>
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        // height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        margin: 30
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginTop: 10
    }
})

export default Images