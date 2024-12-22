import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StudyIcon from '../../../assets/svg/study.svg'
import { SCREEN_WIDTH } from '@eLearning/constant/constant'

const IconSvg = () => {
  return (
      <StudyIcon style={{width: SCREEN_WIDTH}} />
  )
}

export default IconSvg

const styles = StyleSheet.create({})