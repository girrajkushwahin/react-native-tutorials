import React from "react"
import { Text, StyleSheet, View } from 'react-native'
import CustomComponent from "./src/screens/CustomComponent"
import FirstChallenge from "./src/screens/FirstChallenge"

const App = () => {
  const framework = 'React Native...'
  const element = <Text>New Element</Text>
  const getFullName = (first, second) => {
    return `${first} ${second}`
  }
  // return <Text style={styles.textStyle}>Hello, React Native...</Text>
  return (
    <View>
      <Text style={styles.textStyle}>Hello, {framework}</Text>
      <CustomComponent />
      {element}
      <Text>Hi, My name is {getFullName('Girraj', 'Kushwah')}</Text>
      <FirstChallenge />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    marginTop: 100
  }
})

export default App