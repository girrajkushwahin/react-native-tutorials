import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

const Challenge2 = () => {

    const seriesData = [
        {
            unique: '1',
            name: 'Suits Season 2',
            year: '2012',
            genre: 'Drama',
            creator: 'Aaron Korsh'
        },
        {
            unique: '2',
            name: "Gabby's Dollhouse season 8",
            year: '2023',
            genre: 'Animation, Kids',
            creator: 'Traci Johnson'
        },
        {
            unique: '3',
            name: 'Ballers Season 2',
            year: '2016',
            genre: 'Drama, Comedy',
            creator: 'Stephen Levinson'
        },
        {
            unique: '4',
            name: 'The Chosen One Season 1',
            year: '2023',
            genre: 'Sci-Fi & fantacy',
            creator: 'Leopoldo Gout'
        },
        {
            unique: '5',
            name: 'Suits Season 1',
            year: '2011',
            genre: 'Drama',
            creator: 'Aaron Korsh'
        },
        {
            unique: '6',
            name: 'The Lincoln Lawyer Season 2',
            year: '2023',
            genre: 'Drama, Crime',
            creator: 'David E. Kelley'
        },
        {
            unique: '7',
            name: 'The Upshwas Part 4',
            year: '2023',
            genre: 'Comedy',
            creator: 'Wanda Sykes'
        },
        {
            unique: '8',
            name: 'Ballers Season 1',
            year: '2015',
            genre: 'Drama',
            creator: 'Stephen Levinson'
        },
        {
            unique: '9',
            name: 'Painkiller',
            year: '2023',
            genre: 'Crime',
            creator: 'Uzo Aduba'
        },
        {
            unique: '10',
            name: 'Depp V Heard',
            year: '2023',
            genre: 'Documentary',
            creator: 'Amber Heard'
        }
    ]

    return (
        <View>
            <Text style={styles.textStyleHead}>List of top 10 Netflix Series -</Text>
            <FlatList style={styles.listStyle} keyExtractor={key => key.unique} horizontal showsHorizontalScrollIndicator={false} data={seriesData} renderItem={({ item }) => {
                return (
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>Name: {item.name}</Text>
                        <Text style={styles.textStyle}>Year: {item.year}</Text>
                        <Text style={styles.textStyle}>Genre: {item.genre}</Text>
                        <Text style={styles.textStyle}>Creator: {item.creator}</Text>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 20,
        padding: 5
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        backgroundColor: '#009688',
        padding: 5
    },
    viewStyle: {
        padding: 5,
        margin: 20
    },
    textStyleHead: {
        margin: 30,
        fontSize: 50
    }
})

export default Challenge2