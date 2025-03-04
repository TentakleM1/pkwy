import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './AllowZoom.styles';
import { color } from 'src/styles/color.styles';
import CustomButton from 'src/components/customButton/CustomButton';
import CustomText from 'src/components/customText/CustomText';

type Props = {
  onZoom(): void;
  onUnzoom(): void;
  onAllowLocation(): void;
};

export const AllowZoom: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <CustomButton onPress={props.onZoom} style={styles.zoomButton}>
        <CustomText style={{color: color.white}} h1>
          +
        </CustomText>
      </CustomButton>
      <CustomButton onPress={props.onUnzoom} style={styles.zoomButton}>
        <CustomText style={{color: color.white}} h1>
          -
        </CustomText>
      </CustomButton>
      <CustomButton onPress={props.onAllowLocation} style={styles.zoomButton}>
        <CustomText style={{color: color.white}} h1>
          me
        </CustomText>
      </CustomButton>
    </View>
  );
};
