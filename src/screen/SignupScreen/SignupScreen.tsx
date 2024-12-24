import React from 'react'
import Signup from '@eLearning/components/Signup/Signup'
import { ScrollView } from 'react-native'

const SignupScreen = () => {
  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Signup />
  </ScrollView>
  )
}

export default SignupScreen