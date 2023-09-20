import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import Courses from "../api/CourseAPI";

const CourseDetails = ({ navigation, route }) => {

    const id = route.params.courseId
    // console.log(id);

    const selectedCourse = Courses.find(elem => id === elem.id)

    const handleCourseJoin = () => {
        Alert.alert('Joined Successfully')
        navigation.navigate('course')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image style={styles.cardImage} source={selectedCourse.image} resizeMode="contain" />
                </View>
                <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
                <Text style={styles.description}>{selectedCourse.description}</Text>
                <Text style={styles.description}>{selectedCourse.course1}</Text>
                <Text style={styles.description}>{selectedCourse.course2}</Text>
                <Text style={styles.description}>{selectedCourse.course3}</Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.price}>{selectedCourse.price}</Text>
                    <Pressable style={styles.buttonStyle} onPress={handleCourseJoin}>
                        <Text style={styles.buttonText}>Join Now</Text>
                        {/* can do alert here */}
                    </Pressable>
                </View>
            </View>
        </View>
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
    },
    price: {
        marginRight: 80,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#809fff',
        borderRadius: 5,
        fontSize: 20
    }
});

export default CourseDetails;
