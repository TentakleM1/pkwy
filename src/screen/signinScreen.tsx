import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Sign in
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
});
