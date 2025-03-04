import {StyleSheet} from 'react-native';
import { HEIGHT_SCREEN } from 'src/constants/constant';
import { color } from 'src/styles/color.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },

  zoom: {
    marginHorizontal: 5,
    gap: 10,
    position: 'absolute',
    right: 0,
    top: HEIGHT_SCREEN / 2 - 100,
    opacity: 0.8,
  },

  zoomButton: {width: 50, height: 50, borderRadius: '100%'},

  controllMap: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: color.white,
    paddingVertical: 10,
    opacity: 0.9,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,
  },
});
