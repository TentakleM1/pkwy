import React, {FC} from 'react';
import {Image, View} from 'react-native';
import styles from './signInScreen.style';
import {CustomButton, CustomText} from '../components';
import {CustomForm} from './components/customForm';

export const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <CustomText h2 style={styles.title}>
          SIGN UP
        </CustomText>
      </View>
      <View style={styles.containerForm}>
        <CustomForm />
        <View style={styles.containerAuth}>
          <View style={styles.containerLine}>
            <View style={styles.line} />
            <CustomText h2 style={styles.lineText} >or sign up with</CustomText>
            <View style={styles.line} />
          </View>
          <View style={styles.containerBadge}>
            <CustomButton
              style={[styles.buttonBadge, styles.buttonBadgeFacebook]}>
              <Image source={require('../assets/badge/facebook.png')} />
            </CustomButton>
            <CustomButton style={[styles.buttonBadge, styles.buttonBadgeApple]}>
              <Image source={require('../assets/badge/apple.png')} />
            </CustomButton>
          </View>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <CustomText h3 style={styles.footerText}>
          Have an account already?
        </CustomText>
        <CustomButton style={styles.button}>
          <CustomText h1 style={styles.text}>
            Sign in
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};
