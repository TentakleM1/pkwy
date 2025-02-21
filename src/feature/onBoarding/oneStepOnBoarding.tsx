import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';

export const OneStepOnBoarding: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={styles.containerImage}>
          <Animated.Image
            style={styles.imageOne}
            source={require('../../assets/img/1d6a6a3d1cb8c0b4e607958ebc43e0d4.png')}
          />
          <Animated.Image
            style={styles.imageOne}
            source={require('../../assets/img/392dc98feb9773338a0c10d61731c431.png')}
          />
        </Animated.View>

        <Animated.View style={styles.containerImage}>
          <Animated.Image
            style={styles.imageOne}
            source={require('../../assets/img/a47ea5163835c5a4828df56964febb77.png')}
          />
          <Animated.Image
            style={styles.imageOne}
            source={require('../../assets/img/1d6a6a3d1cb8c0b4e607958ebc43e0d4.png')}
          />
        </Animated.View>
      </View>

      <Animated.Image
        style={styles.image}
        source={require('../../assets/phone/dbd9187b716b2c62f90b64218f0ef028.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 206,
    height: 323,
  },
  containerImage: {
    position: 'absolute',
  },
  imageOne: {
    width: 179,
    height: 137,
    borderRadius: 8,
  },
});
