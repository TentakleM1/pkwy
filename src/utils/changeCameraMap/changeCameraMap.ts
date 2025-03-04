import MapView from 'react-native-maps';
import { DeviceZoom } from 'src/types/zoom';

export const changeCameraMap = async (
  map: MapView,
  duration: number,
  zoom: DeviceZoom,
  isZoom: boolean = false,
) => {
  const camera = await map.getCamera();
  if (camera && camera[zoom]) {
    camera[zoom] = Math.round(
      isZoom
        ? camera[zoom] - camera[zoom] / 2
        : camera[zoom] + camera[zoom] / 2,
    );
    map.animateCamera(camera, {duration: duration});
  }
};
