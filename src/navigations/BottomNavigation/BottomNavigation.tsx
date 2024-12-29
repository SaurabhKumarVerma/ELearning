/**
 * BottomNavigation Component
 * 
 * This component sets up the bottom tab navigation for the application using 
 * React Navigation's bottom tab navigator. It defines the main screens that 
 * users can navigate between, specifically the Home and Enrolled screens.
 * 
 * Key Features:
 * - Utilizes `createBottomTabNavigator` to create a tab navigator with 
 *   customizable tab bar components.
 * - Integrates a custom tab bar component (`CustomBottomTabBar`) to replace 
 *   the default tab bar, allowing for a tailored user interface.
 * - Sets the initial route to the Home screen, ensuring that users land on 
 *   the appropriate screen when the app is launched.
 * - Hides the header for all screens in the tab navigator by setting 
 *   `headerShown` to false in the screen options.
 * 
 * Usage:
 * This component is intended to be used as the main navigation structure 
 * for the application, allowing users to switch between different sections 
 * of the app seamlessly.
 */
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CustomBottomTabBar from "./CustomTabBar"
import { ESCREEN } from "@eLearning/types/screenName"
import HomeScreen from "@eLearning/screen/HomeScreen/HomeScreen"
import EnrolledScreen from "@eLearning/screen/EnrolledScreen/EnrolledScreen"
import { BottomTabParamList } from "../NavigationTypes/types"

const BottomNavigation = () => {
  const Tabs = createBottomTabNavigator<BottomTabParamList>()

  const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTabBar {...props} key={Math.random()} />
  }

  return (
    <Tabs.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
      tabBar={CustomBottomTabs}
      initialRouteName={ESCREEN.HOME_SCREEN}
    >
      <Tabs.Screen name={ESCREEN.HOME_SCREEN} component={HomeScreen} />
      <Tabs.Screen name={ESCREEN.ENROLLED_SCREEN} component={EnrolledScreen} />
    </Tabs.Navigator>
  )
}

export default BottomNavigation
