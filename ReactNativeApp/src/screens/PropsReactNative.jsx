import React from 'react'
import { ScrollView } from 'react-native'
import CardDetail from '../components/CardDetail'

const PropsReactNative = () => {
    return (
        <ScrollView>
            <CardDetail textdata={'This is image file 1'} />
            <CardDetail textdata={'This is image file 2'} />
            <CardDetail textdata={'This is image file 3'} />
            <CardDetail textdata={'This is image file 4'} />
        </ScrollView>
    )
}

export default PropsReactNative