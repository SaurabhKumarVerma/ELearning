import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import { withTheme } from '@rneui/themed';
const Main = () => {
  return (
    <NavigationContainer
    >
      <HomeScreen />
    </NavigationContainer>
  )
}

export default withTheme(Main)