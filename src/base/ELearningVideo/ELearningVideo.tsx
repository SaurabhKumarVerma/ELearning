/**
 * ELearningVideo Component
 * 
 * This component is designed to render a video player in a React Native application. It supports
 * full-screen mode when the device orientation changes to landscape and reverts to portrait mode
 * when the video ends or the orientation changes back to portrait.
 * 
 * Features:
 * - Plays a video from a provided URL.
 * - Automatically adjusts to full-screen mode when the device is rotated to landscape.
 * - Exits full-screen mode when the device is rotated back to portrait or when the video ends.
 * - Provides controls for play, pause, seek, and volume adjustment.
 * - Uses `react-native-video` for video playback and `react-native-orientation-locker` for orientation handling.
 */
import {
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import Orientation, { OrientationType } from "react-native-orientation-locker";
import Video, { OnLoadData, VideoRef } from "react-native-video";

interface IELearningVideo {
  videoUrl: string;
  style
  onFullScreenExit?: () => void
}

const ELearningVideo = ({
  videoUrl,
  style,
  onFullScreenExit,
}: IELearningVideo) => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const videoRef = useRef<VideoRef>(null);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const unsubscribe = Orientation.addOrientationListener(handleOrientation);
    return () => {
      unsubscribe;
      setFullScreen(false);
      Orientation.lockToPortrait();
    };
  }, []);

  const handleOrientation = (orientation: OrientationType) => {
    if (
      orientation === OrientationType["LANDSCAPE-RIGHT"] ||
      orientation === OrientationType["LANDSCAPE-LEFT"]
    ) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  };

  const handleOnEnd = () => {
    onFullScreenExit()
  };

  const onLoadVideo = (video:OnLoadData) => {
    videoRef.current.seek(0)
  }

  
  return (
    <>
       <View>

       <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={[styles.video, { height: fullScreen ? height : 300 }]}
          controls
          fullscreen={fullScreen}
          onLoad={(data) => onLoadVideo(data)}
          onEnd={handleOnEnd}
        />
        
      </View>

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
