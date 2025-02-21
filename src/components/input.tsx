import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps & {

}

export const Input: FC<Props> = (props) => {
  return <TextInput { ...props } style={styles.input}  />;
};

const styles = StyleSheet.create({
    input: {},
});
