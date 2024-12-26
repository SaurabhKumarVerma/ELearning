import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ESCREEN } from '@eLearning/types/screenName'
import OnboardingScreen from '@eLearning/screen/OnboardingScreen/OnboardingScreen'
import LoginScreen from '@eLearning/screen/LoginScreen/LoginScreen'
import SignupScreen from '@eLearning/screen/SignupScreen/SignupScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false, gestureEnabled: true }}>
    <Stack.Screen name={ESCREEN.ONBOARDING} component={OnboardingScreen}/>
    <Stack.Screen name={ESCREEN.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={ESCREEN.SIGNUP_SCREEN} component={SignupScreen} />
  </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})