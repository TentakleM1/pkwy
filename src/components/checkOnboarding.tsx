import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useOnBoarding } from '../hooks';

type Props = {
  children: React.ReactNode
}

export const CheckOnBoarding: FC<Props> = (props) => {
  const isOnBoarding = useOnBoarding();

  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
