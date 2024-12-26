import React from 'react'
import { Onboarding } from '@eLearning/components/Onborading/Onboarding'
import { View } from 'react-native'
import { useTheme } from '@rneui/themed'

const OnboardingScreen = () => {
  const {theme} = useTheme()
  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <Onboarding />
    </View>
  )
}

export default OnboardingScreen