import React, {FC} from 'react';
import BootSplash from 'react-native-bootsplash';
import {useWindowDimensions} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import styles from './AnimatedBootSplash.styles';

const DURATION_ANIMATED = 400;

type Props = {
  onAnimationEnd(): void;
};

const AnimatedBootSplash: FC<Props> = props => {
  const opacity = useSharedValue(1);
  const positionY = useSharedValue(0);
  const heightDimensions = useWindowDimensions().height / 2;

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {duration: DURATION_ANIMATED / 2}),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: positionY.value}],
    };
  });

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../../assets/bootsplash/manifest.json'),
    logo: require('../../../assets/bootsplash/logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,
    animate: () => {
      positionY.value = withSequence(
        withTiming(positionY.value - 20, {
          duration: DURATION_ANIMATED / 2,
        }),
        withTiming(heightDimensions, {duration: DURATION_ANIMATED}),
      );

      opacity.value = withDelay(DURATION_ANIMATED / 2, withTiming(0));

      setTimeout(() => {
        props.onAnimationEnd();
      }, DURATION_ANIMATED + 500);
    },
  });

  return (
    <Animated.View
      {...container}
      style={[container.style, containerStyle, styles.container]}>
      <Animated.Image {...logo} style={[logo.style, logoStyle]} />
    </Animated.View>
  );
};

export default AnimatedBootSplash;
