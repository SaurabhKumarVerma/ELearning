import React, { forwardRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { withTheme } from '@rneui/themed';
import StackNavigator from './navigations/StackNavigation/HomeStack';
import RatingModal from './components/RatingModal/RatingModal';
import { NavigationContainerRef } from '@react-navigation/native';

const Main = forwardRef((props, ref: React.ForwardedRef<NavigationContainerRef<any>>) => {

  return (
    <NavigationContainer
      ref={ref}
    >
      <StackNavigator />
      <RatingModal />
    </NavigationContainer>
  );
});

export default withTheme(Main);
