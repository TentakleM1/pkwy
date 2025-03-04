import React, {FC} from 'react';
import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { show, showing } from 'src/assets';
import { styles } from './Input.style';

type Props = TextInputProps & PressableProps & {
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
};

const Input: FC<Props> = props => {
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

export default Input;
