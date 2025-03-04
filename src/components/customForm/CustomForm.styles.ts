import {StyleSheet} from 'react-native';
import { color } from 'src/styles/color.styles';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'space-between',
  },

  textButton: {
    fontWeight: 700,
    color: color.white,
  },

  button: {
    height: 56,
  },

  text: {
    fontWeight: 600,
    marginBottom: 5,
  },

});

export default styles;
