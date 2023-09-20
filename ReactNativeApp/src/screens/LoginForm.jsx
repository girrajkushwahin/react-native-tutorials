import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import CheckBox from 'expo-checkbox'

const LoginForm = ({ navigation }) => {

    const [agree, setAgree] = useState(false)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (user === 'admin' && password === 'admin') {
            Alert.alert(`Login Successful`)
            navigation.navigate('home', { myName: `${user}` })
        } else {
            Alert.alert(`Invalid Credentials`)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>You can reach us anytime via test@mail.com</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your username</Text>
                <TextInput value={user} onChangeText={username => setUser(username)} autoCapitalize='none' autoCorrect={false} style={styles.inputStyle} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your password</Text>
                <TextInput value={password} onChangeText={password => setPassword(password)} autoCapitalize='none' autoCorrect={false} secureTextEntry={true} style={styles.inputStyle} />
            </View>
            <View style={styles.wrapper}>
                <CheckBox value={agree} color={agree ? '#4630EB' : undefined} onValueChange={() => setAgree(!agree)} />
                <Text style={styles.wrapperText}>I have read and agreed to T&C</Text>
            </View>
            <Pressable onPress={handleLogin} style={[styles.buttonStyle, { backgroundColor: agree ? '#4630EB' : 'grey' }]} disabled={!agree}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    mainHeader: {
        fontSize: 25,
        color: '#344055',
        fontWeight: '500',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
        // fontFamily: 'bold'
    },
    description: {
        fontSize: 20,
        color: '#7d7d7d',
        paddingBottom: 20,
        lineHeight: 25,
        // fontFamily: 'regular'
    },
    inputContainer: {
        marginTop: 20
    },
    labels: {
        fontSize: 18,
        color: '#7d7d7d',
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        // fontFamily: 'regular'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        // fontFamily: 'regular',
        fontSize: 18
    },
    wrapper: {
        marginTop: 10,
        marginBottom: 30
    },
    wrapperText: {
        marginTop: 5
    },
    buttonStyle: {
        padding: 10,
        marginHorizontal: 50
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center'
    }

})

export default LoginForm