import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {CustomButton} from './customButton';
import {CustomText} from '../customText/customText';
import {color} from '../../styles/color.style';

const meta = {
  title: 'CustomButton',
  component: CustomButton,
  args: {
    onPress: () => console.log('press'),
    style: {
      height: 56,
    },
    children: (
      <CustomText h1 style={{color: color.white, fontWeight: 700}}>
        Continue
      </CustomText>
    ),
  },
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const HideBackgroundExample: Story = {
  args: {
    style: {
      backgroundColor: 'none',
    },

    onPress: () => console.log('Hide Background Example'),
    children: (
      <CustomText h2 style={{color: color.darkJade}}>
        SKIP
      </CustomText>
    ),
  },
};
