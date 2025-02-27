import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {CustomText} from './customText';

const meta = {
  title: 'CustomText',
  component: CustomText,
  args: {
    h1: true,
    children: 'What the beer ?!',
  },
  decorators: [
    Story => (
      <View style={{padding: 16, alignItems: 'flex-start'}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const H2Example: Story = {
  args: {
    h2: true,
    children: 'This is H2 text',
  },
};

export const H3Example: Story = {
  args: {
    h3: true,
    children: 'This is H3 text',
  },
};

export const H4Example: Story = {
  args: {
    h4: true,
    children: 'This is H4 text',
  },
};
