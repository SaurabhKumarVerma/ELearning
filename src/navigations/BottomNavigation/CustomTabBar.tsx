/* eslint-disable react-native/no-inline-styles */
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
