import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import CustomButton from 'src/components/customButton/CustomButton';

describe('CustomButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <CustomButton>
        <Text>Click me</Text>
      </CustomButton>
    );

    expect(getByText('Click me')).toBeTruthy();

    const { toJSON } = render(
      <CustomButton>
        <Text>Click me</Text>
      </CustomButton>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('handles onPress event', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomButton onPress={mockOnPress}>
        <Text>Click me</Text>
      </CustomButton>,
    );

    const button = getByText('Click me');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
