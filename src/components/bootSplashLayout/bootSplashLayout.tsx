import React, {FC, useState} from 'react';
import {View} from 'react-native';
import styles from './BootSplashLayout.styles';
import AnimatedBootSplash from '../animatedBootSplash/animatedBootSplash';

type Props = {
  children: React.ReactNode;
};

const BootSplashLayout: FC<Props> = propos => {
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

export default BootSplashLayout;
