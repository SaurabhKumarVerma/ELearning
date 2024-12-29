/**
 * ELearningImage Component
 * 
 * This component is designed to render an image with support for a placeholder 
 * and a smooth transition effect. It utilizes the `expo-image` library to 
 * handle image rendering efficiently, especially in e-learning applications 
 * where images may be loaded from various sources.
 * 
 * Props:
 * - @imageData (ImageProps): An object containing properties for the image, 
 *   including style, source, and any other valid ImageProps from the 
 *   `expo-image` library.
 * 
 * Functionality:
 * - The component extracts the `style` and `source` from the `imageData` prop 
 *   and passes them to the `Image` component.
 * - A placeholder is displayed while the image is loading, using a blur hash 
 *   defined in the constants. This provides a better user experience by 
 *   showing a low-resolution version of the image until the full image is 
 *   loaded.
 * - The `transition` prop is set to 1000 milliseconds, allowing for a smooth 
 *   fade-in effect when the image is fully loaded.
 */
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