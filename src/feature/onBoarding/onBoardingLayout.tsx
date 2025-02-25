import React, {FC} from 'react';
import {View} from 'react-native';
import {CustomText} from '../../components';
import styles from './onBoardingLayout.style';

type Props = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export const OnBoardingLayout: FC<Props> = props => {
  return (
    <View style={styles.box}>
      <View style={styles.containerTitle}>
        <CustomText style={styles.titleText} h1>
          {props.title}
        </CustomText>
      </View>
      <View>{props.children}</View>
      <View style={styles.containerInfo}>
        <CustomText style={styles.text} h2>
          {props.info}
        </CustomText>
      </View>
    </View>
  );
};
