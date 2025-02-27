import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './input';

const meta = {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Enter your e-mail',
  },
  decorators: [
    Story => (
      <View style={{padding: 16, alignItems: 'flex-start'}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const PasswordExample = {
  args: {
    isPassword: true,
    secureTextEntry: true,
    placeholder: 'Enter your password',
  },
};
