import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const DynamicRadio = () => {

    const [radio, setRadio] = useState('')

    const skills = [
        {
            id: 1,
            skill: 'Node.js'
        },
        {
            id: 2,
            skill: 'React.js'
        },
        {
            id: 3,
            skill: 'MonogDB'
        },
        {
            id: 4,
            skill: 'JavaScript'
        },
        {
            id: 5,
            skill: 'TypeScript'
        }
    ]

    return (
        <View style={styles.main}>
            {skills.map((elem, index) =>
                <Pressable onPress={() => setRadio(elem.id)} key={index}>
                    <View style={styles.radioWrap}>
                        <View style={styles.radio}>
                            {radio === elem.id ? <View style={styles.radiobg}></View> : ''}
                        </View>
                        <Text style={styles.radioText}>{elem.skill}</Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioText: {
        fontSize: 20,
    },
    radio: {
        height: 40,
        width: 40,
        // backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radiobg: {
        backgroundColor: 'skyblue',
        // height: 40,
        // width: 40,
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
    }
})

export default DynamicRadio;
