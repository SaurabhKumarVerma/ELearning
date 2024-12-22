import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import { withTheme } from '@rneui/themed';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import SignupScreen from './screen/SignupScreen/SignupScreen';
const Main = () => {
  return (
    <NavigationContainer
    >
      <SignupScreen />
    </NavigationContainer>
  )
}

export default withTheme(Main)