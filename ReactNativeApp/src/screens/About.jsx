import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking } from "react-native";

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>Girraj Kushwah</Text>
            <Text style={styles.paraStyle}>webdev & appdev 🔥</Text>
            <View>
                <Image style={styles.imgStyle} source={require('../../assets/about.jpg')} />
            </View>
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum a perspiciatis nostrum quidem iure sequi aliquam. Nemo, ipsa fugit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit consequuntur doloribus ab. Modi, nesciunt distinctio?</Text>
            </View>
            <Text style={styles.mainHeader}>Follow me on Social Networks</Text>
            <View style={styles.menuContainer}>
                <Pressable style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.instagram.com/igirraj/')}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=512&id=YtpeVQhQ8USm&format=png' }} style={styles.iconStyle} />
                </Pressable>
                <Pressable style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.instagram.com/igirraj/')}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=512&id=MU6KaMFUbw_E&format=png' }} style={styles.iconStyle} />
                </Pressable>
                <Pressable style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.instagram.com/igirraj/')}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=512&id=D2NqKl85S8Ye&format=png' }} style={styles.iconStyle} />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    mainHeader: {
        fontSize: 18,
        color: '#344055',
        textTransform: 'uppercase',
        fontWeight: '500',
        marginTop: 50,
        marginBottom: 10
    },
    paraStyle: {
        fontSize: 18,
        color: '#7d7d7d',
        paddingBottom: 30
    },
    aboutLayout: {
        backgroundColor: '#4c5dab',
        paddingHorizontal: 30,
        marginVertical: 30
    },
    aboutSubHeader: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '500',
        marginVertical: 15,
        alignSelf: 'center'
    },
    aboutPara: {
        color: '#fff'
    },
    menuContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconStyle: {
        width: '100%',
        height: 50,
        aspectRatio: 1
    }
});

export default About;
