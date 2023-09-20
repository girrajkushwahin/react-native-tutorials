import React from "react"
import { View, Text, StyleSheet } from "react-native"

const FirstChallenge = () => {
    const myName = 'Girraj'
    return (
        <View>
            <Text style={styles.textStyle1}>Welcome, Girraj Kushwah</Text>
            <Text style={styles.textStyle2}>We love React Native</Text>
            <Text>HI, My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        color: 'blue',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textStyle2: {
        fontSize: 30,
    }
})

export default FirstChallenge