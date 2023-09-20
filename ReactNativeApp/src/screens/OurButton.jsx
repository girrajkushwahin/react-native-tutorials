import React from 'react'
import { View, StyleSheet, Button, Alert, Text } from 'react-native'

const OurButton = () => {

    const handleClick = () => {
        console.log("Hello");
        Alert.alert("Girraj's button clicked")
    }

    return (
        <View>
            <Text style={styles.textStyle}>Button Component</Text>
            <Button title='Join us' onPress={handleClick} />
            <Button disabled title='Disabled' onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
        textAlign: 'center',
        fontSize: 30
    }
})

export default OurButton