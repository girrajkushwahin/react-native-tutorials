import React from "react";
import { View, ScrollView } from 'react-native'
import Radiobtn from "./src/components/Radiobtn";
import DynamicRadio from "./src/components/DynamicRadio";
import ModalUI from "./src/components/ModalUI";
import CustomModal from "./src/components/CustomModal";
import Header from "./src/components/Header";
import Product from "./src/components/Product";

const App = () => {

    const products = [
        {
            name: 'Samsung galaxy',
            color: 'white',
            price: '30,000',
            image: 'https://www.guidingtech.com/wp-content/uploads/reduce-an-image-size-on-Android.jpg'
        },
        {
            name: 'Nokia mobile',
            color: 'Brown',
            price: '18,000',
            image: 'https://www.guidingtech.com/wp-content/uploads/reduce-an-image-size-on-Android.jpg'
        },
        {
            name: 'Micromax Mobile',
            color: 'Black',
            price: '20,000',
            image: 'https://www.guidingtech.com/wp-content/uploads/reduce-an-image-size-on-Android.jpg'
        }
    ]

    return (
        // <Radiobtn />
        // <DynamicRadio />
        // <ModalUI />
        // <CustomModal />
        <View>
            <Header />
            <ScrollView>
                {products.map((elem, index) => <Product item={elem} key={index} />)}
            </ScrollView>
        </View>
    );
};

export default App;
