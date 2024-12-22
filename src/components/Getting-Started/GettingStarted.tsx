import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconSvg from './IconSvg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const GettingStarted = () => {
  const inset = useSafeAreaInsets()
  return (
    <View style={{top: inset.top}}>
      <View style={{ alignItems: 'center'}}>
        <IconSvg />
      </View>
     
    </View>
  )
}

export default GettingStarted

const styles = StyleSheet.create({})