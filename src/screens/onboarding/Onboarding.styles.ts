import {StyleSheet} from 'react-native';
import { WIDTH_SCREEN } from 'src/constants/constant';
import { color } from 'src/styles/color.styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.mintTint,
  },

  buttonSkip: {
    height: 56,
    backgroundColor: 'none',
  },

  textSkip: {
    color: color.darkJade,
    fontSize: 12,
  },

  button: {
    height: 56,
  },

  text: {
    color: color.white,
    fontWeight: 700,
  },

  containerCarousel: {
    flex: 5,
    justifyContent: 'space-between',
  },

  containerSkip: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 24,
  },

  containerStep: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'center',
  },

  containerContinue: {
    flex: 1,
    marginHorizontal: 24,
  },

  constainerPagination: {
    gap: 15,
  },

  dot: {
    backgroundColor: color.transparentDeepGreen,
    borderRadius: 50,
  },

  sizeImage: {
    width: WIDTH_SCREEN,
    height: 323,
  },
});

export default styles;
