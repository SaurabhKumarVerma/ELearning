/**
 * Login Component
 * 
 * This component provides a user interface for logging into the application. 
 * It includes fields for email and password input, as well as an option to 
 * sign in using Google. The component also features a header with navigation 
 * options and handles user authentication through Firebase.
 * 
 * Key Features:
 * - Displays a header with a "Sign Up" call-to-action and a close button 
 *   that prompts a confirmation alert when pressed.
 * - Provides input fields for the user to enter their email and password, 
 *   with appropriate keyboard settings for email input.
 * - Includes a "Forgot Password?" link that allows users to recover their 
 *   password.
 * - Features a "Sign In" button that triggers a console log (to be replaced 
 *   with actual sign-in logic).
 * - Offers an alternative sign-in option using Google, utilizing the 
 *   `GoogleSignin` library for authentication.
 * - Displays informative text to guide users through the login process.
 * - Uses `useSafeAreaInsets` to ensure that the layout respects the device's 
 *   safe area, particularly for devices with notches or rounded corners.
 * 
 * Usage:
 * This component is intended for use as part of the authentication flow in 
 * the application, allowing users to log in to their accounts.
 */
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import ELearningTextInput from "@eLearning/base/ELearningTextInput/ELearningTextInput";
import { color } from "@eLearning/theme/color";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from "@react-navigation/native";
import { ESCREEN } from "@eLearning/types/screenName";
import { observer } from "mobx-react";
import { useStore } from "@eLearning/store/StoreContext";

const Login = () => {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();
    const { userStore } = useStore()

    const onClose = () =>
        Alert.alert('Are you sure ', '', [
            {
                text: 'Cancel',
                onPress: () => console.log(),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => navigation.reset({
                    index: 0,
                    routes: [{ name: ESCREEN.BOTTOM_NAVIGATION }],
                })
            },
        ]);

    const onLogin = () => {

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

    const onGoogleSignIn = () => {
        userStore.onGoogleButtonPress()
    }

    if (userStore.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center",  }}>
                <ActivityIndicator size={"small"} />
            </View>
        );
    }


    return (
        <View style={{ top: inset.top, marginHorizontal: 18, marginBottom: '20%' }}>
            <View>
                <ELearningAuthHeader
                    ctaText="Sign Up"
                    onClose={onClose}
                    onCtaClick={() => navigation.navigate(ESCREEN.SIGNUP_SCREEN)}
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
                    style={{ marginTop: 8, textAlign: "center" }}
                />
            </View>

            <View style={styles.credentialContainer}>
                <ELearningTextInput
                    inputText={userStore.userEmail}
                    placeholder="Enter email"
                    inputProps={{ inputMode: 'email', keyboardType: 'email-address' }}
                    onChangeText={(text: string) => userStore.getUserEmail(text)}
                />

                <View style={{ marginTop: "6%" }}>
                    <ELearningTextInput
                        placeholder="Password"
                        secureTextEntry
                        inputText={userStore.password}
                        onChangeText={(text: string) => userStore.getUserPassword(text)}
                    />

                    <TouchableOpacity>
                        <ELearningText
                            text="Forgot Password?"
                            preset="regular"
                            size={12}
                            style={{ textAlign: "right", marginTop: 8, color: color.forestGreen }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 36 }}>
                    <ELearningLoadingButton
                        isLoading={false}
                        handlePress={onLogin}
                        label="Sign In"
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
        </View>
    );
};

export default observer(Login);

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        marginTop: "10%",
    },
    credentialContainer: {
        marginTop: "22%",
    },
    ctaContainer: {
        marginTop: 30,
        alignItems: "center",
    },
});
