import CourseDetail from "@eLearning/components/CourseDetail/CourseDetail"
import { ESCREEN } from "@eLearning/types/screenName"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigation from "../BottomNavigation/BottomNavigation"
import CourseDetailScreen from "@eLearning/screen/CourseDetail/CourseDetailScreen"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name={ESCREEN.BOTTOM_NAVIGATION} component={BottomNavigation}/>
      <Stack.Screen name={ESCREEN.COURSE_DETAIL} component={CourseDetailScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator

