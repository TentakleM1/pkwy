import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './Map.styles';
import InteractiveMap from 'src/components/interactiveMap/InteractiveMap';
import { markers } from './mock';

const Map: FC = () => {
  return (
    <View style={styles.container}>
      <InteractiveMap markers={markers} />
    </View>
  );
};

export default Map;
