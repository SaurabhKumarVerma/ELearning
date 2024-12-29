import { ESCREEN } from "@eLearning/types/screenName"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigation from "../BottomNavigation/BottomNavigation"
import CourseDetailScreen from "@eLearning/screen/CourseDetail/CourseDetailScreen"
import AuthNavigator from "./AuthNavigator"
import AccountScreen from "@eLearning/screen/AccountScreen/AccountScreen"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator id={undefined}  screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name={ESCREEN.AUTHENTICATION_SCREEN} component={AuthNavigator}/>
      <Stack.Screen name={ESCREEN.BOTTOM_NAVIGATION} component={BottomNavigation}/>
      <Stack.Screen name={ESCREEN.COURSE_DETAIL} component={CourseDetailScreen} />
      <Stack.Screen name={ESCREEN.ACCOUNT_SCREEN} component={AccountScreen} options={{
        headerShown: false,
        animation:"slide_from_bottom",
        gestureEnabled: true,
        gestureDirection: 'vertical',
        headerBlurEffect: "dark",
        presentation: 'modal',
      }} />
    </Stack.Navigator>
  )
}

export default StackNavigator

