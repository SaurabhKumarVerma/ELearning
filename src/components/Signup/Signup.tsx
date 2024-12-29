/**
 * Signup Component
 * 
 * This component provides a user interface for signing up new users to the 
 * application. It includes fields for entering a full name, email address, 
 * and password, as well as an option to sign up using Google. The component 
 * also features a header with navigation options and handles user 
 * authentication through Firebase.
 * 
 * Key Features:
 * - Displays a header with a close button and a "Sign Up" call-to-action.
 * - Provides input fields for the user to enter their full name, email, 
 *   and password, with appropriate keyboard settings for email input.
 * - Includes a "Sign Up" button that currently logs a message to the console 
 *   (to be replaced with actual sign-up logic).
 * - Offers an alternative sign-up option using Google, utilizing the 
 *   `GoogleSignin` library for authentication.
 * - Displays informative text to guide users through the sign-up process.
 * - Uses `useSafeAreaInsets` to ensure that the layout respects the device's 
 *   safe area, particularly for devices with notches or rounded corners.
 * 
 * Usage:
 * This component is intended for use as part of the authentication flow in 
 * the application, allowing new users to create an account.
 */
import { ActivityIndicator, Alert, StyleSheet,View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import UserProfile from "./UserProfile";
import ELearningTextInput from "@eLearning/base/ELearningTextInput/ELearningTextInput";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import { color } from "@eLearning/theme/color";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ESCREEN } from "@eLearning/types/screenName";
import { useStore } from "@eLearning/store/StoreContext";
import { observer } from "mobx-react";

const Signup = () => {
  const inset = useSafeAreaInsets();
  const { userStore } = useStore()
const navigation = useNavigation();


  const onGoogleSignIn = () => {
    userStore.onGoogleButtonPress()
  }

  if(userStore.isLoading){
    return (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={"small"} />
          </View>
        );
  }


  const onClose = () =>
          Alert.alert('Are you sure ', '', [
            {
              text: 'Cancel',
              onPress: () => console.log(),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.reset({
              index:0,
              routes: [{ name: ESCREEN.BOTTOM_NAVIGATION }],
            })},
          ]);

  const onSignup = () => {
  
          if (userStore.userEmail && userStore.password) {
              navigation.reset({
                  index: 0,
                  routes: [{ name: ESCREEN.BOTTOM_NAVIGATION }],
              })
  
          };
  
          if (!userStore.userEmail || !userStore.password) {
              return (
                  Alert.alert(`Invalid email or password`, '', [
                      {
                          text: 'Okay',
                          onPress: () => console.log(),
                          style: 'cancel',
                      },
                  ])
              )
          }
      }

  return (
    <View style={{  top: inset.top, marginHorizontal: 18, marginBottom: '20%'}}>
      <View>
        <ELearningAuthHeader
          onClose={onClose}
        />
      </View>

      <View style={styles.titleContainer}>
        <ELearningText
          text="Join E-Learning Community"
          preset="semiBold"
          size={24}
          style={{ textAlign: "center" }}
        />
        <ELearningText
          text="Subscribe quickly with us"
          preset="regular"
          size={16}
          style={{ marginTop: 8,  textAlign: "center"  }}
        />
      </View>

      <View style={{ marginTop: 24, alignItems: "center" }}>
        <UserProfile />
      </View>

      <View style={{ marginTop: 32 }}>
        <ELearningTextInput
          placeholder="Enter Full Name"
          inputText={userStore.userName}
          inputProps={{ inputMode: "text" }}
          onChangeText={(text: string) => userStore.getUserName(text)}
        />
        <View style={{marginVertical: 20}}>
        <ELearningTextInput
          placeholder="Enter email address"
          inputText={userStore.userEmail}
          inputProps={{ inputMode: "email", keyboardType: "email-address" }}
          onChangeText={(text: string) => userStore.getUserEmail(text)}
        />
        </View>
        <ELearningTextInput
          placeholder="Password"
          secureTextEntry
          inputText={userStore.password}
          onChangeText={(text: string) => userStore.getUserPassword(text)}
        />
      </View>

      <View style={{ marginTop: 36 }}>
                    <ELearningLoadingButton
                        isLoading={false}
                        handlePress={onSignup}
                        label="Sign Up"
                        textPresets="medium"
                        textStyle={{ color: color.whisperWhite }}
                    />
                </View>

                <View style={styles.ctaContainer}>
                    <ELearningText text="OR" preset="medium" size={12} />
                </View>

                <View style={[styles.ctaContainer, { marginBottom: 32 }]}>
                    <ELearningText
                        text="We never share anything on your behalf"
                        preset="medium"
                        size={12}
                    />
                </View>

                <ELearningLoadingButton
                    icon={
                        <AntDesign name="google" size={24} color={color.whisperWhite} />
                    }
                    buttonBackgroundColor={color.crimsonRed}
                    isLoading={false}
                    handlePress={onGoogleSignIn}
                    label="Continue With Google"
                    textPresets="medium"
                    textStyle={{ color: color.whisperWhite }}
                />
    </View>
  );
};

export default observer(Signup);

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
  ctaContainer: {
    marginTop: 30,
    alignItems: "center",
},
});
