import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [agree, setAgree] = useState(false)

    const handleSubmit = () => {
        if (!name && !email && !phone && !message) {
            Alert.alert('All fields required')
        } else {
            Alert.alert(`Thanks ${name}, your message submitted`)
            navigation.navigate('home')
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge</Text>
            <Text style={styles.description}>You can reach us anytime via test@mail.com</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput style={styles.inputStyle} placeholder="Enter your name" value={name} onChangeText={data => setName(data)} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your email</Text>
                <TextInput style={styles.inputStyle} placeholder="Enter your email" value={email} onChangeText={data => setEmail(data)} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your number</Text>
                <TextInput style={styles.inputStyle} placeholder="Enter your number" value={phone} onChangeText={data => setPhone(data)} />
            </View>

            {/* text-area in react native - */}
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>How can we help you ?</Text>
                <TextInput style={[styles.inputStyle, styles.multilineStyle]} numberOfLines={5} multiline={true} placeholder="Tell us about yourself" value={message} onChangeText={data => setMessage(data)} />
            </View>

            {/* check-box in react native */}
            <View style={styles.wrapper}>
                <Checkbox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? '#4630EB' : undefined} />
                <Text style={styles.wrapperText}>I have read all T&C</Text>
            </View>

            <Pressable disabled={!agree} style={[styles.buttonStyle, { backgroundColor: agree ? '#4630EB' : 'grey' }]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Contact us</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    mainHeader: {
        fontSize: 20,
        color: '#344055',
        fontWeight: '500',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize'
    },
    description: {
        fontSize: 20,
        color: '#7d7d7d',
        paddingBottom: 20,
        lineHeight: 25
    },
    inputContainer: {
        marginTop: 20
    },
    labels: {
        fontWeight: 'bold',
        color: '#7d7d7d',
        paddingBottom: 5,
        lineHeight: 25
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2
    },
    multilineStyle: {
        paddingVertical: 4
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    buttonText: {
        color: '#eee'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    wrapperText: {
        marginLeft: 10,
        color: '#7d7d7d',
    }
});

export default Contact;
