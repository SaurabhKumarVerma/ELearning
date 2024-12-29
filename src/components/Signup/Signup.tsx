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
import { Alert, Appearance, StyleSheet,View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { MODE } from "@eLearning/types/types";
import UserProfile from "./UserProfile";
import ELearningTextInput from "@eLearning/base/ELearningTextInput/ELearningTextInput";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import { color } from "@eLearning/theme/color";
import { AntDesign } from "@expo/vector-icons";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from "@react-navigation/native";
import { ESCREEN } from "@eLearning/types/screenName";

const Signup = () => {
  const inset = useSafeAreaInsets();
const navigation = useNavigation();
  const toggleDarkMode = () => {
    Appearance.getColorScheme() === MODE.DARK
      ? Appearance.setColorScheme(MODE.LIGHT)
      : Appearance.setColorScheme(MODE.DARK);
  };

  const  onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const signInResult = await GoogleSignin.signIn();
    const idToken = signInResult?.idToken;
    if (!idToken) {
     console.log('No ID token found');
    }
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data?.token);
    return auth().signInWithCredential(googleCredential);
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
          inputText={""}
          inputProps={{ inputMode: "text" }}
          onChangeText={(text: string) => { }}
        />
        <View style={{marginVertical: 20}}>
        <ELearningTextInput
          placeholder="Enter email address"
          inputText={""}
          inputProps={{ inputMode: "email", keyboardType: "email-address" }}
          onChangeText={(text: string) => { }}
        />
        </View>
        <ELearningTextInput
          placeholder="Password"
          secureTextEntry
          inputText={""}
          onChangeText={(text: string) => { }}
        />
      </View>

      <View style={{ marginTop: 36 }}>
                    <ELearningLoadingButton
                        isLoading={false}
                        handlePress={() => console.log("clec")}
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
                    handlePress={onGoogleButtonPress}
                    label="Continue With Google"
                    textPresets="medium"
                    textStyle={{ color: color.whisperWhite }}
                />
    </View>
  );
};

export default Signup;

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
