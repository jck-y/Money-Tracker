import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/components/Pages/Splash'
import Money from "./src/assets/Images/money.svg";
const App = () => {
  return (
    <View>
      <Splash/>
      <Money/>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})