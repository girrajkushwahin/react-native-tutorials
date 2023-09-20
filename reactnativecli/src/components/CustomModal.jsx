import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CustomModal = () => {

    const [show, setShow] = React.useState(false)

    return (
        <View style={styles.container}>
            {show && <View style={styles.modal}>
                <View style={styles.body}>
                    <Text>Text of dialogue box</Text>
                    <Button onPress={() => setShow(false)} title="close dialogue" />
                </View>
            </View>}
            <Button disabled={show} onPress={() => setShow(true)} title="open dialogue" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'black'
    },
    modal: {
        flex: 1,
        // tranparent color -
        backgroundColor: 'rgba(50,50,50,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        // flex: 1,
        backgroundColor: '#fff',
        width: 300,
        height: 300,
        padding: 20,
        justifyContent: 'flex-end',
        borderRadius: 10
    }
});

export default CustomModal;
