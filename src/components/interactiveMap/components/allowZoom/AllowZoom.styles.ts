import {StyleSheet} from 'react-native';
import {HEIGHT_SCREEN} from 'src/constants/constant';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    gap: 10,
    position: 'absolute',
    right: 0,
    top: HEIGHT_SCREEN / 2 - 100,
    opacity: 0.8,
  },

  zoomButton: {width: 50, height: 50, borderRadius: '100%'},
});
