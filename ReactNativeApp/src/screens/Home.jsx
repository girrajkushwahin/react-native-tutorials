import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native'
import Menu from "../components/Menu";

const Home = (props) => {
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloremque illum iste quo voluptatibus iure esse. Facere fugit ex dicta, saepe fugiat voluptate a quam quis, mollitia sint laboriosam delectus?'
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image style={styles.headerImage} resizeMode='contain' source={require('../../assets/project1.png')} />
                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text style={[styles.mainHeader, {
                    fontSize: 33, color: '#4c5dab', marginTop: 0
                }]}>{props.appName}</Text>
                <Text style={styles.paraStyle}>{description}</Text>
            </View>
            <View style={styles.menuBlock}>
                <View style={styles.lineStyle}></View>
                <Menu />
                <View style={[styles.lineStyle, {
                    marginVertical: 10
                }]}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    homeTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 50
    },
    headerImage: {
        height: undefined,
        width: '100%',
        aspectRatio: 2,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 50,
        borderRadius: 20
    },
    mainHeader: {
        fontSize: 30,
        color: '#344055',
        textTransform: 'uppercase',
        marginTop: 50
    },
    paraStyle: {
        textAlign: 'left',
        fontSize: 19,
        color: '#7d7d7d',
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26
    },
    menuBlock: {},
    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'grey'
    }
})

export default Home;
