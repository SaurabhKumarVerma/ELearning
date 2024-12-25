import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { useRef, useState } from "react";
import { useEvent, useEventListener } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import { EVIDEOPLAYERSTATUS } from "@eLearning/types/types";
import { ImageBackground } from "expo-image";

interface IELearningVideo {
  videoUrl: string;
  style?: StyleProp<ViewStyle>;
  isFullscreen?: boolean;
  allowsPictureInPicture?: boolean;
  imageUrl: string;
  onFullScreenExit?: () => void
}

const ELearningVideo = ({
  videoUrl,
  style,
  isFullscreen = true,
  allowsPictureInPicture = true,
  imageUrl,
  onFullScreenExit
}: IELearningVideo) => {
  const ref = useRef<VideoView>(null);
  const [showPreviewImage, setShowPreviewImage] = useState<boolean>(true);

  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = false;
    player.pause();
    player.showNowPlayingNotification = true;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });


  useEventListener(player, "statusChange", ({ status, error }) => {
    if (status === EVIDEOPLAYERSTATUS.LOADING) {
      setShowPreviewImage(true);
    } else {
      setShowPreviewImage(false);
    }
  });
  
  if (player.currentTime === player.duration && player.currentTime) {
    ref?.current?.exitFullscreen();
    onFullScreenExit()
  }

  return (
    <>
      {showPreviewImage && player.duration === 0 ? (
        <ImageBackground
          source={imageUrl}
          style={[{ ...styles.video }, styles.loadingIndictor]}
        >
          <ActivityIndicator size={"small"} />
        </ImageBackground>
      ) : (
        <><VideoView
            ref={ref}
            style={style ?? styles.video}
            player={player}
            allowsFullscreen={isFullscreen}
            allowsPictureInPicture={allowsPictureInPicture}
            startsPictureInPictureAutomatically />
          </>
      )}
    </>
  );
};

export default ELearningVideo;

const styles = StyleSheet.create({
  video: {
    width: SCREEN_WIDTH,
    height: 275,
  },
  loadingIndictor: {
    justifyContent: "center",
  },
});
