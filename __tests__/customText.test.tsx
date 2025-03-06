import { render } from '@testing-library/react-native';
import React from 'react';
import CustomText from 'src/components/customText/CustomText';

describe('CustomText', () => {
  it('renders correctly with h1 style', () => {
    const {toJSON} = render(
      <CustomText h1>
        H1 Text
      </CustomText>
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with h2 style', () => {
    const {toJSON} = render(
      <CustomText h2>
        H2 Text
      </CustomText>
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with no default props', () => {
    const {toJSON} = render(
      <CustomText>
        Default Text
      </CustomText>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
