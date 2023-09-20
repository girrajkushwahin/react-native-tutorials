import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Students from "../api/StudentAPI";

const UserData = () => {

    const showUserData = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={item.image} />
                </View>
                <View>
                    <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio-Data</Text>
                        <Text style={styles.idNumber}>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <Text style={styles.myName}>Name: {item.name}</Text>
                        <Text style={styles.myName}>Name: {item.email}</Text>
                        <Text style={styles.myName}>Name: {item.mobile}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.mainHeader}>List of Students</Text>
            {/* <FlatList keyExtractor={key => key.id} data={Students} horizontal showsHorizontalScrollIndicator={false} renderItem={showUserData} /> */}
            <FlatList keyExtractor={key => key.id} data={Students} renderItem={showUserData} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        minHeight: '100%',
        paddingVertical: 50,
        backgroundColor: '#ebedee'
    },
    card: {
        width: 250,
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 20
    },
    bioDataContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#353535',
        paddingVertical: 10
    },
    idNumber: {
        fontSize: 20,
        color: 'rgba(255,255,255,0.5)',
        paddingRight: 10
    },
    bioData: {
        fontSize: 30,
        color: '#fff'
    },
    mainHeader: {
        fontSize: 30,
        color: '#a18ce5',
        textAlign: 'center'
    },
    imageContainer: {
        padding: 10
    },
    imageStyle: {
        width: '100%',
        height: 180
    },
    mainContent: {
        padding: 10,
        backgroundColor: '#353535',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    myName: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 10,
        alignSelf: 'flex-start',
        textTransform: 'capitalize'
    }
});

export default UserData;
