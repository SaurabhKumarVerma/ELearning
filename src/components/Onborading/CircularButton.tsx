import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, {
    Easing,
    FadeIn,
    ReduceMotion,
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { color } from "@eLearning/theme/color";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 50;
const circumference = radius * Math.PI * 2;
type Props = {
    index: number;
    onPress: () => void;
    screensLenght: number;
};
const centerX = 70;
const centerY = 70;

const CircularButton = ({ screensLenght, onPress, index }: Props) => {
    const strokeOffset = useSharedValue(circumference);

    const animatedCircleProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: withTiming(strokeOffset.value, {
                duration: 500,
                reduceMotion: ReduceMotion.System,
                easing: Easing.ease,
            }),
        };
    });
    useEffect(() => {
        let percentage = circumference / screensLenght;
        strokeOffset.value = circumference - percentage * (index + 1);
    }, [index]);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={[styles.shadow, {
                    position: "absolute",
                    zIndex: 2,
                }]}
            >
                <SimpleLineIcons name="arrow-right" size={28} color="black" />
            </Pressable>
            <Svg height={centerY * 2} width={centerX * 2}>
                <Circle
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    stroke={color.emeraldGreen}
                    strokeWidth="2"
                />
                <AnimatedCircle
                    entering={FadeIn.delay(100)}
                    animatedProps={animatedCircleProps}
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    fill={color.paleTurquoise}
                    stroke={color.tropicalSeaGreen}
                    strokeWidth="4"
                    strokeLinecap={"round"}
                    strokeDasharray={`${radius * Math.PI * 2}`}
                />
            </Svg>
        </View>
    );
};

export default CircularButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
});
