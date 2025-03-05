import { render } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CustomText from 'src/components/customText/CustomText';

describe('CustomText', () => {
  it('renders correctly with h1 style', () => {
    const tree = renderer.create(
      <CustomText h1>
        H1 Text
      </CustomText>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with h2 style', () => {
    const tree = render(
      <CustomText h2>
        H2 Text
      </CustomText>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with no default props', () => {
    const tree = render(
      <CustomText>
        Default Text
      </CustomText>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
