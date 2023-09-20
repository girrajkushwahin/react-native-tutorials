import React from "react";
import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import Courses from '../api/CourseAPI'

const Course = ({ navigation }) => {

    const courseCard = ({ item }) => {

        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image style={styles.cardImage} source={item.image} resizeMode="contain" />
                    </View>
                    <Text style={styles.mainHeader}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('coursedetails', { courseId: item.id })}>
                            <Text style={styles.buttonText}>course details</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList keyExtractor={key => key.id}
            data={Courses}
            renderItem={courseCard}
        />
    );
};

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    mainContainer: {
        paddingHorizontal: 20
    },
    courseContainer: {
        padding: 30,
        backgroundColor: 'rgba(255,255,255,0.90)',
        textAlign: 'center',
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 10
    },
    mainHeader: {
        fontSize: 22,
        color: '#344055',
        textTransform: 'uppercase',
        // fontWeight: 500,
        // paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center'
    },
    description: {
        textAlign: 'justify',
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: '#7d7d7d'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: '#809fff',
        // borderBottomRightRadius: 5,
        // borderTopRightRadius: 5,/
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#eee',
        textTransform: 'capitalize'
    }
});

export default Course;
