import { WIDTH_SCREEN } from 'src/constants/constant';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    width: 300,
  },

  text: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 25,
  },

  titleText: {
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: 30,
  },

  containerInfo: {
    flex: 1,
    width: 300,
    justifyContent: 'center',
  },

  box: {
    height: '100%',
    width: WIDTH_SCREEN,
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;
