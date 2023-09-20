import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'

const TouchableOpacityComp = () => {

    const handleClick = () => {
        console.log("Hello");
        Alert.alert("Girraj's button clicked")
    }

    return (
        <View>
            <Text style={styles.textStyle}>TouchableOpacity</Text>
            <TouchableOpacity onPress={handleClick}>
                <Image style={styles.imageStyle} source={require('../../assets/react_native.jpeg')} />
                <Text>Join our Server</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
        textAlign: 'center',
        fontSize: 30
    },
    imageStyle: {
        width: 200,
        height: 200
    }
})

export default TouchableOpacityComp