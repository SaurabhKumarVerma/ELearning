/**
 * AuthNavigator Component
 * 
 * This component sets up the authentication navigation stack for the 
 * application using React Navigation's native stack navigator. It defines 
 * the screens related to user authentication, including onboarding, login, 
 * and signup screens.
 * 
 * Key Features:
 * - Utilizes `createNativeStackNavigator` to create a stack navigator 
 *   specifically for authentication-related screens.
 * - Configures the stack navigator to hide the header for all screens by 
 *   setting `headerShown` to false, providing a full-screen experience.
 * - Enables gesture-based navigation by setting `gestureEnabled` to true, 
 *   allowing users to swipe back to the previous screen.
 * 
 * Screens Included:
 * - OnboardingScreen: The initial screen that introduces users to the 
 *   application and its features.
 * - LoginScreen: The screen where users can log in to their existing 
 *   accounts.
 * - SignupScreen: The screen where new users can create an account.
 * 
 * Usage:
 * This component is intended to be used as part of the application's 
 * navigation structure, specifically for managing user authentication flows.
 */
import { StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ESCREEN } from '@eLearning/types/screenName'
import OnboardingScreen from '@eLearning/screen/OnboardingScreen/OnboardingScreen'
import LoginScreen from '@eLearning/screen/LoginScreen/LoginScreen'
import SignupScreen from '@eLearning/screen/SignupScreen/SignupScreen'
import { useStore } from '@eLearning/store/StoreContext'
import { observer } from 'mobx-react'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  const {userStore} = useStore()
  const [state, setState] = useState<boolean>()

  
  useLayoutEffect(() => {
  const value =   userStore.shownOnboardingValue()
  setState(value)
  },[])
  
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false, gestureEnabled: true }}>
      {
        !state? (
          <Stack.Screen name={ESCREEN.ONBOARDING} component={OnboardingScreen}/>
        ) : null
      }
    <Stack.Screen name={ESCREEN.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={ESCREEN.SIGNUP_SCREEN} component={SignupScreen} />
  </Stack.Navigator>
  )
}

export default observer(AuthNavigator)

const styles = StyleSheet.create({})