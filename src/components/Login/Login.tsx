import {
    Appearance,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { MODE } from "@eLearning/types/types";
import ELearningTextInput from "@eLearning/base/ELearningTextInput/ELearningTextInput";
import { useTheme } from "@rneui/themed";
import { color } from "@eLearning/theme/color";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = () => {
    const inset = useSafeAreaInsets();

    const toggleDarkMode = () => {
        Appearance.getColorScheme() === MODE.DARK
            ? Appearance.setColorScheme(MODE.LIGHT)
            : Appearance.setColorScheme(MODE.DARK);
    };

    return (
        <ScrollView style={{ flex: 1, top: inset.top, marginHorizontal: 18 }}>
            <View>
                <ELearningAuthHeader
                    ctaText="Sign Up"
                    onClose={toggleDarkMode}
                    onCtaClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </View>

            <View style={styles.titleContainer}>
                <ELearningText
                    text="Join E-Learning Community"
                    preset="semiBold"
                    size={24}
                />
                <ELearningText
                    text="Subscribe quickly with us"
                    preset="regular"
                    size={16}
                    style={{ marginTop: 8 }}
                />
            </View>

            <View style={styles.credentialContainer}>
                <ELearningTextInput
                    inputText={""}
                    placeholder="Enter email"
                    onChangeText={(text: string) => { }}
                />

                <View style={{ marginTop: "6%" }}>
                    <ELearningTextInput
                        placeholder="Password"
                        secureTextEntry
                        inputText={""}
                        onChangeText={(text: string) => { }}
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
                        text="We mever share anything on your behalf"
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
                    handlePress={() => console.log("clec")}
                    label="Continue With Google"
                    textPresets="medium"
                    textStyle={{ color: color.whisperWhite }}
                />
            </View>
        </ScrollView>
    );
};

export default Login;

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
