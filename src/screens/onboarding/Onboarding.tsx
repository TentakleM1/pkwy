import React, {FC} from 'react';
import {Image, View} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './Onboarding.styles';
import {useNavigation} from '@react-navigation/native';
import {onboardingOne, onboardingThree, onboardingTwo} from 'src/assets';
import {AuthStackNavigation, Route} from 'src/types/navigation';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from 'src/constants/constant';
import CustomText from '../../components/customText/CustomText';
import OnboardingLayout from 'src/components/onboardingLayout/OnboardingLayout';
import {setOnboardingStorage} from 'src/utils/storage/onboarding';
import CustomButton from 'src/components/customButton/CustomButton';

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

const Onboarding: FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const opacity = useSharedValue<number>(1);
  const {navigate} = useNavigation<AuthStackNavigation>();

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
    navigate(Route.Map);
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
          height={HEIGHT_SCREEN}
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
            <OnboardingLayout title={item.item.title} info={item.item.info}>
              <Image source={item.item.url} style={styles.sizeImage} />
            </OnboardingLayout>
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

export default Onboarding;
