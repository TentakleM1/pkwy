import React, {FC, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { AnimatedBootSplash } from './animatedBootSplash';

type Props = {
  children: React.ReactNode;
};

export const BootSplashLayout: FC<Props> = propos => {
  const [isVisible, setIsVisisble] = useState(true);

  return (
    <View style={styles.container}>
      {propos.children}
      {isVisible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setIsVisisble(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
