import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import { CustomText } from '../../components';

const WIDTH = Dimensions.get('window').width;

type Props = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export const OnBoardingLayout: FC<Props> = props => {
  return (
    <View style={styles.box}>
      <View style={styles.containerTitle}>
        <CustomText style={styles.titleText} h1>{props.title}</CustomText>
      </View>
      {props.children}
      <View style={styles.containerInfo}>
        <CustomText style={styles.text} h2>{props.info}</CustomText>
      </View>
    </View>
  );
};

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
  },

  box: {
    height: '100%',
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
});
