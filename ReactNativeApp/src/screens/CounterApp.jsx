import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native'

const CounterApp = () => {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 10)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleSub = () => {
        if (count === 0) Alert.alert('Counter is Zero')
        else setCount(count - 10)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{count}</Text>
            <Pressable style={styles.buttonStyle} onPress={handleAdd}>
                <Text style={styles.buttonText}>+10</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={handleSub}>
                <Text style={styles.buttonText}>-10</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        fontSize: 25,
        marginHorizontal: 159,
        marginBottom: 20
    },
    buttonStyle: {
        backgroundColor: 'aqua',
        margin: 10,
        marginHorizontal: 90,
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center'
    }
})

export default CounterApp