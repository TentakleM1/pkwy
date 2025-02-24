import React, { FC } from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { CustomText } from './customText';

type Props = PressableProps & {
    title: string;
    style?: {
      button: StyleProp<ViewStyle>,
      text: StyleProp<TextStyle>,
    }
}

export const CustomButton: FC<Props> = (props) => {
  return (
  <Pressable { ...props } style={[styles.button, props.style && props.style.button]}>
    <CustomText style={[styles.text, props.style && props.style.text]}>
        {props.title}
    </CustomText>
  </Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
      height: 56,
      borderRadius: 10,
      backgroundColor: '#13693B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 700,
      color: '#FFFFFF',
    },
});
