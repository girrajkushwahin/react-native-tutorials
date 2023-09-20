import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    // state.reducer because 'reducer' is the key name in the store. we have to use key name of store here in useSelector hook.

    // console.warn(cartData)

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, textAlign: 'right', padding: 10, backgroundColor: 'orange' }}>{cartData.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Header;
