import {StyleSheet} from 'react-native';
import { color } from 'src/styles/color.styles';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: color.white,
    paddingVertical: 10,
    opacity: 0.9,
    alignItems: 'center',
    gap: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,
  },

  button: {
    height: 58,
    width: 300,
  },

  markerButton: {
    height: 58,
    width: 100,
    marginHorizontal: 10,
  },

  markerText: {
    fontWeight: 600,
    color: color.white,
  },
});
