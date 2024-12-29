/**
 * ELearningVideo Component
 * 
 * This component is designed to render a video player. It utilizes the `expo-video` library to provide a 
 * customizable video playback experience, including support for 
 * fullscreen mode and picture-in-picture functionality.
 * 
 * Props:
 * - videoUrl (string): The URL of the video to be played.
 * - style (StyleProp<ViewStyle>, optional): Custom styles to be applied 
 *   to the video player.
 * - isFullscreen (boolean, optional): A flag indicating whether the video 
 *   player should support fullscreen mode. Defaults to true.
 * - allowsPictureInPicture (boolean, optional): A flag indicating whether 
 *   picture-in-picture mode is allowed. Defaults to true.
 * - imageUrl (string): The URL of the image to be displayed as a 
 *   placeholder while the video is loading.
 * - onFullScreenExit (function, optional): A callback function that is 
 *   called when the video exits fullscreen mode.
 * 
 * Functionality:
 * - The component uses the `useVideoPlayer` hook to manage video playback, 
 *   including play, pause, and notification settings.
 * - It displays a preview image while the video is loading, using the 
 *   `ImageBackground` component from `expo-image` along with an 
 *   `ActivityIndicator` to indicate loading status.
 * - The component listens for status changes in the video player to 
 *   determine when to show or hide the preview image.
 * - When the video playback reaches the end, it automatically exits 
 *   fullscreen mode and triggers the `onFullScreenExit` callback if provided.
 */
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
