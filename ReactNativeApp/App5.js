import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from "./src/screens/LoginForm"
import HomePage from "./src/screens/HomePage";

const App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={LoginForm} />
                <Stack.Screen name="home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
