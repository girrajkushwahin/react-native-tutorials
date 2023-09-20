import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from "../redux/action";

const Product = (props) => {

    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.reducer)

    const [added, setAdded] = React.useState(false)

    const { name, color, price, image } = props.item

    React.useEffect(() => {

        // if (cartData && cartData.length) {
        //     cartData.forEach((element) => {
        //         if (element.name === name) setAdded(true)
        //     })
        // }

        let result = cartData.filter((element) => element.name === name)
        if (result.length) setAdded(true)
        else setAdded(false)

    }, [cartData])

    const handleAddToCart = item => {
        // console.warn(item);
        dispatch(addToCart(item))
    }

    const handleRemoveCart = item => {
        dispatch(removeCart(item.name))
        // console.warn('removing');
    }

    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
            <Text style={{ fontSize: 24 }}>{name}</Text>
            <Text style={{ fontSize: 24 }}>{color}</Text>
            <Text style={{ fontSize: 24 }}>{price}</Text>
            <Image style={{ width: 90, height: 90 }} source={{ uri: image }} />
            {added ? <Button title="Remove from cart" onPress={() => handleRemoveCart(props.item)} /> : <Button title="Add to cart" onPress={() => handleAddToCart(props.item)} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Product;
