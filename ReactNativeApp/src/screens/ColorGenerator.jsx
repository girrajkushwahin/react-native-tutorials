import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'

const ColorGenerator = () => {

    const [color, setColor] = useState([])

    const randomColorGen = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const data = `rgb(${red},${green},${blue})`
        setColor([...color, data])
    }

    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.buttonStyle} onPress={randomColorGen}>
                <Text style={styles.textStyle}>ColorGenerator</Text>
            </Pressable>
            <FlatList keyExtractor={key => key} data={color} renderItem={({ item }) => {
                return (
                    <View style={styles.imageContainer}>
                        <Text style={{
                            backgroundColor: item,
                            width: 100,
                            height: 100,
                            borderRadius: 5
                        }}>{item}</Text>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 100
    },
    buttonStyle: {
        backgroundColor: '#00b0ff',
        color: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textStyle: {
        color: 'white',
        textTransform: 'uppercase'
    },
    imageContainer: {
        marginVertical: 50,
        paddingHorizontal: 30
    }
})

export default ColorGenerator