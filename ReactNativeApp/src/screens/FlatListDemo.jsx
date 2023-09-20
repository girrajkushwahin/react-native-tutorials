import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const FlatListDemo = () => {
    // const namesData = [
    //     {
    //         key: '1',
    //         name: 'Girraj'
    //     },
    //     {
    //         key: '2',
    //         name: 'Kushwah'
    //     },
    //     {
    //         key: '3',
    //         name: 'cybersecboy'
    //     },
    //     {
    //         key: '4',
    //         name: 'India'
    //     },
    //     {
    //         key: '5',
    //         name: 'Hello'
    //     },
    //     {
    //         key: '6',
    //         name: 'World'
    //     },
    //     {
    //         key: '7',
    //         name: 'React'
    //     },
    //     {
    //         key: '8',
    //         name: 'Native'
    //     }
    // ]

    const namesData = [
        {
            index: '1',
            name: 'Girraj'
        },
        {
            index: "2",
            name: 'Kushwah'
        },
        {
            index: "3",
            name: 'cybersecboy'
        },
        {
            index: "4",
            name: 'India'
        },
        {
            index: "5",
            name: 'Hello'
        },
        {
            index: "6",
            name: 'World'
        },
        {
            index: "7",
            name: 'React'
        },
        {
            index: "8",
            name: 'Native'
        }
    ]

    return (
        // <FlatList data={namesData} renderItem={(element) => {
        //     // console.log(element.item.name)
        //     return <Text style={styles.textStyle}>{element.item.name}</Text>
        // }} />

        // <FlatList style={styles.listStyle} keyExtractor={(key) => {
        //     return key.index
        // }} data={namesData} renderItem={({ item }) => {
        //     // console.log(element.item.name)
        //     return <Text style={styles.textStyle}>{item.name}</Text>
        // }} />

        // <FlatList style={styles.listStyle} keyExtractor={(key) => {
        //     return key.index
        // }} numColumns={2} showsHorizontalScrollIndicator={false} data={namesData} renderItem={({ item }) => {
        //     return <Text style={styles.textStyle}>{item.name}</Text>
        // }} />

        <FlatList style={styles.listStyle} keyExtractor={(key) => {
            return key.index
        }} horizontal inverted showsHorizontalScrollIndicator={false} data={namesData} renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name}</Text>
        }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 30,
        backgroundColor: 'blue',
        margin: 20,
        color: 'white'
    },
    listStyle: {
        textAlign: 'center',
        margin: 20,
        padding: 10
    }
})

export default FlatListDemo