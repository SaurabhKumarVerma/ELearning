/* eslint-disable react-native/no-inline-styles */
/**
 * CustomBottomTabBar Component
 * 
 * This component serves as a custom bottom tab bar for navigation within the 
 * application. It displays a series of icons representing different routes 
 * and allows users to navigate between them. The tab bar adapts its appearance 
 * based on the current theme (light or dark mode).
 * 
 * Props:
 * - state (BottomTabState): The current state of the bottom tab navigator, 
 *   including the active route and available routes.
 * - descriptors (BottomTabDescriptorMap): An object containing the route 
 *   descriptors, which provide options and properties for each route.
 * - navigation (BottomTabNavigationProp): The navigation prop used to 
 *   navigate between routes.
 * 
 * Key Features:
 * - Renders a series of `BottomIcon` components for each route in the tab 
 *   navigator, indicating the current active route with visual feedback.
 * - Handles press and long press events on each tab to navigate to the 
 *   corresponding route or trigger additional actions.
 * - Dynamically sets the background color of the tab bar based on the current 
 *   theme (light or dark mode).
 * - Utilizes accessibility properties to enhance usability for screen readers.
 * 
 * Usage:
 * This component is intended to be used as a replacement for the default 
 * bottom tab bar provided by React Navigation, allowing for a customized 
 * appearance and behavior.
 */
import { StyleSheet, View, Pressable } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import BottomIcon from "./BottomIcon"
import { BOTTOM_BAR_HEIGHT } from "@eLearning/constant/constant"
import { color } from "@eLearning/theme/color"
import { useTheme } from "@rneui/themed"
import { MODE } from "@eLearning/types/types"

const CustomBottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const MARGIN = 20
  const {theme} = useTheme()
  const backgroundColor = theme.mode === MODE.DARK ? color.forestGreen : color.darkForestGreen
  return (
    <View style={[styles.container, { bottom: MARGIN, backgroundColor}]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }
        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
            }}
          >
            <View style={[styles.content, { borderRadius: 24 }]}>
              <BottomIcon isFocused={isFocused} routeName={route.name} index={state.index} />
            </View>
          </Pressable>
        )
      })}
    </View>
  )
}

export default CustomBottomTabBar
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: BOTTOM_BAR_HEIGHT,
    overflow: "hidden",
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 20
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
