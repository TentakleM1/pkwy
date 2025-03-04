import React, {FC, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import { stock } from 'src/assets';
import { HEIGHT_SCREEN, WIDTH_SCREEN } from 'src/constants/constant';
import {globalStyles} from 'src/styles/global.styles';

const VideoPlayer: FC = () => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <View style={globalStyles.flex}>
      <Video ref={videoRef} source={stock} style={styles.backgroundVideo} repeat controls />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
  },
});
