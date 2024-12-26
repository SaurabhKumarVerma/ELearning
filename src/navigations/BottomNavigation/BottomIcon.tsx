/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from "react-native"

import Animated, { SlideInUp } from "react-native-reanimated"
import { Ionicons } from "@expo/vector-icons"
import ELearningText from "@eLearning/base/ELearningText/ELearningText"
import { ESCREENICON, MODE } from "@eLearning/types/types"
import { color } from "@eLearning/theme/color"
import { useTheme } from "@rneui/themed"

interface IBottomIcon {
  isFocused: boolean
  routeName: string
  index: number
}

type RouteNames = "Home" | "Enrolled"

const BottomIcon = (props: IBottomIcon) => {
  const {theme} = useTheme()
  const routeMap: Record<RouteNames, string> = {
    Home: ESCREENICON.HOME,
    Enrolled: ESCREENICON.Enrolled,
  }

  const selectedRouteMap: Record<RouteNames, ESCREENICON> = {
    Home: ESCREENICON.HOME,
    Enrolled: ESCREENICON.Enrolled,
  }

  const routeName = (name: string): string => {
    const capName = name
    const defaultIconName = ESCREENICON.HOME
    const iconName = props.isFocused
      ? selectedRouteMap[capName as RouteNames]
      : routeMap[capName as RouteNames]
    return iconName || defaultIconName
  }

  const iconColor = (focus: boolean) => {

    if(focus && theme.mode === MODE.DARK) {
      return color.whisperWhite
    }else if(focus && theme.mode === MODE.LIGHT){
      return color.tropicalGreen
    } else {
      return color.gray
    }
  }
  return (
    <Animated.View
      style={{  }}
    >
      <Animated.View
        style={{
          paddingBottom: 8,
          flexDirection: 'row',
          alignItems: "center"
        }}
      >
        <Animated.View style={styles.container}>
          <Ionicons
            name={routeName(props.routeName) as any}
            size={30}
            color={iconColor(props.isFocused)}
          />
        </Animated.View>
        
        <View style={{marginLeft: 10}}>
        <ELearningText
            preset="medium"
            style={{
              color: iconColor(props.isFocused),
              // color: props.isFocused ? color.selectedColor : color.mediumGray,
              fontSize: 12,
              fontWeight: "700",
              overflow: "hidden",
              textAlign: "center",
            }}
            numberOfLines={1}
          text={props.routeName}
          />
        </View>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 24,
    zIndex: 1,
  },
})

export default BottomIcon
