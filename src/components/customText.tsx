import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

type Props = TextProps & {
  h1?: boolean;
  h2?: boolean;
};

export const CustomText: FC<Props> = props => {
  return (
    <Text
      {...props}
      style={[
        props.h1 && {fontSize: 20},
        props.h2 && {fontSize: 16},
        props.style
      ]}>
      {props.children}
    </Text>
  );
};
