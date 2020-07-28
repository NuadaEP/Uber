import React, {useEffect, useState, useCallback, useRef} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Search from '../Search';
import Directions from '../Directions';

function Map() {
  const mapView = useRef(null);

  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleLocationSelected = useCallback((data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  }, []);

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
      (error) => {
        console.log('error', error);
      },
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
        ref={mapView}>
        {destination && (
          <Directions
            destination={destination}
            origin={region}
            onReady={(result) => {
              console.log(mapView);
              mapView.current.fitToCoordinates(result.coordinates);
            }}
          />
        )}
      </MapView>

      <Search onLocationSelected={handleLocationSelected} />
    </View>
  );
}

export default Map;
