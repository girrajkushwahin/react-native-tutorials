import React from 'react'
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native'

import { JosefinSans_100Thin, JosefinSans_200ExtraLight, JosefinSans_300Light, JosefinSans_400Regular, JosefinSans_500Medium, JosefinSans_700Bold, JosefinSans_100Thin_Italic, JosefinSans_200ExtraLight_Italic, JosefinSans_400Regular_Italic, JosefinSans_500Medium_Italic, JosefinSans_600SemiBold_Italic, JosefinSans_700Bold_Italic } from '@expo-google-fonts/josefin-sans'
// import { useFonts } from '@expo-google-fonts/josefin-sans/useFonts'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const NetflixCard = () => {

    let [fontsLoad] = useFonts({
        JosefinSans_100Thin, JosefinSans_200ExtraLight, JosefinSans_300Light, JosefinSans_400Regular, JosefinSans_500Medium, JosefinSans_700Bold, JosefinSans_100Thin_Italic, JosefinSans_200ExtraLight_Italic, JosefinSans_400Regular_Italic, JosefinSans_500Medium_Italic, JosefinSans_600SemiBold_Italic, JosefinSans_700Bold_Italic
    })
    if (!fontsLoad) {
        return <AppLoading />       // expo-app-loading is deprecated now
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Netflix Card</Text>
            <View style={styles.poster}>
                <Image style={styles.imgStyle} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/281/875/599/jeffrey-dean-morgan-walking-dead-andrew-lincoln-rick-grimes-wallpaper-preview.jpg' }} />
                <View style={styles.poster_info}>
                    <Text style={styles.poster_title}>The Walking Dead</Text>
                    <Text style={styles.poster_text}>In the wake of a zombie apocalypse, survivors hold on to the hope of humanity by banding together to wage a fight for their own survival.</Text>
                </View>
                <Button title='watch now' onPress={() => Linking.openURL('https://www.netflix.com/in/title/70177057')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'JosefinSans_700Bold_Italic'
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: 'center'
    },
    poster_info: {
        alignItems: 'center',
        marginVertical: 10
    },
    poster_title: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'JosefinSans_700Bold_Italic'
    },
    poster_text: {
        color: '#999',
        paddingHorizontal: 20,
        marginBottom: 10,
        fontFamily: 'JosefinSans_700Bold_Italic'
    },
    imgStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    buttonStyle: {
        borderWidth: 0,
        borderRadius: 20,
    }
})

export default NetflixCard