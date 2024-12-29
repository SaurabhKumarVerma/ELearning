/**
 * ESCREEN Enum
 * 
 * This enum defines a set of string constants representing the names of 
 * various screens in the application. It serves as a centralized reference 
 * for screen names, ensuring consistency and reducing the risk of 
 * typos when navigating between screens.
 * 
 * Key Features:
 * - Provides a clear and organized way to manage screen names, making it 
 *   easier to reference them throughout the application.
 * - Helps to avoid hardcoding string literals in multiple places, which 
 *   can lead to errors and inconsistencies.
 * - Facilitates easier refactoring and maintenance, as changes to screen 
 *   names can be made in one location.
 */
export const enum ESCREEN {
    HOME_SCREEN = 'Home',
    LOGIN_SCREEN = 'Login',
    SIGNUP_SCREEN = 'Signup',
    ONBOARDING = 'Onboarding',
    GETTING_STARTED = 'GettingStarted',
    SHOW_LIST = 'ShowList',
    LEVEL_SCREEN = 'LevelScreen',
    REMAINDER_SCREEN = 'RemainderScreen',
    COURSE_DETAIL = 'CourseDetail',
    ENROLLED_SCREEN = 'Enrolled',
    BOTTOM_NAVIGATION = 'BottomNavigation',
    AUTHENTICATION_SCREEN = 'AuthScreen',
    ACCOUNT_SCREEN = 'AccountScreen'
}