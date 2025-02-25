import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {CustomButton, CustomText} from '../components';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {OnBoardingLayout} from '../feature';
import styles from './onboarding.style';
import {WIDTH_SCREEN} from '../constant/constant';
import {setOnboardingStorage} from '../utils/storage/onboarding';
import {useNavigation} from '@react-navigation/native';
import {onboardingOne, onboardingThree, onboardingTwo} from '../assets';

const items: {url: number; title: string; info: string}[] = [
  {
    url: onboardingOne,
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "PKWY Tavern and Ritchie McNeely's are more than pubs. We provide places for gathering for wide variety of visitors.",
  },
  {
    url: onboardingTwo,
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "Let's take part in different activities, buy more and you will be rewarded.",
  },
  {
    url: onboardingThree,
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    info: "Let's take part in different activities, buy more and you will be rewarded.",
  },
];

const HEIGHT = 550;

export const OnBoardingScreen: FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const opacity = useSharedValue<number>(1);
  const navigation = useNavigation().getParent();

  const onPressPagination = (index: number) => {
    if (index === items.length) {
      handleSkipOnboarding();
    }

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

  const handleSkipOnboarding = () => {
    setOnboardingStorage(true);
    navigation?.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerSkip, buttonHideStyle]}>
        <CustomButton style={styles.buttonSkip} onPress={handleSkipOnboarding}>
          <CustomText style={styles.textSkip}>SKIP</CustomText>
        </CustomButton>
      </Animated.View>
      <View style={styles.containerCarousel}>
        <Carousel
          ref={ref}
          height={HEIGHT}
          width={WIDTH_SCREEN}
          data={items}
          fixedDirection={'negative'}
          onProgressChange={(_, absoluteProgress) => {
            const roundedAbsoluteProgress = Math.round(absoluteProgress);
            if (roundedAbsoluteProgress === 2) {
              opacity.value = 0;
            }
            if (roundedAbsoluteProgress < 2) {
              opacity.value = 1;
            }
            progress.value = absoluteProgress;
          }}
          renderItem={item => (
            <OnBoardingLayout title={item.item.title} info={item.item.info}>
              <Image source={item.item.url} style={styles.sizeImage} />
            </OnBoardingLayout>
          )}
        />
      </View>
      <View style={styles.containerStep}>
        <Pagination.Basic
          progress={progress}
          data={items}
          dotStyle={styles.dot}
          containerStyle={styles.constainerPagination}
          onPress={onPressPagination}
        />
      </View>
      <View style={styles.containerContinue}>
        <CustomButton
          style={styles.button}
          onPress={() => onPressPagination(progress.value + 1)}>
          <CustomText h2 style={styles.text}>
            Continue
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};
