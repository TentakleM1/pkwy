import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './CustomForm.styles';
import CustomButton from '../customButton/CustomButton';
import CustomText from '../customText/CustomText';
import Input from '../input/Input';

const CustomForm: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <CustomText h2 style={styles.text}>Email</CustomText>
        </View>
        <Input placeholder="Enter your e-mail" />
      </View>
      <View>
        <View>
          <CustomText h2 style={styles.text}>Password</CustomText>
        </View>
        <Input placeholder="Enter your password" isPassword secureTextEntry />
      </View>
      <View>
        <View>
          <CustomText h2 style={styles.text}>Confirm Password</CustomText>
        </View>
        <Input placeholder="Enter your password" isPassword secureTextEntry />
      </View>
      <View>
        <CustomButton style={styles.button}>
          <CustomText h2 style={styles.textButton}>Continue</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default CustomForm;
