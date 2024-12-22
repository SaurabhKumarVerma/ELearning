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
