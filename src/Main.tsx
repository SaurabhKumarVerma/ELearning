import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { withTheme } from '@rneui/themed';
import StackNavigator from './navigations/StackNavigation/HomeStack';
const Main = () => {
  return (
    <NavigationContainer
    >
      <StackNavigator />
    </NavigationContainer>
  )
}

export default withTheme(Main)