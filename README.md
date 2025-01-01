## E-Learning

- [Github Project Link](https://github.com/SaurabhKumarVerma/ELearning)
  <br>
  
```bash
 cd ELearning
```
  <br>
## Step 1: Install dependencies

```bash
# using Yarn
yarn install

# or using
npm install

```

## Step 2: Start Application

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For IOS

```bash
cd ios
pod install

# using npm
npm run ios

# OR using Yarn
yarn ios
```
  
## Approach
### This is a React Native project that follows a modular **Component/Screen folder structure** pattern. Each screen is built using multiple smaller components, making the codebase more maintainable, reusable, and scalable.

# 🛠️ Features

- Modular folder structure
- Reusable components `include in base folder`
- Easy-to-extend screens
- Centralized navigation using `@react-navigation/native`

## Feature (Implemented)
- Onboarding Flow(`Once user seen onboarding screen it won't visible again.`)
🔨 Setup Google Authentication
- Authentication Flow `user also SignIn with Google`
- The SignUp section allows users to sign up, while the Login section gives them the option to sign in with Google. No specific checks were applied between the Login and SignUp components.
- The Login component allows users to sign in through Google, offering a seamless authentication experience with Google integration, enhancing accessibility and convenience for users to log in quickly and securely.
- After logging in, the user is directed to the home screen, which displays a list of course cards. Each card contains essential information about a specific course available for enrollment..
- Upon clicking a course card, navigate to the course detail screen, displaying a video preview, description, rating, and author. Clicking the "Enroll" button adds the course to the enrolled section..
- Display a list of courses the user is enrolled in on the enrolled screen.
- On the Profile Screen, users can update their current image by clicking an "Edit" button. This allows them to select a new photo from their gallery, updating their profile image accordingly.

<br>

## 🧰 Library Used
- [Expo](https://reactnative.dev/docs/environment-setup)
- [React Native Stack Navigation](https://reactnavigation.org/docs/native-stack-navigator)
- [Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator)
- [Expo vector Icon](https://www.npmjs.com/package/react-native-vector-icons)
- [Mobx](https://mobx.js.org/README.html): State management in app.
- [React-Native-Video](https://www.npmjs.com/package/react-native-video): For Playing Video.
- [React-Native-Mmkv](https://github.com/mrousavy/react-native-mmkv): For handling persistent storage. 
