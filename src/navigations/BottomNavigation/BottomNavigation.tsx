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
    >
      <Tabs.Screen name={ESCREEN.HOME_SCREEN} component={HomeScreen} />
      <Tabs.Screen name={ESCREEN.ENROLLED_SCREEN} component={EnrolledScreen} />
    </Tabs.Navigator>
  )
}

export default BottomNavigation
