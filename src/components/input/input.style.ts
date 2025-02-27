import {StyleSheet} from 'react-native';
import {color} from '../../styles/color.style';

export const styles = StyleSheet.create({
  container: {
    height: 52,
    borderColor: color.xanadu,
    borderRadius: 8,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  input: {
    width: '85%',
  },
});
