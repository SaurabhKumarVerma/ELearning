/**
 * Account Component
 * 
 * This component serves as the user account profile screen.It displays the user's profile information, including their 
 * name and email, and provides a logout button. The layout is responsive 
 * and adapts to the current theme (light or dark) of the application.
 * 
 * Functionality:
 * - The component utilizes the `useTheme` hook from RNEUI to determine the 
 *   current theme and adjust the background color of the header accordingly.
 * - It uses the `useNavigation` hook from React Navigation to handle 
 *   navigation actions, specifically for logging out the user and redirecting 
 *   them to the login screen.
 * - The `onLogout` function resets the navigation stack and navigates the 
 *   user to the authentication screen, specifically the login screen.
 * 
 * Structure:
 * - The component is structured into several sections:
 *   - **Header**: Displays the profile header with the title "Profile" 
 *     and the user's profile information rendered by the `User Profile` 
 *     component.
 *   - **Details**: Contains the user's name and email, each displayed with 
 *     a label and a divider for separation.
 *   - **Logout Button**: A button that allows the user to log out of their 
 *     account, which triggers the `onLogout` function when pressed.
 */
import { StyleSheet, View } from "react-native";
import React from "react";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import { color } from "@eLearning/theme/color";
import { useTheme } from "@rneui/themed";
import { MODE } from "@eLearning/types/types";
import UserProfile from "../Signup/UserProfile";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { Divider } from "@rneui/base";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { ESCREEN } from "@eLearning/types/screenName";

const Account = () => {
    const { theme } = useTheme();
    const navigation = useNavigation();
    const backgroundColor =
        theme.mode === MODE.DARK ? color.darkForestGreen : color.forestGreen;

    const onLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: ESCREEN.AUTHENTICATION_SCREEN,  params:{
                screen: ESCREEN.LOGIN_SCREEN,
            }}],
        });
    };

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { backgroundColor }]}>
                <ELearningHeader
                    showLeftIcon={false}
                    headerText="Profile"
                    textPreset="semiBold"
                    textStyle={styles.headerText}
                />
                <View style={styles.profileContainer}>
                    <UserProfile />
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.detailsBlock}>
                    <ELearningText text="Name" preset="semiBold" size={16} />
                    <ELearningText text="ABC" />
                    <Divider style={styles.divider} />
                </View>

                <View style={[styles.detailsBlock, styles.detailsSpacing]}>
                    <ELearningText text="Email" preset="semiBold" size={16} />
                    <ELearningText text="xyz.com" />
                    <Divider style={styles.divider} />
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <ELearningLoadingButton
                    isLoading={false}
                    handlePress={onLogout}
                    label="Logout"
                    icon={
                        <Feather
                            name="log-out"
                            size={24}
                            color={color.whisperWhite }
                        />
                    }
                />
            </View>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
    },
    headerText: {
        paddingTop: "10%",
        marginHorizontal: 24,
    },
    profileContainer: {
        marginTop: 24,
        alignItems: "center",
        marginBottom: "10%",
    },
    detailsContainer: {
        flex: 2,
        marginTop: "20%",
    },
    detailsBlock: {
        marginHorizontal: 10,
    },
    detailsSpacing: {
        marginTop: "4%",
    },
    divider: {
        marginTop: 10,
    },
    buttonWrapper: {
        marginHorizontal: 24,
        marginTop: "10%",
    },
});
