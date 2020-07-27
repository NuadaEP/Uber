import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function Map() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0149,
          longitudeDelta: 0.0134,
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={region}
        showsUserLocation
        loadingEnabled
      />
    </View>
  );
}

export default Map;
