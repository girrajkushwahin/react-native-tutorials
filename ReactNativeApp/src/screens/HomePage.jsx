import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const HomePage = ({ route, navigation }) => {

    const myName = route.params.myName

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Welcome {myName}</Text>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeader: {
        fontSize: 35,
        color: '#4c5dab',
        marginTop: 0,
        textTransform: 'capitalize'
    },
    buttonStyle: {
        marginTop: 10,
        backgroundColor: 'blue',
        borderRadius: 3,
        padding: 5
    },
    buttonText: {
        color: 'yellow'
    }
})

export default HomePage
