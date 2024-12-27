import { View } from 'react-native'
import React from 'react'
import Home from '@eLearning/components/Home/Home'
import { useTheme, withTheme } from '@rneui/themed'
import { observer } from 'mobx-react'

const HomeScreen = () => {
  const {theme} = useTheme()
  return (
    <View style={{flex: 1, backgroundColor:  theme.colors.background }}>
      <Home />
    </View>
  )
}

export default observer(HomeScreen)