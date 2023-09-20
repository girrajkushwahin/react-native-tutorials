import React from "react"
import { View, StyleSheet, Text, Image } from 'react-native'

const CardDetail = (props) => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>{props.textdata}</Text>
            <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
        </View>
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

export default CardDetail