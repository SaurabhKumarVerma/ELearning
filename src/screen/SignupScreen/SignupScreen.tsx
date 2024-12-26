import React from 'react'
import Signup from '@eLearning/components/Signup/Signup'
import { ScrollView } from 'react-native'
import { useTheme } from '@rneui/themed'

const SignupScreen = () => {
  const {theme} = useTheme()
  return (
  <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: theme.colors.background}} >
    <Signup />
  </ScrollView>
  )
}

export default SignupScreen