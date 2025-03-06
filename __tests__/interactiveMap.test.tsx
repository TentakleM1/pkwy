import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import InteractiveMap from 'src/components/interactiveMap/InteractiveMap';
import { markers } from 'src/screens/map/mock';

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    })
  ),
}));

describe('InteractiveMap', () => {
  test('should match snapshot after rendering', async () => {
    const { toJSON } = render(<InteractiveMap markers={markers} />);

    await waitFor(() => expect(jest.mocked(require('expo-location').getCurrentPositionAsync)).toHaveBeenCalled());

    expect(toJSON()).toMatchSnapshot();
  });
});
