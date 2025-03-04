import React, {FC, useEffect, useRef, useState} from 'react';
import {Alert, Platform, View} from 'react-native';
import MapView, {
  MapMarkerProps,
  MapPressEvent,
  Marker,
  Region,
} from 'react-native-maps';
import * as Location from 'expo-location';
import {PermissionStatus} from 'expo-location';
import {DeviceZoom} from 'src/types/zoom';
import {styles} from './InteractiveMap.styles';
import {MapInteractionPanel} from './components/mapInteractionPanel/MapInteractionPanel';
import {AllowZoom} from './components/allowZoom/AllowZoom';
import {changeCameraMap} from 'src/utils/changeCameraMap/changeCameraMap';

const ANIMATE_CAMERA_DURATION = 500;
const DEFAULT_ZOOM = 2000;

type Props = {
  markers: MapMarkerProps[];
};

const InteractiveMap: FC<Props> = props => {
  const mapRef = useRef<MapView | null>(null);
  const isIos = Platform.OS === 'ios';
  const zoom = isIos ? DeviceZoom.ios : DeviceZoom.android;
  const [location, setLocation] = useState<Region | undefined>(undefined);
  const [markers, setMarkers] = useState(props.markers);
  const [newMarker, setNewMarker] = useState<MapMarkerProps>({
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    async function getCurrentLocation() {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== PermissionStatus.GRANTED) {
        console.log('Permission to access location was denied');
        return;
      }

      const currentPosition = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
      });
    }

    getCurrentLocation();
  }, []);

  const onZoom = async () => {
    if (mapRef.current) {
      changeCameraMap(mapRef.current, ANIMATE_CAMERA_DURATION, zoom, true);
    }
  };

  const onUnzoom = async () => {
    if (mapRef.current) {
      changeCameraMap(mapRef.current, ANIMATE_CAMERA_DURATION, zoom);
    }
  };

  const onAllowLocation = async () => {
    const currentPosition = await Location.getCurrentPositionAsync();
    const camera = await mapRef.current?.getCamera();

    if (camera && currentPosition) {
      camera.center = {
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      };
      camera[zoom] = DEFAULT_ZOOM;
      mapRef.current?.animateCamera(camera, {
        duration: ANIMATE_CAMERA_DURATION,
      });
    }
  };

  const onAllowLocationMarker = async (markerId: number) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = markers[markerId].coordinate;
      camera[zoom] = DEFAULT_ZOOM;
      mapRef.current?.animateCamera(camera, {
        duration: ANIMATE_CAMERA_DURATION,
      });
    }
  };

  const handleCreatMarker = () => {
    if (newMarker.title?.length !== 0) {
      setMarkers(prev => {
        const newMarkers = [...prev, newMarker];
        return newMarkers;
      });
      return;
    }
    Alert.alert('', 'Write name marker');
  };

  const onPressMap = (event: MapPressEvent) => {
    setNewMarker(prev => {
      return {
        ...prev,
        coordinate: event.nativeEvent.coordinate,
      };
    });
  };

  const onChangeText = (text: string) => {
    setNewMarker(prev => {
      return {
        ...prev,
        title: text.trim(),
      };
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        region={location}
        onPress={onPressMap}
        showsUserLocation
        showsMyLocationButton={false}>
        <Marker {...newMarker} />
        {markers.map((marker, index) => {
          return <Marker key={`${marker.coordinate.latitude}${index}`} {...marker} />;
        })}
      </MapView>
      <MapInteractionPanel
        markers={markers}
        onChangeText={onChangeText}
        onAllowLocationMarker={onAllowLocationMarker}
        handleCreatMarker={handleCreatMarker}
      />
      <AllowZoom
        onZoom={onZoom}
        onUnzoom={onUnzoom}
        onAllowLocation={onAllowLocation}
      />
    </View>
  );
};

export default InteractiveMap;
