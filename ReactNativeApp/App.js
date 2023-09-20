import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';
import UserData from './src/screens/UserData';

const App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                {/* <Stack.Screen name="home" component={Home} /> */}
                <Stack.Screen name='home' options={{ headerShown: false }}>
                    {(props) => <Home {...props} appName={'Education App'} />}
                </Stack.Screen>
                <Stack.Screen name='about' component={About} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "About", headerTitleAlign: 'center' }} />
                <Stack.Screen name='contact' component={Contact} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "Contact", headerTitleAlign: 'center' }} />
                <Stack.Screen name='course' component={Course} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "Course", headerTitleAlign: 'center' }} />
                <Stack.Screen name='coursedetails' component={CourseDetails} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "CourseDetail", headerTitleAlign: 'center' }} />
                <Stack.Screen name='student' component={UserData} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "Student Data", headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
