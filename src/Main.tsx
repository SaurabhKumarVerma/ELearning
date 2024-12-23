import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import { withTheme } from '@rneui/themed';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import SignupScreen from './screen/SignupScreen/SignupScreen';
import ExpertScreen from './screen/ExpertScreen/ExpertScreen';
import RatingModal from './components/RatingModal/RatingModal';
const Main = () => {
  return (
    <NavigationContainer
    >
      <HomeScreen />
    </NavigationContainer>
  )
}

export default withTheme(Main)