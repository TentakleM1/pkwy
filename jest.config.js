module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|' +
      '@react-native|' +
      '@react-navigation|' +
      'react-native-bootsplash|' +
      'react-native-fast-secure-storage|' +
      'react-native-gesture-handler|' +
      'react-native-maps|' +
      'react-native-reanimated|' +
      'react-native-reanimated-carousel|' +
      'react-native-safe-area-context|' +
      'react-native-screens|' +
      'react-native-video|' +
      'expo|' +
      'expo-location|' +
      'expo-modules-core|' +
      'react-native-maps' +
      ')/)',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
