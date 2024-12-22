import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ELearningImage from "@eLearning/base/ELearningImage/ELearningImage";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import { OnboardingData } from "@eLearning/types/types";
import { color } from "@eLearning/theme/color";
type Props = {
  screen: OnboardingData;
};

const RenderItem = ({ screen }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ELearningImage
        imageData={{source: screen.imgSource, style:{width: width - 120, aspectRatio: 0.8} }}
      />
      <Text style={styles.title}>{screen.text}</Text>
      <Text style={[styles.description, { width: width - 30 }]}>
        {screen.description}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
  },
  description: {
    color: color.grayishBlue,
    marginVertical: 16,
    lineHeight: 22,
    flexWrap: "nowrap",
  },
  header: {
    alignSelf: "flex-end",
    margin: 10,
    marginBottom: 10,
  },
});

// export default RenderItem;
