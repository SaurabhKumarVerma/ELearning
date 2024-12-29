/* eslint-disable react-native/no-inline-styles */
/**
 * BottomIcon Component
 * 
 * This component represents an icon in the bottom navigation bar of the 
 * application. It displays an icon and a label corresponding to a specific 
 * route (e.g., Home or Enrolled) and visually indicates whether the icon 
 * is currently focused (active) or not.
 * 
 * Props:
 * - isFocused (boolean): Indicates whether the icon is currently focused 
 *   (active) or not.
 * - routeName (string): The name of the route associated with this icon 
 *   (e.g., "Home" or "Enrolled").
 * - index (number): The index of the icon in the navigation bar (not used 
 *   in the current implementation).
 * 
 * Key Features:
 * - Uses the `Ionicons` library to display icons based on the route name.
 * - Dynamically determines the icon name based on whether the icon is 
 *   focused or not, using a mapping of route names to icon names.
 * - Adjusts the icon color based on the focus state and the current theme 
 *   (light or dark mode).
 * - Utilizes `react-native-reanimated` for potential animations (though 
 *   currently no specific animations are defined).
 * - Displays a label next to the icon, which reflects the route name.
 * 
 * Usage:
 * This component is intended to be used within a bottom navigation bar, 
 * allowing users to navigate between different sections of the application.
 */
import { StyleSheet, View } from "react-native"

import Animated from "react-native-reanimated"
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
            size={20}
            color={iconColor(props.isFocused)}
          />
        </Animated.View>
        
        <View style={{marginLeft: 10}}>
        <ELearningText
            preset="medium"
            style={{
              color: iconColor(props.isFocused),
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
