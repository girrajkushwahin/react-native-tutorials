import React from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

const ModalUI = () => {

    const [showModal, setShowModal] = React.useState(false)

    return (
        <View style={styles.main}>
            <Modal transparent={true} visible={showModal} animationType='slide'>
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>Girraj Kushwah</Text>
                        <Button onPress={() => setShowModal(false)} title="close modal" />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                <Button onPress={() => setShowModal(true)} title="open modal" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: 'black'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 10
    },
    textStyle: {
        fontSize: 30,
        marginBottom: 20
    }
});

export default ModalUI;
