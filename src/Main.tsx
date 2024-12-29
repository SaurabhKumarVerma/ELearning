import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { withTheme } from '@rneui/themed';
import StackNavigator from './navigations/StackNavigation/HomeStack';
import RatingModal from './components/RatingModal/RatingModal';

// Main component that sets up the navigation container and includes the stack navigator and rating modal
const Main = () => {
  return (
    <NavigationContainer
    >
      <StackNavigator />
      <RatingModal />
    </NavigationContainer>
  )
}

export default withTheme(Main)