import React from "react";
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Pressable, Image } from "react-native"

const Menu = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.menuContainer}>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('course')}>
                {/* <Text style={styles.textStyle}>Course</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/?size=512&id=az5cjpNQLver&format=png' }} />
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('student')}>
                {/* <Text style={styles.textStyle}>Student</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/?size=512&id=ZYujt38OjL95&format=png' }} />
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('about')}>
                {/* <Text style={styles.textStyle}>About</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/?size=512&id=3439&format=png' }} />
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('contact')}>
                {/* <Text style={styles.textStyle}>Contact</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/?size=512&id=2817&format=png' }} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle: {},
    textStyle: {
        textTransform: 'uppercase',
    },
    iconStyle: {
        width: '100%',
        height: 50,
        aspectRatio: 1
    },
});

export default Menu;
