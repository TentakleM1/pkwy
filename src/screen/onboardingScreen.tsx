import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {CustomButton} from '../components';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {OnBoardingLayout} from '../feature';
import {withAnchorPoint} from '../utils/paralax';

const items: {url: number; title: string; info: string}[] = [
  {
    url: require('../assets/onboarding/onboarding_1.png'),
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "PKWY Tavern and Ritchie McNeely's are more than pubs. We provide places for gathering for wide variety of visitors.",
  },
  {
    url: require('../assets/onboarding/onboarding_2.png'),
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "Let's take part in different activities, buy more and you will be rewarded.",
  },
  {
    url: require('../assets/onboarding/onboarding_3.png'),
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "Let's take part in different activities, buy more and you will be rewarded.",
  },
];

const WIDTH = Dimensions.get('window').width;

export const OnBoardingScreen: FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const opacity = useSharedValue<number>(1);
  const baseOptions = {
    vertical: false,
    width: WIDTH,
    height: WIDTH * 0.6,
  } as const;

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const buttonHideStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {duration: 500}),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerSkip, buttonHideStyle]}>
        <CustomButton
          title="SKIP"
          style={{button: styles.button, text: styles.text}}
        />
      </Animated.View>
      <View style={styles.containerTest}>
        <Carousel
          ref={ref}
          height={550}
          width={WIDTH}
          data={items}
          customAnimation={(value: number) => {
            'worklet';
            const size = WIDTH;
            const scale = interpolate(
              value,
              [-2, -1, 0, 1, 2],
              [1.7, 1.2, 1, 1.2, 1.7],
              Extrapolation.CLAMP,
            );

            const translate =
              interpolate(
                value,
                [-2, -1, 0, 1, 2],
                [-size * 1.45, -size * 0.9, 0, size * 0.9, size * 1.45],
              );

            const transform = {
              transform: [
                {scale},
                {
                  translateX: translate,
                },
                {perspective: 150},
                {
                  rotateY: `${interpolate(
                    value,
                    [-1, 0, 1],
                    [30, 0, -30],
                    Extrapolation.CLAMP,
                  )}deg`,
                },
              ],
            };

            return {
              ...withAnchorPoint(
                transform,
                {x: 0.3, y: 0.5},
                {
                  width: baseOptions.width,
                  height: baseOptions.height,
                },
              ),
            };
          }}
          scrollAnimationDuration={1200}
          onProgressChange={(_, absoluteProgress) => {
            if (Math.round(absoluteProgress) === 2) {
              opacity.value = 0;
            }
            if (Math.round(absoluteProgress) < 2) {
              opacity.value = 1;
            }
            progress.value = absoluteProgress;
          }}
          renderItem={item => (
            <OnBoardingLayout title={item.item.title} info={item.item.info}>
              <Image
                source={item.item.url}
                style={{width: WIDTH, height: 323}}
              />
            </OnBoardingLayout>
          )}
        />
      </View>
      <View style={styles.containerStep}>
        <Pagination.Basic
          progress={progress}
          data={items}
          dotStyle={{
            backgroundColor: 'rgba(19, 105, 59, 0.20)',
            borderRadius: 50,
          }}
          containerStyle={{gap: 5}}
          onPress={onPressPagination}
        />
      </View>
      <View style={styles.containerContinue}>
        <CustomButton
          title="Continue"
          onPress={() => onPressPagination(progress.value + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F0E5',
  },

  button: {
    backgroundColor: 'none',
  },

  text: {
    color: '#13693B',
    fontSize: 12,
  },

  containerTest: {
    flex: 5,
  },

  containerSkip: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 24,
  },

  containerStep: {
    flex: 1,
    marginHorizontal: 24,
  },

  containerContinue: {
    flex: 1,
    marginHorizontal: 24,
  },
});
