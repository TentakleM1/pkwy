import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './OnboardingLayout.style';
import CustomText from '../customText/CustomText';

type Props = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const OnboardingLayout: FC<Props> = props => {
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

export default OnboardingLayout;
