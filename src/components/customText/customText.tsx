import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';
import { fontSize } from 'src/styles/global.styles';

type Props = TextProps & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean
};

const CustomText: FC<Props> = props => {
  return (
    <Text
      {...props}
      style={[
        props.h1 && fontSize.h1,
        props.h2 && fontSize.h2,
        props.h3 && fontSize.h3,
        props.h4 && fontSize.h4,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
