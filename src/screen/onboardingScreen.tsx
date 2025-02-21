import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CustomButton} from '../components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { OnBoardingLayout, OneStepOnBoarding } from '../feature';

const items = [
  {color: '#FFE780'},
  {color: '#87CCE8'},
  {color: '#FFA3A1'},
  {color: '#B1DFD0'},
];

const WIDTH = Dimensions.get('window').width;

export const OnBoardingScreen: FC = () => {
  const offset = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const advanceBy = () => {
    const newOffset = offset.value + WIDTH * -1;

    offset.value = withSpring(newOffset, {
      restDisplacementThreshold: 5,
      restSpeedThreshold: 5,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSkip}>
        <CustomButton title="SKIP" style={{button: styles.button, text: styles.text}} />
      </View>
      <View style={styles.containerTest}>
        <Animated.View style={[styles.row, animatedStyles]}>
          {items.map(item => (
            <OnBoardingLayout
              key={item.color}
              title="View events from Ritchie McNeely's and PKWY Tavern locations"
              info="PKWY Tavern and Ritchie McNeely's are more than pubs. We provide
          places for gathering for wide variety of visitors.">
              <OneStepOnBoarding />
            </OnBoardingLayout>
          ))}
        </Animated.View>
      </View>

      <View style={styles.containerStep}></View>
      <View style={styles.containerContinue}>
        <CustomButton title="Continue" onPress={advanceBy} />
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

  row: {
    height: '100%',
    flexDirection: 'row',
  },
});
