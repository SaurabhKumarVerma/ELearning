/**
 * StackNavigator Component
 * 
 * This component sets up the main navigation stack for the application using 
 * React Navigation's native stack navigator. It defines the primary screens 
 * that users can navigate to, including authentication, bottom navigation, 
 * course details, and account management.
 * 
 * Key Features:
 * - Utilizes `createNativeStackNavigator` to create a stack navigator for 
 *   managing screen transitions in the application.
 * - Configures the stack navigator to hide the header for all screens by 
 *   setting `headerShown` to false, providing a full-screen experience.
 * - Enables gesture-based navigation by setting `gestureEnabled` to true, 
 *   allowing users to swipe back to the previous screen.
 * 
 * Screens Included:
 * - AuthNavigator: A nested navigator that handles authentication-related 
 *   screens (login, signup, onboarding).
 * - BottomNavigation: The main navigation component that allows users to 
 *   switch between different sections of the application.
 * - CourseDetailScreen: A screen that displays detailed information about 
 *   a specific course.
 * - AccountScreen: A screen for managing user account settings, presented 
 *   as a modal with a vertical slide animation.
 * 
 * Usage:
 * This component is intended to be used as the primary navigation structure 
 * for the application, allowing users to navigate between different sections 
 * and functionalities seamlessly.
 */
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

