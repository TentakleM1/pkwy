import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './customButton.style';

type Props = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export const CustomButton: FC<Props> = props => {
  return (
    <Pressable
      {...props}
      style={[styles.button, props.style && props.style]}>
      {props.children}
    </Pressable>
  );
};
