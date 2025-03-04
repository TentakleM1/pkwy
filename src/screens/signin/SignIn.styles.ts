import {StyleSheet} from 'react-native';
import { WIDTH_SCREEN } from 'src/constants/constant';
import { color } from 'src/styles/color.styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  containerTitle: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Encode Sans',
    fontWeight: 700,
    lineHeight: 20,
  },

  containerForm: {
    flex: 4,
    width: WIDTH_SCREEN - 48,
  },

  containerFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  footerText: {
    color: color.ashGray,
  },

  button: {
    backgroundColor: 'none',
  },

  text: {
    color: color.darkJade,
    fontSize: 14,
    fontWeight: 600,
  },

  containerAuth: {
    flex: 1,
  },

  containerLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: color.xanadu,
    opacity: 0.3,
  },

  lineText: {
    color: color.xanadu,
  },

  containerBadge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '2%',
  },

  buttonBadge: {
    height: 60,
    width: '48%',
  },

  buttonBadgeFacebook: {
    backgroundColor: color.facebookBlue,
  },

  buttonBadgeApple: {
    backgroundColor: color.charcoalBlack,
  },
});

export default styles;
