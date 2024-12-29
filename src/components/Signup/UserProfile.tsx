/**
 * UserProfile Component
 * 
 * This component allows users to display and edit their profile picture. 
 * It provides an interface for users to pick an image from their device's 
 * image library and displays the selected image or a default placeholder 
 * image if no image has been selected.
 * 
 * Key Features:
 * - Utilizes the `expo-image-picker` library to enable users to select 
 *   an image from their device's photo library.
 * - Displays the selected image using the `ELearningImage` component, 
 *   which supports custom styling and content fitting.
 * - Shows a user-edit icon (pencil) overlay on the image, indicating 
 *   that the user can edit their profile picture.
 * - Uses local state to manage the selected image URI, allowing for 
 *   dynamic updates to the displayed image.
 * 
 * Usage:
 * This component is intended to be used in user profile settings or 
 * account management screens, where users can customize their profile 
 * picture.
 */
import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import ELearningImage from "@eLearning/base/ELearningImage/ELearningImage";
import { images } from "assets/image";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { color } from "@eLearning/theme/color";

const UserProfile = () => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity onPress={pickImage} style={styles.container}>
            <ELearningImage
                imageData={{
                    source: image || images.dummyUser,
                    contentFit: 'cover',
                    style: { width: 100, height: 100, borderRadius: 50, },
                }}
            />
            <View style={styles.editIcon}>
                <FontAwesome5 name="user-edit" size={24} color={color.crimsonRed} />
            </View>
        </TouchableOpacity>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 22,
        right: 0,
    },
});
