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
    const successCase = ({coords: {latitude, longitude}}) => {
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0149,
        longitudeDelta: 0.0134,
      });
    };

    const errorCase = (error) => {
      console.log('error', error);
    };

    const config = {
      enableHighAccuracy: false,
      timeout: 2000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(successCase, errorCase, config);
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
