import React, {FC} from 'react';
import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { color } from '../styles/color.style';
import { show, showing } from '../assets';

type Props = TextInputProps & PressableProps & {
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
};

export const Input: FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput {...props} style={styles.input} />
      {props.isPassword && (
        <Pressable
          {...props}
        >
          <Image
            source={
              props.secureTextEntry
                ? show
                : showing
            }
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
