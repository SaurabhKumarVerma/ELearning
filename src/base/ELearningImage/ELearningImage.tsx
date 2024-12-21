import React from 'react'
import { Image, ImageProps, ImageStyle } from 'expo-image'
import { IMAGE_BLUR_HASH } from '@eLearning/constant/constant'

interface IELearningImage {
    imageData: ImageProps,
}

const ELearningImage = (props: IELearningImage) => {
    const {style, source} = props.imageData
  return (
      <Image
        style={style}
        source={source}
        placeholder={{ IMAGE_BLUR_HASH }}
        transition={1000}
        {...props.imageData}
      />
  )
}

export default ELearningImage