import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Radiobtn = () => {

    const [radio, setRadio] = useState('')

    return (
        <View style={styles.main}>
            <Pressable onPress={() => setRadio(1)}>
                <View style={styles.radioWrap}>
                    <View style={styles.radio}>
                        {radio === 1 ? <View style={styles.radiobg}></View> : ''}
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => setRadio(2)}>
                <View style={styles.radioWrap}>
                    <View style={styles.radio}>
                        {radio === 2 ? <View style={styles.radiobg}></View> : ''}
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </Pressable>
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
        alignItems: 'center'
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

export default Radiobtn;
