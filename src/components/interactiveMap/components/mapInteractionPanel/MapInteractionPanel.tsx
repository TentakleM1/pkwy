import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {MapMarkerProps} from 'react-native-maps';
import {styles} from './MapInteractionPanel.styles';
import {color} from 'src/styles/color.styles';
import {globalStyles} from 'src/styles/global.styles';
import {WIDTH_SCREEN} from 'src/constants/constant';
import CustomButton from 'src/components/customButton/CustomButton';
import CustomText from 'src/components/customText/CustomText';
import Input from 'src/components/input/Input';

type Props = {
  markers: MapMarkerProps[];
  onChangeText(text: string): void;
  onAllowLocationMarker(index: number): void;
  handleCreatMarker(): void;
};

export const MapInteractionPanel: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={globalStyles.flex}>
        <FlatList
          style={{width: WIDTH_SCREEN}}
          data={props.markers}
          renderItem={({item, index}) => (
            <CustomButton
              style={styles.markerButton}
              onPress={() => props.onAllowLocationMarker(index)}>
              <CustomText style={styles.markerText} h1>
                {item.title}
              </CustomText>
            </CustomButton>
          )}
          keyExtractor={(item, index) => `${item.coordinate.latitude}${index}`}
          horizontal={true}
        />
      </View>
      <View>
        <Input placeholder="Name marker" onChangeText={props.onChangeText} />
      </View>
      <View style={globalStyles.flex}>
        <CustomButton onPress={props.handleCreatMarker} style={styles.button}>
          <CustomText style={{color: color.white}} h1>
            Marker
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};
