import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Animated, {
    runOnJS,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";
import RenderItem from "./RenderItem";
import onboardingData from "./onboardingData";
import Paginator from "./Paginator";
import CircularButton from "./CircularButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MAX_LENGHT = onboardingData.length;

export const Onboarding = () => {
    const navigation = useNavigation();
    const aref = useAnimatedRef<Animated.ScrollView>();
    const [index, setIndex] = useState(0);
    const scrollX = useSharedValue(0);
    const insert = useSafeAreaInsets()
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollX.value = event.contentOffset.x;
        runOnJS(setIndex)(Math.round(event.contentOffset.x / SCREEN_WIDTH));
    });
    const onPressButton = () => {
        if (index !== MAX_LENGHT - 1) {
            aref.current?.scrollTo({
                x: index > 0 ? SCREEN_WIDTH * (index + 1) : SCREEN_WIDTH,
                y: 0,
                animated: true,
            });
            setIndex(index + 1);
        } else if (index === 2) {
            //   navigation;
        }
    };

    return (
        <ScrollView style={{ top: insert.top, bottom: insert.bottom }} showsVerticalScrollIndicator={false}>
            <Animated.ScrollView
                onScroll={scrollHandler}
                ref={aref}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                pagingEnabled
                style={[styles.container]}
            >
                {onboardingData.map((screen, index) => {
                    return <RenderItem screen={screen} key={index.toString()} />;
                })}
            </Animated.ScrollView>
            <View>
                <View style={{ marginVertical: 20 }}>
                    <Paginator itemsLength={onboardingData.length} scrollX={scrollX} />
                </View>

                {/* <CircularButton
                    screensLenght={onboardingData.length}
                    onPress={onPressButton}
                    index={index}
                /> */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginBottom: 20,
    },
});
